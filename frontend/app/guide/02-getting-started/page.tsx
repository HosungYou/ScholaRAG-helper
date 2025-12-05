import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'
import { CodeBlock } from '@/components/CodeBlock'

export default function GettingStartedPage() {
  return (
    <GuideLayout>
      <h1 id="getting-started">Getting Started</h1>

      <p className="text-xl text-muted mt-6 mb-8">
        Set up ScholaRAG in 3 minutes with a single copy-paste prompt. No manual commands required—Claude Code handles everything automatically.
      </p>

      <div className="callout callout-success mb-8">
        <p className="font-semibold mb-2">✨ Conversation-First Setup</p>
        <p className="mb-0">
          ScholaRAG is designed for <strong>conversation-driven automation</strong>. You paste prompts, Claude Code executes commands, and you answer questions about your research. That's it.
        </p>
      </div>

      <h2 id="prerequisites">Prerequisites</h2>

      <p>You need two things installed before starting:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="border border-gray-300 rounded-lg p-4 bg-white">
          <h4 className="font-semibold mb-3">1. VS Code</h4>
          <p className="text-sm mb-2">Download and install <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="underline">Visual Studio Code</a></p>
          <p className="text-xs text-muted-foreground mb-0">Free, works on macOS/Windows/Linux</p>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 bg-white">
          <h4 className="font-semibold mb-3">2. Claude Code Extension</h4>
          <p className="text-sm mb-2">Install <a href="https://marketplace.visualstudio.com/items?itemName=Anthropic.claude-code" target="_blank" rel="noopener noreferrer" className="underline">Claude Code</a> in VS Code</p>
          <p className="text-xs text-muted-foreground mb-0">Requires <a href="https://claude.ai/settings" target="_blank" rel="noopener noreferrer" className="underline">Claude Pro</a> subscription ($20/month)</p>
        </div>
      </div>

      <details className="border border-gray-300 rounded-lg p-4 my-6 bg-gray-50">
        <summary className="font-semibold cursor-pointer">How to Install Claude Code Extension</summary>
        <ol className="mt-4 space-y-2 text-sm">
          <li><strong>1. Open VS Code</strong></li>
          <li><strong>2. Open Extensions</strong>: Press <code>Cmd/Ctrl + Shift + X</code></li>
          <li><strong>3. Search</strong>: Type "Claude Code" by Anthropic</li>
          <li><strong>4. Install</strong>: Click the Install button</li>
          <li><strong>5. Sign In</strong>: Click Claude icon → Sign in with Claude Pro account</li>
        </ol>
        <p className="text-xs text-muted-foreground mt-3">
          Extension link: <a href="https://marketplace.visualstudio.com/items?itemName=Anthropic.claude-code" target="_blank" rel="noopener noreferrer" className="underline">marketplace.visualstudio.com/claude-code</a>
        </p>
      </details>

      <h2 id="one-click-setup">One-Click Automated Setup</h2>

      <p>
        Once Claude Code is installed, copy this prompt and paste it into the Claude Code chat panel. That's all you need to do.
      </p>

      <div className="border-2 border-gray-900 rounded-lg p-6 bg-gray-50 my-6">
        <p className="font-semibold mb-4">📋 Copy this entire prompt → Paste to Claude Code</p>

        <CodeBlock
          language="text"
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

      <div className="border-l-4 border-gray-900 bg-white rounded-lg p-4 my-6">
        <p className="font-semibold mb-2">✨ What Claude Code Will Do Automatically:</p>
        <ul className="text-sm space-y-1 mb-0">
          <li>✅ Clone the ScholaRAG repository from GitHub</li>
          <li>✅ Create and activate Python virtual environment</li>
          <li>✅ Install all required dependencies</li>
          <li>✅ Run CLI initialization to create your project folder</li>
          <li>✅ Guide you through research domain setup (Stage 1)</li>
        </ul>
      </div>

      <p className="text-sm text-muted-foreground">
        <strong>Estimated time:</strong> 2-3 minutes for setup. Claude will prompt you for project name and research question during initialization.
      </p>

      <h2 id="how-it-works">How ScholaRAG Works</h2>

      <p>
        Understanding the repository structure helps you see how the conversation-driven workflow operates:
      </p>

      <CodeBlock
        language="bash"
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
│   ├── 01_fetch_papers.py
│   ├── 02_deduplicate.py
│   ├── 03_screen_papers.py
│   ├── 04_download_pdfs.py
│   ├── 05_build_rag.py
│   ├── 06_query_rag.py
│   └── 07_generate_prisma.py
│
├── templates/              ← config.yaml templates
├── scholarag_cli.py        ← CLI tool for project initialization
└── requirements.txt        ← Python dependencies`}
      />

      <p>
        Each stage has a dedicated prompt in the <code>prompts/</code> folder. You copy-paste each prompt to Claude Code, and Claude automatically runs the corresponding script when ready.
      </p>

      <p className="text-sm">
        <Link href="/guide/03-core-concepts#workflow" className="underline">7단계 워크플로우 상세 보기 →</Link>
      </p>

      <h2 id="what-gets-created">What Gets Created</h2>

      <p>
        After running <code>python scholarag_cli.py init</code>, you'll have a project folder:
      </p>

      <CodeBlock
        language="bash"
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

      <p>
        Once setup is complete, proceed to <Link href="/guide/03-core-concepts" className="underline">Chapter 3: Core Concepts</Link> to understand PRISMA, RAG architecture, and how the stages connect.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <Link href="/guide/03-core-concepts" className="border border-gray-300 hover:border-gray-900 rounded-lg p-4 transition-colors bg-white">
          <h4 className="font-semibold mb-2">📖 Core Concepts</h4>
          <p className="text-sm text-muted-foreground mb-0">
            Learn about PRISMA, RAG architecture, and vector databases
          </p>
        </Link>
        <Link href="/guide/prompt-library" className="border border-gray-300 hover:border-gray-900 rounded-lg p-4 transition-colors bg-white">
          <h4 className="font-semibold mb-2">💡 Prompt Library</h4>
          <p className="text-sm text-muted-foreground mb-0">
            Browse 7 specialized prompts for research conversations
          </p>
        </Link>
      </div>

      <h2 id="advanced">Advanced: Manual CLI Mode</h2>

      <details className="border border-gray-300 rounded-lg p-4 my-6">
        <summary className="font-semibold cursor-pointer">For users who prefer direct command-line control</summary>
        <div className="mt-4">
          <p className="text-sm mb-3">If you want to run commands yourself without Claude Code automation:</p>

          <CodeBlock
            language="bash"
            code={`# Clone the repository
git clone https://github.com/HosungYou/ScholaRAG.git
cd ScholaRAG

# Create virtual environment
python3 -m venv venv

# Activate virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
venv\\Scripts\\activate

# Install CLI dependencies
pip install --upgrade pip
pip install click pyyaml

# Initialize your first project
python scholarag_cli.py init`}
          />

          <p className="text-sm text-muted-foreground mt-4">
            <strong>Note:</strong> Manual mode requires you to run Stage scripts yourself. Conversation mode is recommended for seamless automation.
          </p>
        </div>
      </details>

      <h2 id="troubleshooting">Troubleshooting</h2>

      <details className="border border-gray-300 rounded-lg p-4 my-4">
        <summary className="font-semibold cursor-pointer">Claude Code not responding</summary>
        <div className="mt-3 text-sm">
          <p><strong>Solution:</strong></p>
          <ol className="ml-4 space-y-1">
            <li>Press <code>Cmd/Ctrl + Shift + P</code> → "Reload Window"</li>
            <li>Re-authenticate: Claude icon → Sign out → Sign in</li>
            <li>Update extension to latest version</li>
          </ol>
        </div>
      </details>

      <details className="border border-gray-300 rounded-lg p-4 my-4">
        <summary className="font-semibold cursor-pointer">Python not found</summary>
        <div className="mt-3 text-sm">
          <p><strong>Error:</strong> <code>command not found: python3</code></p>
          <p><strong>Solution:</strong> Install Python from <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer" className="underline">python.org/downloads</a></p>
          <p className="text-xs text-muted-foreground mt-2">Claude Code will usually prompt you to install Python if it's missing</p>
        </div>
      </details>
    </GuideLayout>
  )
}