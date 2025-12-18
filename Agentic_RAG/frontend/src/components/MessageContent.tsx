import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MessageContentProps {
  content: string;
  isUser: boolean;
}

export function MessageContent({ content, isUser }: MessageContentProps) {
  if (isUser) {
    // 用户消息不需要 Markdown 渲染，直接显示
    return <p className="whitespace-pre-wrap text-sm">{content}</p>;
  }

  // AI 消息使用 Markdown 渲染
  return (
    <div className="prose prose-sm max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // 自定义样式以适配我们的配色方案
          p: ({ children }) => (
            <p className="text-sm text-[#4a3b00] mb-2 last:mb-0 leading-relaxed">{children}</p>
          ),
          h1: ({ children }) => (
            <h1 className="text-lg font-bold text-[#7a4b00] mt-3 mb-2 first:mt-0">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-base font-bold text-[#7a4b00] mt-3 mb-2 first:mt-0">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-sm font-bold text-[#d48f00] mt-2 mb-1 first:mt-0">{children}</h3>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-1 my-2 text-sm text-[#4a3b00]">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-1 my-2 text-sm text-[#4a3b00]">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-sm text-[#4a3b00] leading-relaxed">{children}</li>
          ),
          code: ({ children, className }) => {
            const isInline = !className;
            if (isInline) {
              return (
                <code className="px-1.5 py-0.5 bg-[#fff1c1] text-[#7a4b00] rounded text-xs font-mono">
                  {children}
                </code>
              );
            }
            return (
              <code className="block p-2 bg-[#fff6d6] text-[#4a3b00] rounded-lg text-xs font-mono overflow-x-auto my-2">
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="bg-[#fff6d6] p-3 rounded-lg overflow-x-auto my-2">
              {children}
            </pre>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-[#f2c94c] pl-3 py-1 my-2 text-[#4a3b00] italic bg-[#fff7df]/60 rounded-r">
              {children}
            </blockquote>
          ),
          a: ({ children, href }) => (
            <a 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#d48f00] hover:text-[#7a4b00] underline transition-colors"
            >
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-[#7a4b00]">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-[#6b4a00]">{children}</em>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-2">
              <table className="min-w-full border border-[#f2c94c]/40 text-sm">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-[#fff5cf]">{children}</thead>
          ),
          th: ({ children }) => (
            <th className="border border-[#f2c94c]/40 px-2 py-1 text-left font-bold text-[#7a4b00]">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-[#f2c94c]/30 px-2 py-1 text-[#4a3b00]">
              {children}
            </td>
          ),
          hr: () => (
            <hr className="my-3 border-t border-[#f2c94c]/40" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
