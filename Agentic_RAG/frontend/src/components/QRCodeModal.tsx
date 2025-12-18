import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import qrCodeImage from 'figma:asset/a8c4f12a7dae02d4f1f3becb5d5bbc3cdf54ab61.png';

interface QRCodeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function QRCodeModal({ open, onOpenChange }: QRCodeModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm backdrop-blur-2xl bg-gradient-to-br from-[#ccd9ed]/95 to-[#d1d3e6]/90 border border-[#60acc2]/40 shadow-2xl shadow-[#d0ccce]/30">
        <DialogHeader>
          <DialogTitle className="text-center text-[#405a03]">扫码领取课件</DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            扫描二维码免费领取项目完整源码
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col items-center space-y-4 p-4">
          {/* 使用用户提供的二维码图片 */}
          <div className="w-44 h-44 bg-white rounded-lg shadow-lg flex items-center justify-center border border-[#60acc2]/30 p-2">
            <img 
              src={qrCodeImage} 
              alt="课件领取二维码" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <p className="text-center text-gray-800 text-sm">
            扫码免费领取项目完整源码
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}