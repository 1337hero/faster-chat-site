import { ChevronRight, Database, Shield, Zap } from 'lucide-react';
import React from 'react';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cat-mauve/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cat-blue/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-cat-pink/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cat-surface/50 border border-cat-mauve/30 text-cat-mauve mb-8 backdrop-blur-sm animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cat-mauve opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cat-mauve"></span>
            </span>
            <span className="text-xs font-medium uppercase tracking-wider">v0.2.0 Now Available</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cat-mauve to-cat-blue">Privacy-First</span> <br className="hidden md:block" />
          AI Chat Interface
        </h1>

        {/* Subheadline */}
        <p className="mt-4 max-w-2xl text-xl text-cat-subtext mb-10">
          Blazingly fast, offline-ready, and completely open source.
          Run with Ollama locally or connect to OpenAI, Anthropic, Groq, Mistral, and more without giving up your data.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="#get-started"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-cat-base bg-white rounded-lg hover:bg-cat-blue transition-all duration-200 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a
            href="https://github.com/1337hero/faster-chat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-cat-surface/50 border border-cat-overlay rounded-lg hover:bg-cat-surface hover:border-cat-mauve/50 transition-all duration-200 backdrop-blur-sm"
          >
            View on GitHub
          </a>
        </div>

        {/* Feature Pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-cat-subtext">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cat-mantle border border-cat-surface/50">
                <Shield className="w-4 h-4 text-cat-green" />
                <span>100% Local Storage</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cat-mantle border border-cat-surface/50">
                <Zap className="w-4 h-4 text-cat-yellow" />
                <span>Zero Latency UI</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cat-mantle border border-cat-surface/50">
                <Database className="w-4 h-4 text-cat-blue" />
                <span>Dexie + SQLite</span>
            </div>
        </div>
      </div>
    </div>
  );
};
