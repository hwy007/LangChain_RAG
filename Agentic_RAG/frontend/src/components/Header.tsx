import React from 'react';

export function Header() {
  return (
    <header className="h-14 backdrop-blur-2xl bg-white/85 border-b border-yellow-200 px-4 flex items-center justify-between shadow-lg shadow-[#f3d46b]/20">
      <div className="text-lg text-[#7a4b00] font-semibold tracking-wide">
        Agentic RAG
      </div>
      
      <div className="text-sm text-[#b36b00] font-medium">
        本地知识库智能问答
      </div>
    </header>
  );
}
