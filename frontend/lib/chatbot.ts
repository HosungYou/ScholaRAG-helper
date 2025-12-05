/**
 * Chatbot RAG Logic for ScholaRAG Helper
 *
 * This module provides RAG (Retrieval-Augmented Generation) functionality
 * for the chatbot using static knowledge base and Claude Sonnet 4.5.
 */

import Anthropic from '@anthropic-ai/sdk'

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
})

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export interface RAGContext {
  content: string
  metadata: {
    path: string
    filename: string
    chunk_index: number
  }
  similarity: number
}

/**
 * Static knowledge base for RAG-like responses
 */
const STATIC_KNOWLEDGE = [
  {
    keywords: ['workflow', 'stage', '7', 'seven', 'process', 'step'],
    content: `ScholaRAG uses a **7-stage workflow**:
- **Stage 1**: Research Domain Setup (15 min) - Define research question and scope
- **Stage 2**: Query Strategy (10 min) - Design Boolean search queries
- **Stage 3**: PRISMA Configuration (20 min) - Set AI-PRISMA screening criteria
- **Stage 4**: RAG Design (15 min) - Configure vector database
- **Stage 5**: Execution Plan (10 min) - Review automation pipeline
- **Stage 6**: Research Conversation (2-3 hrs) - Query your RAG system
- **Stage 7**: Documentation Writing (1-2 hrs) - Generate PRISMA diagrams`
  },
  {
    keywords: ['prisma', 'screen', 'filter', 'criteria', 'inclusion', 'exclusion'],
    content: `**AI-PRISMA** is ScholaRAG's multi-dimensional screening system:
- Uses PICO framework (Population, Intervention, Comparison, Outcomes)
- Confidence thresholds: Auto-include ≥90%, Auto-exclude ≤10%, Human-review 11-89%
- Evidence grounding: AI must quote abstract text to justify decisions
- Achieves 10-20% pass rates matching manual systematic review standards`
  },
  {
    keywords: ['rag', 'vector', 'database', 'chromadb', 'embedding'],
    content: `**RAG Architecture** in ScholaRAG:
- Vector database: ChromaDB (default) or FAISS
- Embeddings: OpenAI text-embedding-3-small or local alternatives
- Chunking: 1000 tokens with 200 token overlap
- Retrieval: Top-k semantic search with MMR diversity`
  },
  {
    keywords: ['query', 'search', 'boolean', 'database', 'semantic scholar', 'openalex', 'arxiv'],
    content: `**Database Strategy**:
- Open Access (Free): Semantic Scholar (200M+ papers), OpenAlex (250M+ works), arXiv (2.4M+ preprints)
- Institutional (Optional): Scopus, Web of Science
- Query syntax: Boolean operators (AND, OR, NOT) with field-specific search`
  },
  {
    keywords: ['start', 'setup', 'install', 'begin', 'quickstart', 'quick'],
    content: `**Quick Start**:
1. Install VS Code + Claude Code extension
2. Copy setup prompt to Claude Code
3. Answer 3 questions: project name, research question, domain
4. Wait 3 minutes for automatic setup
Visit /guide/quickstart for the copy-paste prompt!`
  },
  {
    keywords: ['error', 'problem', 'issue', 'troubleshoot', 'fix', 'help'],
    content: `**Common Issues**:
- "Python not found": Install from python.org/downloads
- "API key error": Set ANTHROPIC_API_KEY in .env
- "0 papers found": Broaden query terms or check date range
- "PDF download failed": Some papers require institutional access`
  }
]

/**
 * System prompt for the ScholaRAG Helper chatbot
 */
const SYSTEM_PROMPT = `You are a helpful AI assistant for ScholaRAG - an open-source system that helps researchers build custom RAG systems for systematic literature review following PRISMA 2020 guidelines.

Your role is to:
1. Answer questions about ScholaRAG's **7-stage workflow** (not 5-stage - this was updated!)
2. Explain PRISMA configuration and AI-PRISMA screening
3. Help with query design and search strategies
4. Troubleshoot common issues
5. Provide examples and code snippets
6. Guide users through the documentation

The 7 stages are:
1. Research Domain Setup (15 min)
2. Query Strategy Design (10 min)
3. PRISMA Configuration (20 min)
4. RAG System Design (15 min)
5. Execution Plan (10 min)
6. Research Conversation (2-3 hrs automated)
7. Documentation & Writing (1-2 hrs)

Guidelines:
- Be concise but thorough
- Use the provided context when available
- Cite specific stages when relevant (e.g., "In Stage 2: Query Strategy...")
- If you don't know something, suggest visiting the documentation
- Use markdown formatting for code and structured content
- Be encouraging and supportive to researchers

Key technologies:
- Claude Sonnet 4.5 / Haiku 4.5 for AI screening
- ChromaDB for vector storage
- Semantic Scholar, OpenAlex, arXiv for paper retrieval
- Python backend with conversation-driven automation
`

/**
 * Search static knowledge base for relevant content
 * Uses keyword matching for lightweight RAG-like functionality
 */
function searchStaticKnowledge(query: string): RAGContext[] {
  const queryLower = query.toLowerCase()
  const results: RAGContext[] = []

  for (const doc of STATIC_KNOWLEDGE) {
    const matchCount = doc.keywords.filter(keyword =>
      queryLower.includes(keyword.toLowerCase())
    ).length

    if (matchCount > 0) {
      results.push({
        content: doc.content,
        metadata: {
          path: 'static',
          filename: 'knowledge_base',
          chunk_index: STATIC_KNOWLEDGE.indexOf(doc)
        },
        similarity: matchCount / doc.keywords.length
      })
    }
  }

  // Sort by relevance and return top results
  return results
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, 3)
}

/**
 * Generate chatbot response using Claude with RAG
 */
export async function generateChatResponse(
  messages: ChatMessage[],
  useRAG: boolean = true
): Promise<string> {
  try {
    let context = ''

    // Retrieve relevant context if RAG is enabled
    if (useRAG && messages.length > 0) {
      const lastUserMessage = messages
        .filter(m => m.role === 'user')
        .pop()

      if (lastUserMessage) {
        const ragResults = searchStaticKnowledge(lastUserMessage.content)

        if (ragResults.length > 0) {
          context = '\n\n**Relevant Information:**\n\n'
          ragResults.forEach((result, i) => {
            context += `${result.content}\n\n`
          })
        }
      }
    }

    // Build Claude messages
    const claudeMessages = messages.map(msg => ({
      role: msg.role,
      content: msg.content
    }))

    // Add context to the last user message if available
    if (context && claudeMessages.length > 0) {
      const lastMsgIndex = claudeMessages.length - 1
      if (claudeMessages[lastMsgIndex].role === 'user') {
        claudeMessages[lastMsgIndex].content =
          claudeMessages[lastMsgIndex].content + context
      }
    }

    // Call Claude API
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 2048,
      system: SYSTEM_PROMPT,
      messages: claudeMessages as any,
    })

    // Extract text from response
    const textContent = response.content.find(c => c.type === 'text')
    if (!textContent || textContent.type !== 'text') {
      throw new Error('No text content in response')
    }

    return textContent.text

  } catch (error) {
    console.error('Error generating chat response:', error)
    throw error
  }
}

/**
 * Stream chatbot response (for real-time UI updates)
 */
export async function streamChatResponse(
  messages: ChatMessage[],
  onChunk: (chunk: string) => void,
  useRAG: boolean = true
): Promise<void> {
  try {
    let context = ''

    // Retrieve relevant context
    if (useRAG && messages.length > 0) {
      const lastUserMessage = messages
        .filter(m => m.role === 'user')
        .pop()

      if (lastUserMessage) {
        const ragResults = searchStaticKnowledge(lastUserMessage.content)

        if (ragResults.length > 0) {
          context = '\n\n**Relevant Information:**\n\n'
          ragResults.forEach((result, i) => {
            context += `${result.content}\n\n`
          })
        }
      }
    }

    // Build Claude messages
    const claudeMessages = messages.map(msg => ({
      role: msg.role,
      content: msg.content
    }))

    // Add context
    if (context && claudeMessages.length > 0) {
      const lastMsgIndex = claudeMessages.length - 1
      if (claudeMessages[lastMsgIndex].role === 'user') {
        claudeMessages[lastMsgIndex].content =
          claudeMessages[lastMsgIndex].content + context
      }
    }

    // Stream response
    const stream = await anthropic.messages.stream({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 2048,
      system: SYSTEM_PROMPT,
      messages: claudeMessages as any,
    })

    for await (const event of stream) {
      if (
        event.type === 'content_block_delta' &&
        event.delta.type === 'text_delta'
      ) {
        onChunk(event.delta.text)
      }
    }

  } catch (error) {
    console.error('Error streaming chat response:', error)
    throw error
  }
}
