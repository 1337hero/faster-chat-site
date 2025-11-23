import React from 'react';
import { WifiOff, Lock, Cpu, Server, Download, Globe, Users, Layout } from 'lucide-react';

const features = [
  {
    title: "Offline-Ready",
    description: "Use completely offline with local LLMs via Ollama, LM Studio, or any local inference server.",
    icon: WifiOff,
    color: "text-cat-red"
  },
  {
    title: "Privacy-First",
    description: "All conversations stored locally in your browser (IndexedDB). No cloud requirement.",
    icon: Lock,
    color: "text-cat-green"
  },
  {
    title: "Provider Hub",
    description: "Admin panel to connect any AI provider. Auto-discover models with models.dev integration. Add custom OpenAI-compatible APIs.",
    icon: Globe,
    color: "text-cat-blue"
  },
  {
    title: "Insanely Fast",
    description: "Built on Preact & Hono. 3KB runtime, zero SSR overhead, streaming responses.",
    icon: Cpu,
    color: "text-cat-yellow"
  },
  {
    title: "Self-Hostable",
    description: "One-command Docker deployment with optional HTTPS. No vendor lock-in.",
    icon: Server,
    color: "text-cat-mauve"
  },
  {
    title: "Multi-User Auth",
    description: "Role-based access control with admin, member, and readonly roles. Full user management panel.",
    icon: Users,
    color: "text-cat-peach"
  },
  {
    title: "Beautiful UI",
    description: "Catppuccin color scheme, markdown support, code highlighting, and smooth animations.",
    icon: Layout,
    color: "text-cat-pink"
  },
  {
    title: "Local Persistence",
    description: "Dexie.js ensures your chats are saved instantly to your device, with optional SQLite sync.",
    icon: Download,
    color: "text-cat-lavender"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-cat-base relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cat-surface to-transparent"></div>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-cat-mauve font-semibold tracking-wide uppercase text-sm mb-2">Why Faster Chat?</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Control your AI conversations. <br />
            <span className="text-cat-subtext">No strings attached.</span>
          </h3>
          <p className="text-cat-subtext text-lg">
            Built for developers who want the power of the cloud with the privacy of localhost.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
                key={index} 
                className="group p-6 rounded-2xl bg-cat-mantle border border-cat-surface hover:border-cat-mauve/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cat-mauve/5"
            >
              <div className={`mb-4 p-3 rounded-lg bg-cat-crust w-fit group-hover:scale-110 transition-transform duration-300 ${feature.color}`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-cat-subtext text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
