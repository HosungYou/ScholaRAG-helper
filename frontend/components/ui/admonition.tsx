import React from "react";
import { AlertCircle, CheckCircle2, Info, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type AdmonitionType = "info" | "warning" | "success" | "error" | "note";

interface AdmonitionProps {
  type?: AdmonitionType;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const icons = {
  info: Info,
  note: Info,
  warning: AlertCircle,
  success: CheckCircle2,
  error: XCircle,
};

const styles = {
  info: "bg-gray-50 text-gray-900 border-gray-300",
  note: "bg-gray-50 text-gray-900 border-gray-300",
  warning: "bg-amber-50 text-amber-900 border-amber-300",
  success: "bg-emerald-50 text-emerald-900 border-emerald-300",
  error: "bg-red-50 text-red-900 border-red-300",
};

export function Admonition({ type = "info", title, children, className }: AdmonitionProps) {
  const Icon = icons[type];
  const style = styles[type];

  return (
    <div
      className={cn(
        "my-4 flex gap-2.5 rounded-lg border p-3 text-sm",
        style,
        className
      )}
    >
      <Icon className="mt-0.5 h-4 w-4 shrink-0 opacity-80" />
      <div className="flex-1">
        {title && <p className="mb-1 font-semibold">{title}</p>}
        <div className="[&>p]:last:mb-0 opacity-90">{children}</div>
      </div>
    </div>
  );
}
