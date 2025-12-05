'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { BookOpen, Send, Loader2, Github } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

// Demo mode responses for when API is unavailable
const DEMO_RESPONSES: Record<string, string> = {
  workflow: `**ScholaRAG uses a 7-stage workflow:**

1. **Stage 1: Research Domain Setup** (15 min) - Define your research question and scope
2. **Stage 2: Query Strategy** (10 min) - Design Boolean search queries
3. **Stage 3: PRISMA Configuration** (20 min) - Set AI-PRISMA screening criteria
4. **Stage 4: RAG Design** (15 min) - Configure vector database
5. **Stage 5: Execution Plan** (10 min) - Review automation pipeline
6. **Stage 6: Research Conversation** (2-3 hrs) - Query your RAG system
7. **Stage 7: Documentation Writing** (1-2 hrs) - Generate PRISMA diagrams

Visit [Quick Start](/guide/quickstart) to get started!`,

  prisma: `**AI-PRISMA** is ScholaRAG's multi-dimensional screening system:

- Uses **PICO framework** (Population, Intervention, Comparison, Outcomes)
- **Confidence thresholds**: Auto-include ≥90%, Auto-exclude ≤10%, Human-review 11-89%
- **Evidence grounding**: AI must quote abstract text to justify decisions
- Achieves **10-20% pass rates** matching manual systematic review standards

Learn more in [Core Concepts](/guide/03-core-concepts).`,

  query: `**Database Strategy in ScholaRAG:**

**Open Access (Free):**
- Semantic Scholar (200M+ papers)
- OpenAlex (250M+ works)
- arXiv (2.4M+ preprints)

**Institutional (Optional):**
- Scopus, Web of Science

**Query syntax:** Boolean operators (AND, OR, NOT) with field-specific search.

Example: \`(chatbot OR "conversational agent") AND "language learning"\``,

  start: `**Quick Start:**

1. Install VS Code + Claude Code extension
2. Copy the setup prompt from [Quick Start](/guide/quickstart)
3. Answer 3 questions: project name, research question, domain
4. Wait 3 minutes for automatic setup

That's it! Claude Code handles everything automatically.`,

  default: `I can help you with:

- **7-stage workflow** - How ScholaRAG works
- **PRISMA screening** - AI-powered paper filtering
- **Query design** - Boolean search strategies
- **Troubleshooting** - Common issues and fixes

Try asking: "What is the 7-stage workflow?" or "How does PRISMA work?"

For full documentation, visit [the guide](/guide).`
}

function getDemoResponse(query: string): string {
  const q = query.toLowerCase()
  if (q.includes('workflow') || q.includes('stage') || q.includes('7') || q.includes('process')) {
    return DEMO_RESPONSES.workflow
  }
  if (q.includes('prisma') || q.includes('screen') || q.includes('filter')) {
    return DEMO_RESPONSES.prisma
  }
  if (q.includes('query') || q.includes('search') || q.includes('database')) {
    return DEMO_RESPONSES.query
  }
  if (q.includes('start') || q.includes('setup') || q.includes('install') || q.includes('begin')) {
    return DEMO_RESPONSES.start
  }
  return DEMO_RESPONSES.default
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hi! I\'m the ScholaRAG Helper chatbot. I can help you with:\n\n- Understanding the 7-stage workflow\n- Query design and search strategies\n- PRISMA configuration\n- RAG system setup\n- Troubleshooting common issues\n\nWhat would you like to know?',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({
            role: m.role,
            content: m.content
          }))
        })
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to get response')
      }

      const data = await response.json()

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])

    } catch (error: any) {
      console.error('Chat error:', error)
      // Fallback to demo mode
      const demoResponse = getDemoResponse(userMessage.content)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `⚡ **Demo Mode** (API unavailable)\n\n${demoResponse}\n\n---\n*For full AI-powered responses, the server needs an Anthropic API key.*`,
        timestamp: new Date()
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-primary-600" />
            <h1 className="text-2xl font-bold">ScholaRAG Helper</h1>
          </Link>
          <nav className="flex gap-6">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <Link href="/guide" className="hover:text-primary-600">Guide</Link>
            <Link href="/chat" className="text-primary-600 font-semibold">Chatbot</Link>
            <Link href="/resources" className="hover:text-primary-600">Resources</Link>
            <a href="https://github.com/HosungYou/ScholaRAG-helper" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">AI-Powered Chatbot</h2>
            <p className="text-gray-600 text-lg">
              Get instant answers about ScholaRAG with RAG-powered assistance
            </p>
          </div>

          {/* Chat Container */}
          <div className="card h-[600px] flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <div className="text-sm whitespace-pre-wrap">{message.content}</div>
                    <div className={`text-xs mt-2 ${
                      message.role === 'user' ? 'text-primary-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin text-gray-500" />
                    <span className="text-sm text-gray-500">Thinking...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 p-6">
              <div className="flex gap-3">
                <textarea
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about ScholaRAG workflow, PRISMA, queries, troubleshooting..."
                  className="flex-1 resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  rows={3}
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className="bg-primary-600 text-white px-6 rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5" />
                  <span className="font-medium">Send</span>
                </button>
              </div>
              <div className="flex items-center justify-between mt-3">
                <p className="text-xs text-gray-500">
                  Powered by Claude Sonnet 4.5 | Press Enter to send, Shift+Enter for new line
                </p>
                <Link href="/guide" className="text-xs text-primary-600 hover:underline">
                  View Documentation
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="card p-4">
              <h3 className="font-bold text-sm mb-2">Example Questions</h3>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• How do I design a focused query?</li>
                <li>• What is PRISMA screening?</li>
                <li>• Show me Stage 1 workflow</li>
              </ul>
            </div>
            <div className="card p-4">
              <h3 className="font-bold text-sm mb-2">Troubleshooting</h3>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• PRISMA returned 0 papers</li>
                <li>• PDF download failed</li>
                <li>• API key error</li>
              </ul>
            </div>
            <div className="card p-4">
              <h3 className="font-bold text-sm mb-2">Code Examples</h3>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Show YAML template</li>
                <li>• Query syntax example</li>
                <li>• Research profile config</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
