import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { Upload, Search, Database, FileText, Trash2 } from 'lucide-react';
import type { VectorDatabase, DocumentFragment } from '../App';

interface KnowledgeBaseManagerProps {
  vectorDatabase: VectorDatabase | null;
  retrievedFragments: DocumentFragment[];
  onStartUpload: () => void;
  onRetrievalTest: (query: string) => void;
  onDocumentFragmentClick: (fragment: DocumentFragment) => void;
  onDeleteDatabase: () => void;
}

export function KnowledgeBaseManager({ 
  vectorDatabase, 
  retrievedFragments,
  onStartUpload, 
  onRetrievalTest,
  onDocumentFragmentClick,
  onDeleteDatabase
}: KnowledgeBaseManagerProps) {
  const [testQuery, setTestQuery] = useState('');

  const handleTestSubmit = () => {
    if (testQuery.trim()) {
      onRetrievalTest(testQuery);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleTestSubmit();
    }
  };

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  if (!vectorDatabase) {
    return (
      <div className="h-full p-3 flex flex-col items-center justify-center">
        <div className="text-center">
          <Upload className="w-12 h-12 mx-auto mb-3 text-gray-400" />
          <h3 className="text-base mb-2 text-[#7a4b00] font-medium">上传文档创建知识库</h3>
          <p className="text-[#6b4a00] mb-4 text-xs leading-relaxed">
            仅支持上传 Markdown (.md) 格式的文档
            <br />
            系统将自动进行文本提取和向量化处理
          </p>
          <Button 
            onClick={onStartUpload}
            className="bg-gradient-to-r from-[#f2c94c] via-[#ffd76f] to-[#fff3c4] hover:from-[#e8b32c]/90 hover:via-[#f7c948]/90 hover:to-[#ffe08a]/90 text-[#3f2a00] border-0 shadow-lg backdrop-blur-sm transition-colors duration-300 cursor-pointer"
            size="default"
          >
            <Upload className="w-3 h-3 mr-1" />
            开始上传文档
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="p-3 border-b border-[#f2c94c]/40">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center space-x-1">
            <Database className="w-3 h-3 text-[#d48f00]" />
            <h3 className="text-sm text-[#7a4b00] font-medium">{vectorDatabase.name}</h3>
          </div>
          <Button
            onClick={onDeleteDatabase}
            variant="outline"
            size="sm"
            className="bg-gradient-to-r from-[#fff5c7] to-[#ffe08a] hover:from-[#fff1b3]/90 hover:to-[#ffd56a]/90 border-[#f2c94c]/50 text-[#5a3b00] hover:text-[#3f2a00] backdrop-blur-sm shadow-sm transition-colors duration-300 cursor-pointer"
          >
            <Trash2 className="w-3 h-3" />
          </Button>
        </div>
        <div className="text-xs text-[#5a3b00] space-y-1">
          <p>分段长度: {vectorDatabase.maxChunkSize} tokens</p>
          <p>重叠长度: {vectorDatabase.maxOverlap} tokens</p>
          <p>Top-K: {vectorDatabase.topK}</p>
          {vectorDatabase.totalChunks && (
            <p>总片段数: {vectorDatabase.totalChunks}</p>
          )}
        </div>
      </div>

      <div className="p-3 border-b border-[#f2c94c]/40">
        <h4 className="text-sm mb-2 text-[#7a4b00] font-medium">召回测试</h4>
        <div className="flex space-x-2">
          <Input
            value={testQuery}
            onChange={(e) => setTestQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="输入查询语句进行召回测试..."
            className="flex-1 bg-gradient-to-r from-[#fff9e6]/80 to-[#fff1c1]/80 border-[#f2c94c]/50 text-[#4a3b00] placeholder-[#b08a33] backdrop-blur-sm focus:from-[#fff5cf]/90 focus:to-[#ffe9aa]/90 focus:border-[#d48f00]/60 transition-colors duration-300 shadow-sm"
          />
          <Button 
            onClick={handleTestSubmit}
            disabled={!testQuery.trim()}
            className="bg-gradient-to-r from-[#f2c94c] via-[#ffd76f] to-[#fff3c4] hover:from-[#e8b32c]/90 hover:via-[#f7c948]/90 hover:to-[#ffe08a]/90 text-[#3f2a00] border-0 shadow-lg backdrop-blur-sm transition-colors duration-300 disabled:opacity-50 cursor-pointer"
            size="sm"
          >
            <Search className="w-3 h-3" />
          </Button>
        </div>
      </div>

      <div className="flex-1 p-3 flex flex-col">
        <h5 className="mb-2 text-sm text-[#7a4b00] font-medium">本次召回文档片段</h5>
        <ScrollArea className="flex-1 overflow-y-auto">
          {retrievedFragments.length === 0 ? (
            <div className="text-center text-[#b08a33] mt-6">
              <FileText className="w-8 h-8 mx-auto mb-2 text-[#d48f00]" />
              <p className="text-sm text-[#7a4b00]">暂无召回结果</p>
              <p className="text-xs mt-1 text-[#b08a33]">请输入查询语句进行测试</p>
            </div>
          ) : (
            <div className="space-y-2">
              {retrievedFragments.map((fragment) => (
                <button
                  key={fragment.id}
                  onClick={() => onDocumentFragmentClick(fragment)}
                  className="w-full text-left p-2 bg-gradient-to-r from-[#fff9e6]/80 to-[#fff1c1]/80 hover:from-[#fff5cf]/90 hover:to-[#ffe49a]/90 rounded-lg border border-[#f2c94c]/40 transition-colors duration-300 backdrop-blur-sm shadow-sm cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[#d48f00] text-sm font-medium">文档片段{fragment.index}</span>
                    <span className="text-green-700 text-xs font-medium">相关性 {fragment.relevance.toFixed(2)}</span>
                  </div>
                  <p className="text-[#4a3b00] text-xs leading-relaxed">
                    {truncateText(fragment.content, 100)}
                  </p>
                </button>
              ))}
            </div>
          )}
        </ScrollArea>
      </div>
    </div>
  );
}
