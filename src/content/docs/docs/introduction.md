---
title: Introduction
description: Welcome to Faster Chat - A blazingly fast, privacy-first chat interface for AI
---

# Welcome to Faster Chat

> **A blazingly fast, privacy-first chat interface for AI that works with any LLM provider—cloud or completely offline.**

Faster Chat is a self-hosted web application that gives you complete control over your AI conversations. Connect to OpenAI, Anthropic, Groq, Mistral, or run completely offline with [Ollama](https://ollama.ai/), [LM Studio](https://lmstudio.ai/), or [llama.cpp](https://github.com/ggml-org/llama.cpp).

## Why Faster Chat?

**Privacy-First, Always**
- 🗄️ **Conversations stay on your machine** - Local-first IndexedDB storage
- 🔐 **Encrypted API key storage** - Server-side encryption for provider credentials
- 🚫 **No tracking, no analytics** - Your privacy is paramount

**Blazingly Fast**
- ⚡ **3KB Preact runtime** - Zero SSR overhead, instant responses
- 💬 **Real-time streaming** - Powered by Vercel AI SDK
- 📱 **Responsive design** - Works on desktop, tablet, and mobile

**Provider-Agnostic**
- 🤖 **Multi-provider support** - OpenAI, Anthropic, Ollama, Groq, Mistral, custom APIs
- 🔌 **Auto-discover models** - Integration with [models.dev](https://models.dev)
- 🌐 **Works completely offline** - Run local models with Ollama or LM Studio

## Key Features

### Core Chat Experience
- Real-time streaming responses with the Vercel AI SDK
- Markdown rendering with syntax highlighting and LaTeX support
- File attachments with preview and download
- Conversation history and search

### Administration
- Multi-user authentication with role-based access (admin/member/readonly)
- Provider Hub for managing AI connections and API keys
- Admin panel for user management (CRUD, password reset, role changes)
- Auto-discovery of available models from configured providers

### Deployment Options
- One-command Docker deployment with optional HTTPS via Caddy
- Development mode with Bun for fast iteration
- Production builds optimized for Node.js compatibility

## Tech Stack

**Frontend**
- [Preact](https://preactjs.com/) - 3KB React alternative
- [TanStack Router](https://tanstack.com/router) - Type-safe routing
- [TanStack Query](https://tanstack.com/query) - Server state management
- [Dexie.js](https://dexie.org/) - IndexedDB wrapper for local storage
- [Tailwind CSS 4.1](https://tailwindcss.com/) - Utility-first styling

**Backend**
- [Hono](https://hono.dev/) - Ultrafast web framework
- [Vercel AI SDK](https://sdk.vercel.ai/) - Multi-provider LLM streaming
- SQLite - Embedded database for users and configuration
- [Argon2](https://github.com/napi-rs/node-rs) - Password hashing

## What's Next?

- [Installation](/docs/installation/) - Get Faster Chat running locally
- [Quick Start](/docs/guides/quick-start/) - Configure providers and start chatting

## Community & Contributing

Faster Chat is MIT licensed and welcomes contributions:

- [GitHub Repository](https://github.com/1337hero/faster-chat)
- [Report Issues](https://github.com/1337hero/faster-chat/issues)
- [Contributing Guide](https://github.com/1337hero/faster-chat/blob/main/CONTRIBUTING.md)

Built with ❤️ by [1337Hero](https://github.com/1337hero) for developers who value privacy, speed, and control.
