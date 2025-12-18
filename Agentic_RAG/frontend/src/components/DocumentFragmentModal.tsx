import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { Badge } from './ui/badge';
import type { DocumentFragment } from '../App';

interface DocumentFragmentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  fragment: DocumentFragment | null;
}

export function DocumentFragmentModal({ open, onOpenChange, fragment }: DocumentFragmentModalProps) {
  if (!fragment) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl max-h-[85vh] backdrop-blur-2xl bg-gradient-to-br from-[#FFD306]/95 to-[#FFD306]/90 border border-[#FFD306]/40 shadow-2xl shadow-[#FFD306]/30 flex flex-col">
        <DialogHeader className="flex-shrink-0 pb-0">
          <DialogTitle className="text-gray-800 text-lg">
            文档片段{fragment.index}
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-sm">
            查看完整的文档片段内容和相关性评分
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="flex-1 min-h-0 p-4 pt-2 overflow-y-auto">
          <div className="space-y-3">
            <Badge 
              variant="secondary" 
              className="bg-gradient-to-r from-green-50 to-green-100 text-green-700 border-green-300 backdrop-blur-sm shadow-sm text-xs inline-block"
            >
              相关性 {fragment.relevance}
            </Badge>
            
            <p className="text-gray-800 text-sm leading-relaxed whitespace-pre-wrap">
              {fragment.content}
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
