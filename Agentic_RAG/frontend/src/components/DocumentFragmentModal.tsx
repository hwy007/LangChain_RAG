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
      <DialogContent className="sm:max-w-4xl max-h-[85vh] backdrop-blur-2xl bg-gradient-to-br from-[#fffaf0]/95 to-[#fff3d1]/90 border border-[#f2c94c]/40 shadow-2xl shadow-[#f3d46b]/25 flex flex-col">
        <DialogHeader className="flex-shrink-0 pb-0">
          <DialogTitle className="text-[#7a4b00] text-lg">
            文档片段{fragment.index}
          </DialogTitle>
          <DialogDescription className="text-[#6b4a00] text-sm">
            查看完整的文档片段内容和相关性评分
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="flex-1 min-h-0 p-4 pt-2 overflow-y-auto">
          <div className="space-y-3">
            <Badge 
              variant="secondary" 
              className="bg-gradient-to-r from-[#fff5c7] to-[#ffe08a] text-[#5a3b00] border-[#f2c94c]/50 backdrop-blur-sm shadow-sm text-xs inline-block"
            >
              相关性 {fragment.relevance}
            </Badge>
            
            <p className="text-[#4a3b00] text-sm leading-relaxed whitespace-pre-wrap">
              {fragment.content}
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
