import React from 'react';
import { Bot } from 'lucide-react';

export function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="flex max-w-[80%] flex-row">
        <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center backdrop-blur-sm shadow-sm bg-gradient-to-r from-[#facc15] to-[#f5d565] text-[#7a4a00] mr-2 border border-[#f5d565]/70">
          <Bot className="w-3 h-3" />
        </div>
        
        <div className="rounded-xl p-3 backdrop-blur-sm shadow-lg bg-white border border-[#f5d565]/70">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-[#facc15] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-[#facc15] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-[#facc15] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
            <span className="text-xs text-[#7a4a00]">AI 正在思考...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
