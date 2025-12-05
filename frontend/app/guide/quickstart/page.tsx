import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'
import { CodeBlock } from '@/components/CodeBlock'

export default function QuickstartPage() {
  return (
    <GuideLayout>
      <h1>5분 빠른 시작</h1>

      <p className="text-xl text-muted-foreground mb-8">
        Claude Code에 프롬프트 하나만 붙여넣으면 ScholaRAG가 자동으로 설정됩니다.
      </p>

      <div className="border-2 border-gray-900 rounded-lg p-6 bg-gray-50 mb-8">
        <h2 className="text-lg font-bold mb-4">Step 1: 이 프롬프트를 Claude Code에 붙여넣기</h2>

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

My research topic: [여기에 연구 주제 입력]`}
        />
      </div>

      <div className="border-l-4 border-gray-900 bg-white rounded-lg p-4 mb-8">
        <h2 className="text-lg font-bold mb-3">Step 2: 3가지 질문에 답하기</h2>
        <ul className="space-y-2 text-sm">
          <li><strong>프로젝트 이름:</strong> 예) AI-Healthcare-Adoption</li>
          <li><strong>연구 질문:</strong> 예) How does AI improve healthcare outcomes?</li>
          <li><strong>연구 분야:</strong> 예) healthcare, education, technology</li>
        </ul>
      </div>

      <div className="border-l-4 border-green-600 bg-green-50 rounded-lg p-4 mb-8">
        <h2 className="text-lg font-bold mb-3">Step 3: 3분 대기</h2>
        <p className="text-sm mb-0">
          Claude Code가 자동으로 저장소 클론, 환경 설정, 프로젝트 초기화를 완료합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <Link
          href="/guide/04-tutorial"
          className="border-2 border-gray-900 hover:bg-gray-50 rounded-lg p-6 transition-colors"
        >
          <h3 className="font-bold mb-2">다음: 튜토리얼</h3>
          <p className="text-sm text-muted-foreground mb-0">
            실제 예제로 전체 워크플로우 배우기
          </p>
        </Link>
        <Link
          href="/guide/01-introduction"
          className="border border-gray-300 hover:border-gray-900 rounded-lg p-6 transition-colors"
        >
          <h3 className="font-bold mb-2">ScholaRAG란?</h3>
          <p className="text-sm text-muted-foreground mb-0">
            개념과 아키텍처 이해하기
          </p>
        </Link>
      </div>

      <details className="border border-gray-300 rounded-lg p-4 mt-8">
        <summary className="font-semibold cursor-pointer">수동 설치 (고급)</summary>
        <div className="mt-4">
          <CodeBlock
            language="bash"
            code={`# 저장소 클론
git clone https://github.com/HosungYou/ScholaRAG.git
cd ScholaRAG

# 가상환경 생성 및 활성화
python3 -m venv venv
source venv/bin/activate  # Windows: venv\\Scripts\\activate

# 의존성 설치
pip install click pyyaml

# 프로젝트 초기화
python scholarag_cli.py init`}
          />
        </div>
      </details>
    </GuideLayout>
  )
}
