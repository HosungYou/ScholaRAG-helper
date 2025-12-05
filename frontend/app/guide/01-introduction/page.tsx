import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'
import Image from 'next/image'
import Mermaid from '@/components/Mermaid'
import { Admonition } from '@/components/ui/admonition'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'

export default function IntroductionPage() {
  return (
    <GuideLayout>
      <Breadcrumbs
        items={[
          { label: 'Documentation', href: '/guide' },
          { label: 'Introduction' }
        ]}
      />

      <h1 id="introduction">Introduction to ScholaRAG</h1>

      <p className="text-lg text-muted mt-4 mb-6">
        Learn how ScholaRAG transforms the traditional literature review process from weeks of manual work into hours of AI-powered efficiency.
      </p>

      <h2 id="what-is-scholarag">What is ScholaRAG?</h2>

      <p>
        ScholaRAG is an <strong>open-source, conversational AI-guided system</strong> that helps researchers build custom <a href="https://www.anthropic.com/news/contextual-retrieval" target="_blank" rel="noopener noreferrer">RAG (Retrieval-Augmented Generation)</a> systems for academic literature review. Built on top of <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VS Code</a> and <a href="https://claude.ai/claude-code" target="_blank" rel="noopener noreferrer">Claude Code</a>, it guides you through every step of creating a systematic review pipeline.
      </p>

      <Admonition type="info" title="Key Insight">
        <p className="mb-0">
          Unlike generic chatbots, ScholaRAG creates a <em>dedicated knowledge base</em> from your specific research domain, ensuring every answer is grounded in the papers you've screened and approved.
        </p>
      </Admonition>

      <div className="my-6">
        <Image
          src="/ScholaRAG.png"
          alt="ScholaRAG: The AI Knowledge Flow - Diagram showing the workflow from Academic Papers through PRISMA Filtering to RAG System and AI Assistant"
          width={1200}
          height={900}
          className="rounded-lg border border-border"
          priority
        />
      </div>

      <h2 id="the-problem">The Problem It Solves</h2>

      <h3 id="traditional-workflow">Traditional Literature Review (6-8 weeks)</h3>

      <p>
        If you've ever conducted a systematic review, you know the pain:
      </p>

      <ol>
        <li><strong>Database Search</strong>: Spend days crafting queries for <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer">PubMed</a>, <a href="https://eric.ed.gov/" target="_blank" rel="noopener noreferrer">ERIC</a>, <a href="https://www.webofscience.com/" target="_blank" rel="noopener noreferrer">Web of Science</a></li>
        <li><strong>Export & Screen</strong>: Download 500+ papers, export to Excel, read abstracts one by one</li>
        <li><strong>Full-Text Review</strong>: Manually review 200+ PDFs for inclusion criteria</li>
        <li><strong>Data Extraction</strong>: Copy-paste findings, methods, and statistics into spreadsheets</li>
        <li><strong>Citation Hell</strong>: Constantly re-read papers to verify citations and quotes</li>
      </ol>

      <p>
        The result? <strong>67-75% of your time</strong> spent on mechanical tasks instead of analysis.
      </p>

      <Admonition type="warning" title="Common Pain Point">
        <p className="mb-0">
          "I've read this paper three times, but I still can't remember which one had the meta-analysis on sample size calculations." — Every PhD student, ever.
        </p>
      </Admonition>

      <h3 id="with-scholarag">With ScholaRAG (2-3 weeks)</h3>

      <ol>
        <li><strong>30-minute Setup</strong>: Build your RAG system with step-by-step Claude Code guidance</li>
        <li><strong>2-hour Screening</strong>: <a href="https://www.prisma-statement.org/" target="_blank" rel="noopener noreferrer">PRISMA</a> pipeline screens thousands of papers automatically</li>
        <li><strong>Instant Queries</strong>: Ask questions and get answers with specific paper citations</li>
        <li><strong>Never Forget</strong>: Your RAG system remembers every relevant detail across all papers</li>
      </ol>

      <Admonition type="success" title="Real Results">
        <p className="mb-0">
          PhD students using ScholaRAG complete literature reviews in <strong>2-3 weeks instead of 6-8 weeks</strong>, spending more time on analysis and writing.
        </p>
      </Admonition>

      <h2 id="what-youll-build">What You'll Build</h2>

      <p>
        In approximately <strong>30 minutes</strong> of active setup (plus 3-4 hours of automated processing), you'll create:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-6">
        <div className="border border-gray-200 rounded-lg p-4 bg-white hover:border-gray-400 transition-colors">
          <div className="text-xl mb-2">🔍</div>
          <h4 className="font-semibold text-sm mb-1">PRISMA Pipeline</h4>
          <p className="text-xs text-muted mb-0">Screen 500+ papers down to 50-150 highly relevant ones</p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4 bg-white hover:border-gray-400 transition-colors">
          <div className="text-xl mb-2">🗄️</div>
          <h4 className="font-semibold text-sm mb-1">Vector Database</h4>
          <p className="text-xs text-muted mb-0">Semantic search using ChromaDB or FAISS</p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4 bg-white hover:border-gray-400 transition-colors">
          <div className="text-xl mb-2">🤖</div>
          <h4 className="font-semibold text-sm mb-1">Research RAG</h4>
          <p className="text-xs text-muted mb-0">Query system powered by Claude with citations</p>
        </div>
      </div>

      <h2 id="database-strategy">Database Strategy</h2>

      <p>
        ScholaRAG supports <strong>comprehensive multi-database coverage</strong> with both free open-access sources and institutional databases.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
        <div className="border border-gray-200 rounded-lg p-3 bg-white">
          <h4 className="font-semibold text-sm mb-1">🌐 Open Access (Free)</h4>
          <p className="text-xs text-muted mb-0">
            Semantic Scholar, OpenAlex, arXiv — 450M+ papers, ~50% PDF access
          </p>
        </div>
        <div className="border border-gray-200 rounded-lg p-3 bg-white">
          <h4 className="font-semibold text-sm mb-1">🏛️ Institutional (Optional)</h4>
          <p className="text-xs text-muted mb-0">
            Scopus, Web of Science — metadata only, 3-5x more papers found
          </p>
        </div>
      </div>

      <p className="text-sm">
        <Link href="/guide/03-core-concepts#databases" className="underline">View detailed database strategy →</Link>
      </p>

      <h2 id="core-concepts">Core Concepts</h2>

      <h3 id="prisma">1. AI-Powered PRISMA Screening</h3>

      <p>
        <a href="https://www.prisma-statement.org/" target="_blank" rel="noopener noreferrer">PRISMA</a> (Preferred Reporting Items for Systematic Reviews and Meta-Analyses) is the gold standard. ScholaRAG implements PRISMA 2020 with AI-enhanced multi-dimensional evaluation:
      </p>

      <ul>
        <li><strong>Identification</strong>: Comprehensive database search with complete retrieval</li>
        <li><strong>Screening</strong>: AI-powered multi-dimensional evaluation using LLMs</li>
        <li><strong>Eligibility</strong>: Confidence-based routing (auto-include/exclude/human-review)</li>
        <li><strong>Inclusion</strong>: Validated final set with optional human agreement metrics</li>
      </ul>

      <Admonition type="success" title="Multi-Dimensional AI Evaluation">
        <div className="text-sm space-y-1 mb-0">
          <p className="mb-2">ScholaRAG uses <strong>AI-PRISMA Rubric</strong> with transparent criteria:</p>
          <ul className="ml-4 space-y-0.5 text-xs">
            <li><strong>Sub-criteria scoring</strong> - PICO framework evaluation</li>
            <li><strong>Evidence grounding</strong> - AI must quote abstract text</li>
            <li><strong>Confidence thresholds</strong> - Auto-include ≥90%, auto-exclude ≤10%</li>
            <li><strong>Hallucination detection</strong> - Cross-check against abstracts</li>
          </ul>
          <p className="mt-2 text-xs">Achieves <strong>10-20% pass rates</strong> matching manual review standards.</p>
        </div>
      </Admonition>

      <Mermaid
        scale={1.3}
        chart={`
graph TD
    A[Records Identified<br/>n = 1,247] --> B[Records Screened<br/>n = 1,247]
    B --> C[Excluded<br/>n = 983<br/>Not Relevant]
    B --> D[Full-text Assessed<br/>n = 264]
    D --> E[Excluded<br/>n = 127<br/>Wrong Methodology]
    D --> F[Studies Included<br/>n = 137]
    F --> G[RAG Knowledge Base]

    style A fill:#e0e7ff
    style F fill:#dcfce7
    style G fill:#fef3c7
      `} />

      <h3 id="rag">2. RAG (Retrieval-Augmented Generation)</h3>

      <p>
        RAG combines two powerful capabilities:
      </p>

      <ol>
        <li><strong>Retrieval</strong>: Semantic search finds the most relevant papers</li>
        <li><strong>Generation</strong>: LLM synthesizes answers grounded in retrieved content</li>
      </ol>

      <h3 id="workflow">3. 7-Stage Workflow</h3>

      <p>
        ScholaRAG breaks down the process into <strong>7 conversational stages</strong> with Claude Code.
      </p>

      <div className="border border-gray-200 rounded-lg p-3 bg-white my-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-mono text-xs">Stage 1-4</span>
          <span className="text-muted">→</span>
          <span className="text-sm">Setup & Configuration (~60 min)</span>
        </div>
        <div className="flex items-center gap-2 text-sm mt-2">
          <span className="font-mono text-xs">Stage 5-7</span>
          <span className="text-muted">→</span>
          <span className="text-sm">Execution & Analysis (~3-5 hrs automated)</span>
        </div>
      </div>

      <p className="text-sm">
        <Link href="/guide/03-core-concepts#workflow" className="underline">View detailed 7-stage workflow →</Link>
      </p>

      <h2 id="who-should-use">Who Should Use ScholaRAG?</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
        <div className="text-center p-3">
          <div className="text-2xl mb-1">🎓</div>
          <h4 className="font-semibold text-xs">PhD Students</h4>
        </div>
        <div className="text-center p-3">
          <div className="text-2xl mb-1">🔬</div>
          <h4 className="font-semibold text-xs">Researchers</h4>
        </div>
        <div className="text-center p-3">
          <div className="text-2xl mb-1">👨‍🏫</div>
          <h4 className="font-semibold text-xs">Professors</h4>
        </div>
        <div className="text-center p-3">
          <div className="text-2xl mb-1">📚</div>
          <h4 className="font-semibold text-xs">Librarians</h4>
        </div>
      </div>

      <h2 id="prerequisites">Prerequisites</h2>

      <ul>
        <li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VS Code</a> with <a href="https://claude.ai/claude-code" target="_blank" rel="noopener noreferrer">Claude Code extension</a></li>
        <li><a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">Python 3.9+</a></li>
        <li><a href="https://console.anthropic.com/" target="_blank" rel="noopener noreferrer">Anthropic API key</a> (free tier available)</li>
        <li>30 minutes setup + 3-4 hours automated processing</li>
      </ul>

      <Admonition type="note" title="API Costs">
        <p className="mb-0 text-xs">
          A typical review (500 papers screened, 150 included) costs <strong>under $20 with Haiku 4.5</strong> or <strong>$25-40 with Sonnet 4.5</strong>.
        </p>
      </Admonition>

      <h2 id="next-steps">Next Steps</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link
          href="/guide/quickstart"
          className="border-2 border-gray-900 hover:bg-gray-50 rounded-lg p-4 transition-colors"
        >
          <h3 className="font-bold text-sm mb-1">5-Min Quick Start →</h3>
          <p className="text-xs text-muted mb-0">
            Get started instantly with one prompt
          </p>
        </Link>
        <Link
          href="/guide/04-tutorial"
          className="border border-gray-300 hover:border-gray-900 rounded-lg p-4 transition-colors"
        >
          <h3 className="font-bold text-sm mb-1">Complete Tutorial</h3>
          <p className="text-xs text-muted mb-0">
            Learn the full workflow with real examples
          </p>
        </Link>
      </div>

      <p className="text-xs text-muted mt-6">
        <strong>Further Reading</strong>: <a href="https://www.prisma-statement.org/" target="_blank" rel="noopener noreferrer">PRISMA Guidelines</a> · <a href="https://www.anthropic.com/news/contextual-retrieval" target="_blank" rel="noopener noreferrer">Contextual Retrieval</a>
      </p>
    </GuideLayout>
  )
}
