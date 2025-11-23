---
title: Installation
description: Get Faster Chat running with development mode, Docker, or Docker with HTTPS
---

# Installation

Choose your installation method based on your needs:

- **Development Mode** - Fast iteration with hot reload (recommended for development)
- **Docker** - Quick deployment with one command
- **Docker + HTTPS** - Production deployment with automatic SSL certificates

## Prerequisites

Choose based on your installation method:

**Development Mode:**
- [Bun](https://bun.sh/) (recommended) or Node.js 20+
- Git

**Docker:**
- [Docker](https://docs.docker.com/get-docker/) and Docker Compose
- Git

**For Offline AI (optional):**
- [Ollama](https://ollama.ai/) - For running local models
- At least 8GB RAM recommended for local models

## Development Mode

Perfect for contributing, customizing, or exploring the codebase.

### 1. Clone and Install

```bash
git clone https://github.com/1337hero/faster-chat.git
cd faster-chat
bun install  # or npm install
```

### 2. Start Development Servers

```bash
bun run dev  # Starts both frontend and backend
```

On first run, the server will automatically:
- ✅ Generate a secure encryption key for API key storage (`server/.env`)
- ✅ Create required data directories
- ✅ Initialize the SQLite database

The application will be available at:
- **Frontend**: http://localhost:3000
- **API Server**: http://localhost:3001

:::caution[Important]
Backup `server/.env` - this file contains the encryption key needed to decrypt stored API keys. Don't commit it to git (already in .gitignore).
:::

### 3. First Account Setup

1. Navigate to http://localhost:3000/login
2. Click "Register" to create an account
3. **Your first account is automatically promoted to admin**

## Docker Deployment

Quick deployment with a single command.

### 1. Clone the Repository

```bash
git clone https://github.com/1337hero/faster-chat.git
cd faster-chat
```

### 2. Generate Encryption Key

```bash
echo "API_KEY_ENCRYPTION_KEY=$(node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")" > server/.env
```

### 3. Start with Docker

```bash
docker compose up -d
```

Access at: **http://localhost:8787**

### Docker Configuration

**Default Settings:**
- Port: 8787 (configurable via `APP_PORT` in `server/.env`)
- Storage: SQLite database in `chat-data` volume
- Runtime: Node.js 22 on Debian (native module compatibility)

**Environment Variables** (`server/.env`):

```bash
# Required: Encryption key for API keys
API_KEY_ENCRYPTION_KEY=...  # Auto-generated above

# Optional: Configure port
APP_PORT=8787              # Internal port (default: 8787)

# For local Ollama access from Docker
OLLAMA_BASE_URL=http://host.docker.internal:11434
```

**Useful Commands:**

```bash
docker compose up -d                # Start
docker compose logs -f              # View logs
docker compose down                 # Stop
docker compose up -d --build        # Rebuild

# Reset database
docker compose down
docker volume rm faster-chat_chat-data
docker compose up -d
```

## Docker + HTTPS (Production)

Production deployment with automatic HTTPS certificates via Caddy.

### 1. Configure Domain

Edit `Caddyfile` and replace `localhost` with your domain:

```caddyfile
yourdomain.com {
    reverse_proxy app:8787
}
```

### 2. Point DNS

Create an A record pointing your domain to your server's IP address.

### 3. Start with Caddy

```bash
docker compose -f docker-compose.yml -f docker-compose.caddy.yml up -d
```

**Caddy Features:**
- Automatic HTTPS with Let's Encrypt
- Certificate auto-renewal
- HTTP/2 and HTTP/3 support
- Compression and security headers
- Only 13MB overhead (Alpine-based)

Access at: **https://yourdomain.com**

:::tip[Local Development with Caddy]
For local testing, Caddy also works on `localhost` without HTTPS:
```bash
# Use localhost in Caddyfile
docker compose -f docker-compose.yml -f docker-compose.caddy.yml up -d
# Access at http://localhost
```
:::

## Setting Up Ollama (Optional)

Run AI models completely offline on your local machine.

### Install Ollama

**macOS / Linux:**
```bash
curl -fsSL https://ollama.ai/install.sh | sh
```

**Windows:**
Download from [ollama.ai](https://ollama.ai/)

### Pull a Model

```bash
# Fast, general-purpose model
ollama pull llama3.2

# Larger, more capable model
ollama pull llama3.1:70b
```

### Start Ollama

```bash
ollama serve  # Usually runs automatically
```

Ollama runs on `http://localhost:11434` by default.

## Next Steps

- [Quick Start Guide](/docs/guides/quick-start/) - Configure providers and start chatting
- [Provider Configuration](#) - Add OpenAI, Anthropic, or other cloud providers
- [Admin Guide](#) - Manage users and settings
