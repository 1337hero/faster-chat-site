import React from 'react';
import { Play } from 'lucide-react';

export const DemoVideo = () => {
  return (
    <section id="demo" className="relative py-24 bg-cat-mantle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Experience the Speed</h2>
          <p className="text-cat-subtext">Zero SSR overhead. Streaming responses. Instant local saves.</p>
        </div>

        {/* Browser Frame Mockup */}
        <div className="relative max-w-5xl mx-auto rounded-xl shadow-2xl bg-cat-base border border-cat-surface overflow-hidden group">
          {/* Browser Header */}
          <div className="bg-cat-crust px-4 py-3 flex items-center gap-2 border-b border-cat-surface">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-cat-red"></div>
              <div className="w-3 h-3 rounded-full bg-cat-yellow"></div>
              <div className="w-3 h-3 rounded-full bg-cat-green"></div>
            </div>
            <div className="ml-4 flex-1 bg-cat-base rounded-md px-3 py-1 text-xs text-cat-overlay font-mono text-center">
              localhost:3000
            </div>
          </div>

          {/* Video Placeholder Content */}
          <div className="relative aspect-video bg-gradient-to-br from-cat-base to-cat-mantle flex items-center justify-center overflow-hidden">
            
            {/* Abstract Chat UI Background representation */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="flex h-full">
                    <div className="w-64 border-r border-cat-surface bg-cat-crust/50 p-4 space-y-4">
                        <div className="h-8 w-3/4 bg-cat-surface rounded"></div>
                        <div className="h-4 w-1/2 bg-cat-surface rounded opacity-50"></div>
                        <div className="h-4 w-2/3 bg-cat-surface rounded opacity-50"></div>
                    </div>
                    <div className="flex-1 p-8 space-y-6">
                        <div className="flex justify-end">
                             <div className="bg-cat-blue/20 p-4 rounded-2xl rounded-tr-sm max-w-md h-24 w-full"></div>
                        </div>
                        <div className="flex justify-start">
                             <div className="bg-cat-surface/50 p-4 rounded-2xl rounded-tl-sm max-w-lg h-32 w-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors cursor-pointer">
               <div className="relative group/btn">
                   <div className="absolute -inset-4 bg-cat-mauve/50 rounded-full blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                   <button className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center pl-1 shadow-lg hover:scale-105 transition-transform duration-200">
                        <Play className="w-8 h-8 text-cat-base fill-current" />
                   </button>
               </div>
            </div>
            
            {/* Overlay Text */}
            <div className="absolute bottom-8 left-0 right-0 text-center">
                <span className="inline-block px-4 py-2 rounded-lg bg-black/50 backdrop-blur-sm text-sm font-medium text-white border border-white/10">
                    Watch Demo Video (Placeholder)
                </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
