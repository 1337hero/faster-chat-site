import { Check, Copy } from 'lucide-react';
import React, { useState } from 'react';

export const InstallSection = () => {
  const [copied, setCopied] = useState(false);
  const command = "git clone https://github.com/1337hero/faster-chat.git";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="get-started" className="py-20 bg-cat-base">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Get Started in Seconds</h2>
        
        <div className="bg-cat-crust rounded-xl border border-cat-surface overflow-hidden p-6 text-left relative group">
          <div className="absolute top-4 right-4">
             <button 
                onClick={handleCopy}
                className="p-2 rounded-md bg-cat-surface hover:bg-cat-overlay text-cat-subtext hover:text-white transition-all"
                title="Copy command"
             >
                {copied ? <Check className="w-4 h-4 text-cat-green" /> : <Copy className="w-4 h-4" />}
             </button>
          </div>
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-cat-red"></div>
            <div className="w-3 h-3 rounded-full bg-cat-yellow"></div>
            <div className="w-3 h-3 rounded-full bg-cat-green"></div>
          </div>
          <pre className="font-mono text-sm md:text-base text-cat-text overflow-x-auto pb-2">
            <span className="text-cat-pink">git</span> clone https://github.com/1337hero/faster-chat.git<br/>
            <span className="text-cat-pink">cd</span> faster-chat<br/>
            <span className="text-cat-pink">bun</span> install<br/>
            <span className="text-cat-pink">bun</span> run dev
          </pre>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-cat-mantle border border-cat-surface">
                <div className="font-bold text-white mb-1">Docker</div>
                <p className="text-xs text-cat-subtext">One-command deployment</p>
            </div>
            <div className="p-4 rounded-lg bg-cat-mantle border border-cat-surface">
                <div className="font-bold text-white mb-1">Bun</div>
                <p className="text-xs text-cat-subtext">Recommended runtime</p>
            </div>
            <div className="p-4 rounded-lg bg-cat-mantle border border-cat-surface">
                <div className="font-bold text-white mb-1">Node.js</div>
                <p className="text-xs text-cat-subtext">v20+ Supported</p>
            </div>
        </div>
      </div>
    </section>
  );
};
