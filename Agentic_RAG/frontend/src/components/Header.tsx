import React from 'react';

export function Header() {
  return (
    <header className="h-16 px-6 flex items-center justify-center backdrop-blur-2xl bg-gradient-to-r from-[#fffdf3]/90 via-[#fff6d1]/90 to-[#ffe89a]/85 border-b border-[#f6d465]/50 shadow-lg shadow-[#f3d46b]/25">
      <div className="text-center">
        <div className="text-2xl text-[#7a4b00] font-semibold tracking-wide">
          Agentic RAG
        </div>
        <div className="text-sm text-[#b36b00] font-medium">
          本地知识库智能问答
        </div>
      </div>
    </header>
  );
}
