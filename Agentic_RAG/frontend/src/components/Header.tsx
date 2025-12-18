import React from 'react';
import { Button } from './ui/button';
import { Gift } from 'lucide-react';

interface HeaderProps {
  onShowQRCode: () => void;
}

export function Header({ onShowQRCode }: HeaderProps) {
  return (
    <header className="h-12 backdrop-blur-2xl bg-white/70 border-b border-[#60acc2]/30 px-4 flex items-center justify-between shadow-lg shadow-[#d0ccce]/20">
      <div className="text-sm text-[#405a03] font-medium">
        《大模型Agent开发实战课》体验课
      </div>
      
      <div className="text-center">
        <span className="text-lg text-yellow-600 font-medium">RAG本地知识库问答引擎</span>
        <span className="text-sm text-[#405a03] ml-1 font-medium">By九天Hector</span>
      </div>
      
      <Button 
        onClick={onShowQRCode}
        className="bg-gradient-to-r from-[#60acc2] via-[#ccd9ed] to-[#fce6f4] hover:from-[#60acc2]/90 hover:via-[#ccd9ed]/90 hover:to-[#fce6f4]/90 text-gray-800 border-0 shadow-lg backdrop-blur-sm transition-colors duration-300 cursor-pointer"
        size="sm"
      >
        <Gift className="w-3 h-3 mr-1" />
        领取课件
      </Button>
    </header>
  );
}