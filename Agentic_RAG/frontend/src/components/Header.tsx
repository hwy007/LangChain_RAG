import React from 'react';

interface HeaderProps {
  onShowQRCode: () => void;
}

export function Header({ onShowQRCode }: HeaderProps) {
  return (
    <header className="h-12 backdrop-blur-2xl bg-gradient-to-r from-[#FFD306] to-[#FFE55C] border-b border-[#FFD306]/40 px-4 flex items-center justify-center shadow-lg shadow-[#FFD306]/30">
      <div className="text-center">
        <span className="text-lg text-gray-800 font-bold">RAG本地知识库问答引擎</span>
      </div>
    </header>
  );
}
