import React from 'react';

interface HeaderProps {
  onShowQRCode: () => void;
}

export function Header({ onShowQRCode }: HeaderProps) {
  return (
    <header className="h-12 backdrop-blur-2xl bg-primary border-b border-primary/30 px-4 flex items-center justify-center shadow-lg shadow-primary/20">
      <div className="text-center">
        <span className="text-lg text-primary-foreground font-bold">RAG本地知识库问答引擎</span>
      </div>
    </header>
  );
}
