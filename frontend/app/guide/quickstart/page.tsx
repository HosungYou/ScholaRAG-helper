'use client'

import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'
import { CodeBlock } from '@/components/ui/code-block'
import { Admonition } from '@/components/ui/admonition'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'

export default function QuickstartPage() {
  return (
    <GuideLayout>
      <Breadcrumbs
        items={[
          { label: 'Documentation', href: '/guide' },
          { label: 'Quick Start' }
        ]}
      />

      <h1>5-Minute Quick Start</h1>

      <p className="text-lg text-muted mb-6">
        Just paste one prompt into Claude Code and ScholaRAG will be set up automatically.
      </p>

      <div className="space-y-5">
        {/* Step 1 */}
        <div className="border border-gray-200 rounded-lg p-4 bg-white">
          <h2 className="text-base font-bold mb-3 flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-900 text-white text-xs font-bold">1</span>
            Paste this prompt into Claude Code
          </h2>

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

My research topic: [Enter your research topic here]`}
          />
        </div>

        {/* Step 2 */}
        <div className="border border-gray-200 rounded-lg p-4 bg-white">
          <h2 className="text-base font-bold mb-3 flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-900 text-white text-xs font-bold">2</span>
            Answer 3 questions
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="font-semibold text-gray-700 min-w-[110px]">Project Name:</span>
              <span className="text-muted">e.g., AI-Healthcare-Adoption</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-gray-700 min-w-[110px]">Research Question:</span>
              <span className="text-muted">e.g., How does AI improve healthcare outcomes?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-gray-700 min-w-[110px]">Research Domain:</span>
              <span className="text-muted">e.g., healthcare, education, technology</span>
            </li>
          </ul>
        </div>

        {/* Step 3 */}
        <Admonition type="success" title="Step 3: Wait 3 minutes">
          <p className="mb-0">
            Claude Code will automatically clone the repository, set up the environment, and initialize your project.
          </p>
        </Admonition>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-8">
        <Link
          href="/guide/04-tutorial"
          className="group border-2 border-gray-900 hover:bg-gray-50 rounded-lg p-4 transition-colors"
        >
          <h3 className="font-bold text-sm mb-1 group-hover:underline">Next: Complete Tutorial</h3>
          <p className="text-xs text-muted mb-0">
            Learn the full workflow with a real example
          </p>
        </Link>
        <Link
          href="/guide/01-introduction"
          className="group border border-gray-300 hover:border-gray-900 rounded-lg p-4 transition-colors"
        >
          <h3 className="font-bold text-sm mb-1 group-hover:underline">What is ScholaRAG?</h3>
          <p className="text-xs text-muted mb-0">
            Understand the concepts and architecture
          </p>
        </Link>
      </div>

      {/* Manual Installation */}
      <details className="border border-gray-200 rounded-lg bg-white">
        <summary className="font-semibold text-sm cursor-pointer p-3 hover:bg-gray-50">
          Manual Installation (Advanced)
        </summary>
        <div className="px-3 pb-3">
          <CodeBlock
            language="bash"
            filename="terminal"
            className="my-0"
            code={`# Clone the repository
git clone https://github.com/HosungYou/ScholaRAG.git
cd ScholaRAG

# Create and activate virtual environment
python3 -m venv venv
source venv/bin/activate  # Windows: venv\\Scripts\\activate

# Install dependencies
pip install click pyyaml

# Initialize project
python scholarag_cli.py init`}
          />
        </div>
      </details>
    </GuideLayout>
  )
}
