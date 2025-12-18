import React from 'react';

export function Header() {
  return (
    <header className="h-16 backdrop-blur-2xl bg-white/90 border-b border-[#f2c94c]/60 px-6 flex items-center justify-center shadow-lg shadow-[#f3d46b]/25">
      <div className="text-2xl text-[#7a4b00] font-semibold tracking-wide text-center">
        Agentic RAG · 本地知识库智能问答
      </div>
    </header>
  );
}
