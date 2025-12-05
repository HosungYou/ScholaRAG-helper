"use client";

import * as React from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  filename?: string;
  language?: string;
  code: string;
}

export function CodeBlock({
  filename,
  language = "bash",
  code,
  className,
  ...props
}: CodeBlockProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  const copyToClipboard = React.useCallback(() => {
    navigator.clipboard.writeText(code);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  }, [code]);

  return (
    <div className={cn("relative my-6 overflow-hidden rounded-lg border border-gray-200 bg-gray-900", className)} {...props}>
      {/* Header with Filename */}
      <div className="flex items-center justify-between border-b border-gray-700 bg-gray-800 px-4 py-2 text-xs text-gray-400">
        <div className="flex items-center gap-2">
          {language === "bash" || language === "sh" ? (
            <Terminal className="h-3.5 w-3.5" />
          ) : null}
          <span className="font-medium font-mono">
            {filename || language}
          </span>
        </div>
        <button
          onClick={copyToClipboard}
          className="relative inline-flex h-6 w-6 items-center justify-center rounded hover:bg-gray-700 hover:text-gray-50 transition-colors"
          aria-label="Copy code"
        >
          {hasCopied ? (
            <Check className="h-3.5 w-3.5 text-emerald-400" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="overflow-x-auto p-4">
        <pre className="font-mono text-sm leading-relaxed text-gray-100">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
