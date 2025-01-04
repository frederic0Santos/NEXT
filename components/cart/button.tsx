import React from 'react';
import { BtnProps } from '../../app/models/interfaces';

export default function Btn({ onOpen, cartItemCount }: BtnProps) {
  return (
    <button
      onClick={onOpen}
      className="fixed bottom-4 right-4 bg-red-400 text-white p-4 rounded-full shadow-lg hover:bg-red-500 transition-colors"
    >
      <div className="relative">
        <div className="flex items-center">
          🛒 ({cartItemCount})
        </div>
      </div>
    </button>
  );
}