import React from 'react';
import { Bot } from 'lucide-react';

export function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="flex max-w-[80%] flex-row">
        <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center backdrop-blur-sm shadow-sm bg-gradient-to-r from-[#fff3c4] to-[#ffe08a] text-[#4a3100] mr-2">
          <Bot className="w-3 h-3" />
        </div>
        
        <div className="rounded-xl p-3 backdrop-blur-sm shadow-lg bg-gradient-to-r from-[#fffaf0]/80 to-[#fff2c6]/80 border border-[#f2c94c]/40">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-[#f2c94c] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-[#f2c94c] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-[#f2c94c] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
            <span className="text-xs text-[#6b4a00]">AI 正在思考...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
