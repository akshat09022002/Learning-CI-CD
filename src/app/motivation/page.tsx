'use client';

import { useEffect, useState } from 'react';

export default function MotivationPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500">
      <div className={`transform transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl text-center max-w-md mx-4">
          <h1 className="text-4xl font-bold text-white mb-6 animate-pulse">
            Akshat, Keep Grinding! 💪
          </h1>
          <p className="text-xl text-white/90 mb-4">
            Every step forward is progress, no matter how small.
          </p>
          <p className="text-lg text-white/80">
            Stay focused, stay determined, and keep pushing forward.
          </p>
          <div className="mt-8">
            <div className="w-16 h-16 mx-auto border-4 border-white/30 rounded-full animate-spin border-t-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 