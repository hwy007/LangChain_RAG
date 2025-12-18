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
      <DialogContent className="sm:max-w-sm backdrop-blur-2xl bg-gradient-to-br from-[#fffaf0]/95 to-[#fff3d1]/90 border border-[#f2c94c]/40 shadow-2xl shadow-[#f3d46b]/25">
        <DialogHeader>
          <DialogTitle className="text-center text-[#7a4b00]">扫码查看信息</DialogTitle>
          <DialogDescription className="text-center text-[#6b4a00]">
            扫描二维码获取更多产品资讯
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col items-center space-y-4 p-4">
          {/* 使用用户提供的二维码图片 */}
          <div className="w-44 h-44 bg-white rounded-lg shadow-lg flex items-center justify-center border border-[#f2c94c]/40 p-2">
            <img 
              src={qrCodeImage} 
              alt="二维码" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <p className="text-center text-[#4a3b00] text-sm">
            扫码获取最新功能更新与指南
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
