import React from 'react';
import { Bot } from 'lucide-react';

export function TypingIndicator() {
  return (
    <div className="flex justify-start">
        <div className="flex max-w-[80%] flex-row">
        <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center backdrop-blur-sm shadow-sm bg-primary/20 text-gray-800 mr-2">
          <Bot className="w-3 h-3" />
        </div>

        <div className="rounded-xl p-3 backdrop-blur-sm shadow-lg bg-gradient-to-r from-[#FFD306]/70 to-[#FFD306]/70 border border-[#FFD306]/30">
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 rounded-full bg-white/70 border border-[#FFD306]/40 flex items-center justify-center shadow-inner">
              <div className="w-3 h-3 border-2 border-[#FFD306] border-t-transparent rounded-full animate-spin"></div>
            </div>
            <span className="text-sm text-gray-800 font-medium">AI正在思考</span>
          </div>
          <div className="mt-2 flex items-center space-x-2 text-xs text-gray-700">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-[#FFD306] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-[#FFD306] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-[#FFD306] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
            <span>正在生成回复，请稍候</span>
          </div>
        </div>
      </div>
    </div>
  );
}
