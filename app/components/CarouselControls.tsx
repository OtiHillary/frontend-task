import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselControlsProps {
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
}

const CarouselControls: React.FC<CarouselControlsProps> = ({ onPrev, onNext, canPrev, canNext }) => {
  return (
    <div className="flex space-x-4 me-18">
      <button
        onClick={onPrev}
        disabled={!canPrev}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
          canPrev
            ? 'bg-yellow-300 text-purple-900 hover:bg-yellow-500 hover:scale-110 shadow-lg'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        <ChevronLeft className="w-7 h-7 font-bold" />
      </button>
      <button
        onClick={onNext}
        disabled={!canNext}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
          canNext
            ? 'bg-yellow-300 text-purple-900 hover:bg-yellow-500 hover:scale-110 shadow-lg'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        <ChevronRight className="w-7 h-7 font-bold" />
      </button>
    </div>
  );
};

export default CarouselControls;
