import React, { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { Send, User, Bot, Trash2 } from 'lucide-react';
import { MessageContent } from './MessageContent';
import { TypingIndicator } from './TypingIndicator';
import type { Message, DocumentFragment } from '../App';

interface ChatInterfaceProps {
  messages: Message[];
  onSendMessage: (content: string) => void;
  onDocumentFragmentClick: (fragment: DocumentFragment) => void;
  onClearChat: () => void;
  isLoading?: boolean;
}

export function ChatInterface({ messages, onSendMessage, onDocumentFragmentClick, onClearChat, isLoading = false }: ChatInterfaceProps) {
  const [inputValue, setInputValue] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      // 找到viewport元素并滚动到底部
      const viewport = scrollAreaRef.current.querySelector('[data-slot="scroll-area-viewport"]') as HTMLDivElement;
      if (viewport) {
        viewport.scrollTop = viewport.scrollHeight;
      }
    }
  }, [messages, isLoading]);

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-3 border-b border-[#f5d565]/60 flex items-center justify-between bg-white/70 rounded-t-2xl">
        <h2 className="text-base text-[#7a4a00] font-semibold">知识库问答</h2>
        <Button
          onClick={onClearChat}
          variant="outline"
          size="sm"
          className="bg-[#facc15] hover:bg-[#eab308] border-[#f5d565] text-[#7a4a00] shadow-sm transition-colors duration-300 cursor-pointer"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>

      <ScrollArea className="flex-1 p-3 overflow-y-auto" ref={scrollAreaRef}>
        <div className="space-y-3">
          {messages.length === 0 ? (
            <div className="text-center text-gray-500 mt-12">
              <Bot className="w-12 h-12 mx-auto mb-3 text-gray-400" />
              <p className="text-base text-gray-600">欢迎使用RAG知识库问答系统</p>
              <p className="text-xs mt-1 text-gray-500">请先在右侧上传文档，然后开始对话</p>
            </div>
          ) : (
            <>
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex max-w-[80%] ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center backdrop-blur-sm shadow-sm ${
                      message.isUser ? 'bg-gradient-to-r from-[#facc15] to-[#f5d565] text-[#7a4a00] ml-2' : 'bg-gradient-to-r from-white to-[#fff7d6] text-[#7a4a00] mr-2 border border-[#f5d565]/70'
                    }`}>
                      {message.isUser ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                    </div>
                    
                    <div className={`rounded-xl p-2 backdrop-blur-sm shadow-lg ${
                      message.isUser 
                        ? 'bg-gradient-to-r from-[#fff4c2] to-[#fde68a] text-[#7a4a00] border border-[#f3c73c]/70' 
                        : 'bg-white text-gray-800 border border-[#f5d565]/70'
                    }`}>
                      <MessageContent content={message.content} isUser={message.isUser} />
                      
                      {message.documentFragments && message.documentFragments.length > 0 && (
                        <div className="mt-2 pt-2 border-t border-[#f5d565]/60">
                          <p className="text-xs text-[#7a4a00] mb-1">参考文档片段：</p>
                          <div className="space-y-2">
                            {message.documentFragments.map((fragment) => (
                              <button
                                key={fragment.id}
                                onClick={() => onDocumentFragmentClick(fragment)}
                                className="block w-full text-left p-2 bg-white hover:bg-[#fff4c2] rounded-lg border border-[#f5d565]/70 transition-colors duration-300 backdrop-blur-sm shadow-sm cursor-pointer"
                              >
                                <span className="text-[#7a4a00] text-xs">
                                  {truncateText(fragment.content, 20)}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* 加载动画指示器 */}
              {isLoading && <TypingIndicator />}
            </>
          )}
        </div>
      </ScrollArea>

      <div className="p-3 border-t border-[#f5d565]/60 bg-white/80 rounded-b-2xl">
        <div className="flex space-x-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="请输入您的问题..."
            disabled={isLoading}
            className="flex-1 bg-white border border-[#f5d565] text-gray-800 placeholder-gray-500 backdrop-blur-sm focus:border-[#d69c00] focus:ring-2 focus:ring-[#fde68a] transition-colors duration-300 shadow-sm disabled:opacity-50"
          />
          <Button 
            onClick={handleSend}
            disabled={!inputValue.trim() || isLoading}
            className="bg-[#facc15] hover:bg-[#eab308] text-[#7a4a00] border border-[#f5d565] shadow-md backdrop-blur-sm transition-colors duration-300 disabled:opacity-50 cursor-pointer"
            size="sm"
          >
            <Send className="w-3 h-3" />
          </Button>
        </div>
      </div>
    </div>
  );
}
