import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'
import { CodeBlock } from '@/components/ui/code-block'
import { Admonition } from '@/components/ui/admonition'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'

export default function GettingStartedPage() {
  return (
    <GuideLayout>
      <Breadcrumbs
        items={[
          { label: 'Documentation', href: '/guide' },
          { label: 'Getting Started' }
        ]}
      />

      <h1 id="getting-started">Getting Started</h1>

      <p className="text-lg text-muted mt-4 mb-6">
        Set up ScholaRAG in 3 minutes with a single copy-paste prompt. No manual commands required—Claude Code handles everything automatically.
      </p>

      <Admonition type="success" title="Conversation-First Setup">
        <p className="mb-0">
          ScholaRAG is designed for <strong>conversation-driven automation</strong>. You paste prompts, Claude Code executes commands, and you answer questions about your research.
        </p>
      </Admonition>

      <h2 id="prerequisites">Prerequisites</h2>

      <p>You need two things installed before starting:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
        <div className="border border-gray-200 rounded-lg p-3 bg-white">
          <h4 className="font-semibold text-sm mb-2">1. VS Code</h4>
          <p className="text-xs mb-1">Download <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="underline">Visual Studio Code</a></p>
          <p className="text-xs text-muted mb-0">Free, macOS/Windows/Linux</p>
        </div>
        <div className="border border-gray-200 rounded-lg p-3 bg-white">
          <h4 className="font-semibold text-sm mb-2">2. Claude Code Extension</h4>
          <p className="text-xs mb-1">Install <a href="https://marketplace.visualstudio.com/items?itemName=Anthropic.claude-code" target="_blank" rel="noopener noreferrer" className="underline">Claude Code</a></p>
          <p className="text-xs text-muted mb-0">Requires <a href="https://claude.ai/settings" target="_blank" rel="noopener noreferrer" className="underline">Claude Pro</a> ($20/mo)</p>
        </div>
      </div>

      <details className="border border-gray-200 rounded-lg my-4 bg-white">
        <summary className="font-semibold text-sm cursor-pointer p-3 hover:bg-gray-50">How to Install Claude Code Extension</summary>
        <ol className="px-3 pb-3 space-y-1 text-xs">
          <li><strong>1.</strong> Open VS Code</li>
          <li><strong>2.</strong> Press <code>Cmd/Ctrl + Shift + X</code> (Extensions)</li>
          <li><strong>3.</strong> Search "Claude Code" by Anthropic</li>
          <li><strong>4.</strong> Click Install</li>
          <li><strong>5.</strong> Click Claude icon → Sign in</li>
        </ol>
      </details>

      <h2 id="one-click-setup">One-Click Automated Setup</h2>

      <p className="text-sm">
        Copy this prompt and paste it into Claude Code. That's all you need to do.
      </p>

      <div className="border border-gray-200 rounded-lg p-4 bg-white my-4">
        <p className="font-semibold text-sm mb-3">📋 Copy → Paste to Claude Code</p>

        <CodeBlock
          language="text"
          filename="setup-prompt.txt"
          className="my-0"
          code={`Please set up ScholaRAG for me:

1. Clone https://github.com/HosungYou/ScholaRAG.git
2. Navigate into ScholaRAG directory
3. Create Python virtual environment (venv)
4. Activate the virtual environment
5. Install CLI dependencies: pip install click pyyaml
6. Initialize my first project: python scholarag_cli.py init
7. Guide me through Stage 1 of the systematic review workflow

My research topic: [Describe your research question here]`}
        />
      </div>

      <Admonition type="info" title="What Claude Code Does Automatically">
        <ul className="text-xs space-y-0.5 mb-0">
          <li>✅ Clone the ScholaRAG repository from GitHub</li>
          <li>✅ Create and activate Python virtual environment</li>
          <li>✅ Install all required dependencies</li>
          <li>✅ Run CLI initialization to create your project folder</li>
          <li>✅ Guide you through research domain setup (Stage 1)</li>
        </ul>
      </Admonition>

      <p className="text-xs text-muted">
        <strong>Estimated time:</strong> 2-3 minutes for setup.
      </p>

      <h2 id="how-it-works">How ScholaRAG Works</h2>

      <p className="text-sm">
        Understanding the repository structure helps you see how the conversation-driven workflow operates:
      </p>

      <CodeBlock
        language="bash"
        filename="repository-structure"
        code={`ScholaRAG/
├── prompts/                ← 7 stage-specific prompts (you copy-paste these)
│   ├── 01_research_domain_setup.md
│   ├── 02_query_strategy.md
│   ├── 03_prisma_configuration.md
│   ├── 04_rag_design.md
│   ├── 05_execution_plan.md
│   ├── 06_research_conversation.md
│   └── 07_documentation_writing.md
│
├── scripts/                ← Python scripts (Claude Code runs these)
│   ├── 01_fetch_papers.py ... 07_generate_prisma.py
│
├── templates/              ← config.yaml templates
├── scholarag_cli.py        ← CLI tool for project initialization
└── requirements.txt        ← Python dependencies`}
      />

      <p className="text-sm">
        <Link href="/guide/03-core-concepts#workflow" className="underline">View detailed 7-stage workflow →</Link>
      </p>

      <h2 id="what-gets-created">What Gets Created</h2>

      <p className="text-sm">
        After running <code className="text-xs">python scholarag_cli.py init</code>, you'll have:
      </p>

      <CodeBlock
        language="bash"
        filename="project-folder"
        code={`projects/2025-10-24_AI-Healthcare-Adoption/
├── config.yaml             ← Project settings
├── data/
│   ├── open_access/        ← Database search results
│   ├── combined/           ← Deduplicated papers
│   ├── prisma/             ← AI-PRISMA evaluation
│   └── pdfs/               ← Downloaded PDFs
├── rag/
│   └── chroma_db/          ← Vector database
└── outputs/                ← PRISMA diagrams, reports`}
      />

      <h2 id="next-steps">Next Steps</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/guide/03-core-concepts" className="border border-gray-200 hover:border-gray-900 rounded-lg p-4 transition-colors bg-white">
          <h4 className="font-semibold text-sm mb-1">📖 Core Concepts</h4>
          <p className="text-xs text-muted mb-0">
            Learn about PRISMA, RAG, and vector databases
          </p>
        </Link>
        <Link href="/guide/prompt-library" className="border border-gray-200 hover:border-gray-900 rounded-lg p-4 transition-colors bg-white">
          <h4 className="font-semibold text-sm mb-1">💡 Prompt Library</h4>
          <p className="text-xs text-muted mb-0">
            Browse 7 specialized research prompts
          </p>
        </Link>
      </div>

      <h2 id="advanced">Advanced: Manual CLI Mode</h2>

      <details className="border border-gray-200 rounded-lg bg-white">
        <summary className="font-semibold text-sm cursor-pointer p-3 hover:bg-gray-50">For users who prefer direct command-line control</summary>
        <div className="px-3 pb-3">
          <CodeBlock
            language="bash"
            filename="manual-setup"
            className="my-0"
            code={`# Clone the repository
git clone https://github.com/HosungYou/ScholaRAG.git
cd ScholaRAG

# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # Windows: venv\\Scripts\\activate

# Install dependencies
pip install click pyyaml

# Initialize project
python scholarag_cli.py init`}
          />
        </div>
      </details>

      <h2 id="troubleshooting">Troubleshooting</h2>

      <details className="border border-gray-200 rounded-lg my-2 bg-white">
        <summary className="font-semibold text-sm cursor-pointer p-3 hover:bg-gray-50">Claude Code not responding</summary>
        <div className="px-3 pb-3 text-xs">
          <ol className="space-y-1">
            <li>1. Press <code>Cmd/Ctrl + Shift + P</code> → "Reload Window"</li>
            <li>2. Re-authenticate: Claude icon → Sign out → Sign in</li>
            <li>3. Update extension to latest version</li>
          </ol>
        </div>
      </details>

      <details className="border border-gray-200 rounded-lg my-2 bg-white">
        <summary className="font-semibold text-sm cursor-pointer p-3 hover:bg-gray-50">Python not found</summary>
        <div className="px-3 pb-3 text-xs">
          <p><strong>Error:</strong> <code>command not found: python3</code></p>
          <p className="mb-0"><strong>Solution:</strong> Install from <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer" className="underline">python.org/downloads</a></p>
        </div>
      </details>
    </GuideLayout>
  )
}
