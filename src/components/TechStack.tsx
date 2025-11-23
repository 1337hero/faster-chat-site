import React from 'react';

export const TechStack = () => {
  const technologies = [
    { name: "Preact", description: "3KB React alternative" },
    { name: "Hono", description: "Ultrafast web framework" },
    { name: "Tailwind 4", description: "Utility-first CSS" },
    { name: "Vercel AI SDK", description: "Stream handling" },
    { name: "Bun", description: "Fast JS Runtime" },
    { name: "Dexie", description: "IndexedDB wrapper" },
    { name: "TanStack", description: "Type-safe routing" },
    { name: "Docker", description: "Containerization" },
  ];

  return (
    <section id="stack" className="py-20 bg-cat-crust border-y border-cat-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/3">
                <h3 className="text-2xl font-bold text-white mb-4">Built on the <span className="text-cat-pink">Bleeding Edge</span></h3>
                <p className="text-cat-subtext">
                    We chose the fastest tools available. No bloat, no legacy code. Just pure performance and standard web technologies.
                </p>
                <div className="mt-6">
                    <a href="https://github.com/1337hero/faster-chat" className="text-cat-blue hover:text-cat-lavender font-medium flex items-center gap-2">
                        Explore the code &rarr;
                    </a>
                </div>
            </div>

            <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
                {technologies.map((tech, i) => (
                    <div key={i} className="bg-cat-base p-4 rounded-lg border border-cat-surface flex flex-col items-center text-center hover:bg-cat-surface/50 transition-colors">
                        <div className="font-mono font-bold text-cat-text">{tech.name}</div>
                        <div className="text-xs text-cat-overlay mt-1">{tech.description}</div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};
