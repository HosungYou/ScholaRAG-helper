import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'
import Image from 'next/image'
import Mermaid from '@/components/Mermaid'

export default function IntroductionPage() {
  return (
    <GuideLayout>
      <h1 id="introduction">Introduction to ScholaRAG</h1>

      <p className="text-xl text-muted mt-6 mb-8">
        Learn how ScholaRAG transforms the traditional literature review process from weeks of manual work into hours of AI-powered efficiency.
      </p>

      <h2 id="what-is-scholarag">What is ScholaRAG?</h2>

      <p>
        ScholaRAG is an <strong>open-source, conversational AI-guided system</strong> that helps researchers build custom <a href="https://www.anthropic.com/news/contextual-retrieval" target="_blank" rel="noopener noreferrer">RAG (Retrieval-Augmented Generation)</a> systems for academic literature review. Built on top of <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VS Code</a> and <a href="https://claude.ai/claude-code" target="_blank" rel="noopener noreferrer">Claude Code</a>, it guides you through every step of creating a systematic review pipeline.
      </p>

      <div className="callout callout-info">
        <p className="font-semibold mb-2">💡 Key Insight</p>
        <p className="mb-0">
          Unlike generic chatbots, ScholaRAG creates a <em>dedicated knowledge base</em> from your specific research domain, ensuring every answer is grounded in the papers you've screened and approved.
        </p>
      </div>

      <div className="my-8">
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

      <div className="callout callout-warning">
        <p className="font-semibold mb-2">⚠️ Common Pain Point</p>
        <p className="mb-0">
          "I've read this paper three times, but I still can't remember which one had the meta-analysis on sample size calculations." — Every PhD student, ever.
        </p>
      </div>

      <h3 id="with-scholarag">With ScholaRAG (2-3 weeks)</h3>

      <ol>
        <li><strong>30-minute Setup</strong>: Build your RAG system with step-by-step Claude Code guidance</li>
        <li><strong>2-hour Screening</strong>: <a href="https://www.prisma-statement.org/" target="_blank" rel="noopener noreferrer">PRISMA</a> pipeline screens thousands of papers automatically</li>
        <li><strong>Instant Queries</strong>: Ask questions and get answers with specific paper citations</li>
        <li><strong>Never Forget</strong>: Your RAG system remembers every relevant detail across all papers</li>
      </ol>

      <div className="callout callout-success">
        <p className="font-semibold mb-2">✅ Real Results</p>
        <p className="mb-0">
          PhD students using ScholaRAG complete literature reviews in <strong>2-3 weeks instead of 6-8 weeks</strong>, spending more time on analysis and writing.
        </p>
      </div>

      <h2 id="what-youll-build">What You'll Build</h2>

      <p>
        In approximately <strong>30 minutes</strong> of active setup (plus 3-4 hours of automated processing), you'll create:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        <div className="border border-border rounded-lg p-6 hover:border-border-strong transition-colors">
          <div className="text-2xl mb-2">🔍</div>
          <h4 className="font-semibold mb-2">PRISMA Pipeline</h4>
          <p className="text-sm text-muted mb-0">Screen 500+ papers down to 50-150 highly relevant ones using systematic criteria</p>
        </div>
        <div className="border border-border rounded-lg p-6 hover:border-border-strong transition-colors">
          <div className="text-2xl mb-2">🗄️</div>
          <h4 className="font-semibold mb-2">Vector Database</h4>
          <p className="text-sm text-muted mb-0">Semantic search across your papers using <a href="https://www.trychroma.com/" target="_blank" rel="noopener noreferrer">ChromaDB</a> or <a href="https://github.com/facebookresearch/faiss" target="_blank" rel="noopener noreferrer">FAISS</a></p>
        </div>
        <div className="border border-border rounded-lg p-6 hover:border-border-strong transition-colors">
          <div className="text-2xl mb-2">🤖</div>
          <h4 className="font-semibold mb-2">Research RAG</h4>
          <p className="text-sm text-muted mb-0">Query system powered by <a href="https://www.anthropic.com/claude" target="_blank" rel="noopener noreferrer">Claude Sonnet 4.5</a> with paper-specific citations</p>
        </div>
      </div>

      <h2 id="database-strategy">Database Strategy</h2>

      <p>
        ScholaRAG supports <strong>comprehensive multi-database coverage</strong> with both free open-access sources (Semantic Scholar, OpenAlex, arXiv) and institutional databases (Scopus, Web of Science) for broader reach.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="border border-gray-300 rounded-lg p-4 bg-white">
          <h4 className="font-semibold mb-2">🌐 Open Access (Free)</h4>
          <p className="text-sm text-muted-foreground mb-0">
            Semantic Scholar, OpenAlex, arXiv — 450M+ papers, ~50% PDF access
          </p>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 bg-white">
          <h4 className="font-semibold mb-2">🏛️ Institutional (Optional)</h4>
          <p className="text-sm text-muted-foreground mb-0">
            Scopus, Web of Science — metadata only, 3-5x more papers found
          </p>
        </div>
      </div>

      <p className="text-sm">
        <Link href="/guide/03-core-concepts#databases" className="underline">자세한 데이터베이스 전략 보기 →</Link>
      </p>

      <h2 id="core-concepts">Core Concepts</h2>

      <h3 id="prisma">1. AI-Powered PRISMA Screening</h3>

      <p>
        <a href="https://www.prisma-statement.org/" target="_blank" rel="noopener noreferrer">PRISMA</a> (Preferred Reporting Items for Systematic Reviews and Meta-Analyses) is the gold standard for systematic reviews. ScholaRAG implements PRISMA 2020 with AI-enhanced multi-dimensional evaluation:
      </p>

      <ul>
        <li><strong>Identification</strong>: Comprehensive database search with complete retrieval (no limits)</li>
        <li><strong>Screening</strong>: AI-powered multi-dimensional evaluation using large language models</li>
        <li><strong>Eligibility</strong>: Confidence-based routing (auto-include/exclude/human-review)</li>
        <li><strong>Inclusion</strong>: Validated final set with optional human agreement metrics (Cohen's Kappa)</li>
      </ul>

      <div className="callout callout-success">
        <p className="font-semibold mb-2">✅ Multi-Dimensional AI Evaluation</p>
        <div className="text-sm space-y-2 mb-0">
          <p>ScholaRAG uses <strong>AI-PRISMA Rubric</strong> with transparent criteria:</p>
          <ul className="ml-4 space-y-1">
            <li><strong>Sub-criteria scoring</strong> - Population, Intervention, Comparison, Outcomes (PICO framework)</li>
            <li><strong>Evidence grounding</strong> - AI must quote abstract text to justify decisions</li>
            <li><strong>Confidence thresholds</strong> - Auto-include ≥90%, auto-exclude ≤10%, human-review 11-89%</li>
            <li><strong>Hallucination detection</strong> - Cross-check quoted evidence against abstracts</li>
            <li><strong>Human validation</strong> - Optional quality check with inter-rater reliability (κ)</li>
          </ul>
          <p className="mt-2">This approach achieves <strong>10-20% pass rates</strong> matching manual systematic review standards (vs. 93% with simple keyword matching).</p>
        </div>
      </div>

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
        <li><strong>Retrieval</strong>: Semantic search finds the most relevant papers and sections</li>
        <li><strong>Generation</strong>: LLM synthesizes answers grounded in retrieved content</li>
      </ol>

      <p>
        This architecture prevents hallucinations by ensuring every statement is backed by actual research. Learn more about RAG in our <Link href="/guide/04-implementation">Implementation Guide</Link>.
      </p>

      <h3 id="workflow">3. 7-Stage Workflow</h3>

      <p>
        ScholaRAG breaks down the complex process into <strong>7 conversational stages</strong> with Claude Code — from research question definition to publication-ready documentation.
      </p>

      <div className="border border-gray-300 rounded-lg p-4 bg-white my-6">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-mono">Stage 1-4</span>
          <span className="text-muted-foreground">→</span>
          <span>Setup & Configuration (~60 min)</span>
        </div>
        <div className="flex items-center gap-2 text-sm mt-2">
          <span className="font-mono">Stage 5-7</span>
          <span className="text-muted-foreground">→</span>
          <span>Execution & Analysis (~3-5 hrs automated)</span>
        </div>
      </div>

      <p className="text-sm">
        <Link href="/guide/03-core-concepts#workflow" className="underline">7단계 워크플로우 상세 보기 →</Link>
      </p>

      <h2 id="who-should-use">Who Should Use ScholaRAG?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div>
          <h4 className="font-semibold mb-2">🎓 PhD Students</h4>
          <p className="text-sm text-muted mb-0">
            Dissertation literature reviews, qualifying exams, and proposal development
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">🔬 Researchers</h4>
          <p className="text-sm text-muted mb-0">
            Meta-analysis preparation, grant writing, and systematic reviews
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">👨‍🏫 Professors</h4>
          <p className="text-sm text-muted mb-0">
            Course material updates, research synthesis, and mentoring students
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">📚 Librarians</h4>
          <p className="text-sm text-muted mb-0">
            Systematic review consulting and research data management
          </p>
        </div>
      </div>

      <h2 id="prerequisites">Prerequisites</h2>

      <p>Before starting, ensure you have:</p>

      <ul>
        <li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VS Code</a> with <a href="https://claude.ai/claude-code" target="_blank" rel="noopener noreferrer">Claude Code extension</a> installed</li>
        <li><a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">Python 3.9+</a> on your system</li>
        <li><a href="https://console.anthropic.com/" target="_blank" rel="noopener noreferrer">Anthropic API key</a> (free tier available)</li>
        <li>30 minutes for initial setup + 3-4 hours for automated processing</li>
        <li>Basic familiarity with your research domain</li>
      </ul>

      <div className="callout">
        <p className="font-semibold mb-2">📝 Note on API Costs & Efficiency</p>
        <p className="mb-2">
          ScholaRAG supports the latest AI coding models optimized for research automation:
        </p>
        <ul className="text-sm space-y-1 ml-4 mb-2">
          <li><strong>Claude Sonnet 4.5</strong> (Oct 2025): Currently the most effective coding model for research automation, achieving state-of-the-art performance on SWE-bench</li>
          <li><strong>Claude Haiku 4.5</strong> (Oct 2025): Frontier performance at 1/3 cost, 4-5x faster than Sonnet 3.5 - excellent for high-volume screening tasks</li>
          <li><strong>Claude Opus 4</strong>: Most capable model for complex analysis and synthesis, ideal for final report generation</li>
        </ul>
        <p className="mb-0">
          A typical literature review (500 papers screened, 150 included) costs <strong>under $20 with Haiku 4.5</strong> or <strong>$25-40 with Sonnet 4.5</strong>. Compare this to weeks of manual labor!
        </p>
      </div>

      <h2 id="next-steps">Next Steps</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <Link
          href="/guide/quickstart"
          className="border-2 border-gray-900 hover:bg-gray-50 rounded-lg p-6 transition-colors"
        >
          <h3 className="font-bold mb-2">5분 빠른 시작 →</h3>
          <p className="text-sm text-muted-foreground mb-0">
            프롬프트 하나로 즉시 시작하기
          </p>
        </Link>
        <Link
          href="/guide/04-tutorial"
          className="border border-gray-300 hover:border-gray-900 rounded-lg p-6 transition-colors"
        >
          <h3 className="font-bold mb-2">튜토리얼</h3>
          <p className="text-sm text-muted-foreground mb-0">
            실제 예제로 전체 워크플로우 배우기
          </p>
        </Link>
      </div>

      <p className="text-sm text-muted mt-8">
        <strong>Further Reading</strong>: <a href="https://www.prisma-statement.org/" target="_blank" rel="noopener noreferrer">PRISMA Guidelines</a> · <a href="https://www.anthropic.com/news/contextual-retrieval" target="_blank" rel="noopener noreferrer">Contextual Retrieval (Anthropic)</a> · <Link href="/resources">Templates & Examples</Link>
      </p>
    </GuideLayout>
  )
}
