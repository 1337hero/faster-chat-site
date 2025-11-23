import { Github, X } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-cat-crust border-t border-cat-surface pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">Faster Chat</h3>
            <p className="text-cat-subtext max-w-xs">
              The open-source, privacy-first interface for the future of AI
              interaction.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Project</h4>
            <ul className="space-y-2 text-cat-subtext text-sm">
              <li>
                <a href="#" className="hover:text-cat-mauve">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cat-mauve">
                  Contributing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cat-mauve">
                  Releases
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cat-mauve">
                  License
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/1337hero/faster-chat"
                target="_blank"
                className="text-cat-subtext hover:text-white"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/1337Hero" target="_blank"
                className="text-cat-subtext hover:text-white"
              >
                <X className="w-5 h-5" />
              </a>
              {/* Placeholder for other socials if needed */}
            </div>
          </div>
        </div>

        <div className="border-t border-cat-surface pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-cat-overlay">
          <p>© 2024 Faster Chat. MIT License.</p>
          <p className="mt-2 md:mt-0">
            Built with ❤️ by{" "}
            <a
              href="https://1337hero.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              1337Hero
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
