---
title: Quick Start
description: Configure providers and start your first AI conversation
---

# Quick Start Guide

This guide walks you through setting up Faster Chat and starting your first conversation.

## Step 1: Create Your Account

After installing Faster Chat, navigate to the login page:

**Development:** http://localhost:3000/login
**Docker:** http://localhost:8787/login
**Production:** https://yourdomain.com/login

1. Click **Register** to create a new account
2. Enter your username and password
3. Submit the registration form

:::tip
The first account created is automatically promoted to **admin** status, giving you full access to the Admin Panel.
:::

## Step 2: Configure AI Providers

Access the Admin Panel to add your AI providers:

1. Navigate to `/admin` (click your avatar → Admin Panel)
2. Go to the **Providers** tab
3. Click **Add Provider**

### Option A: Cloud Provider (OpenAI, Anthropic, etc.)

Configure a cloud-based AI service:

**OpenAI Example:**
```
Provider Name: OpenAI
Base URL: https://api.openai.com/v1
API Key: sk-proj-... (your OpenAI API key)
```

**Anthropic Example:**
```
Provider Name: Anthropic
Base URL: https://api.anthropic.com/v1
API Key: sk-ant-... (your Anthropic API key)
```

**Other Cloud Providers:**
- **Groq**: `https://api.groq.com/openai/v1` + API key
- **Mistral**: `https://api.mistral.ai/v1` + API key
- **OpenRouter** (100+ models): `https://openrouter.ai/api/v1` + API key

### Option B: Local Provider (Ollama, LM Studio)

Configure a local AI service running on your machine:

**Ollama Example:**
```
Provider Name: Ollama
Base URL: http://localhost:11434
API Key: (leave empty)
```

**LM Studio Example:**
```
Provider Name: LM Studio
Base URL: http://localhost:1234/v1
API Key: (leave empty)
```

:::caution[Docker + Ollama]
If running Faster Chat in Docker and Ollama on your host machine, use:
```
Base URL: http://host.docker.internal:11434
```
:::

### Step 3: Enable Models

After adding a provider, discover and enable available models:

1. Stay in the **Providers** tab of the Admin Panel
2. Find your newly added provider
3. Click **Refresh Models** to auto-discover available models
4. Toggle models **ON** to make them available in the chat interface
5. Optionally set a default model for new conversations

:::tip[Models.dev Integration]
Faster Chat uses [models.dev](https://models.dev) to automatically discover model capabilities, context windows, and pricing information for popular providers.
:::

## Step 4: Start Chatting

Now you're ready to chat!

1. Navigate to `/` (home page)
2. Click **New Chat** or use an existing conversation
3. Select a model from the dropdown
4. Type your message and press **Enter** or click **Send**
5. Watch as the AI streams its response in real-time

### Example Prompts

Try these to get started:

```
Explain how Faster Chat's local-first storage works
```

```
Write a Python script that analyzes log files
```

```
Help me debug this JavaScript error: [paste your error]
```

## Understanding the Interface

**Main Chat View:**
- **Model Selector** - Switch between enabled models
- **Message Input** - Type your prompts (supports Shift+Enter for newlines)
- **Conversation List** - Access your chat history (stored locally in IndexedDB)

**Admin Panel** (`/admin`):
- **Providers Tab** - Manage AI connections and API keys
- **Models Tab** - Enable/disable models from all providers
- **Users Tab** - Manage user accounts and permissions (admins only)

## Working Offline

Faster Chat is built for offline-first operation:

1. **Configure Ollama** or **LM Studio** as a provider
2. **Pull models** locally (e.g., `ollama pull llama3.2`)
3. **Disconnect from the internet**
4. **Continue chatting** - everything runs on your machine

Your conversations are stored locally in **IndexedDB** and never sent to the server unless you upload files.

## File Attachments

Upload files to provide context to the AI:

1. Click the **📎 attachment icon** in the message input
2. Select a file (images, PDFs, text files)
3. The file content is sent with your message
4. Files are stored server-side in `server/data/uploads/`

:::note
File upload requires an active internet connection to the Faster Chat server. Only the file metadata is stored; conversation context remains in your browser.
:::

## Troubleshooting

**No models showing up?**
- Ensure you've added at least one provider in `/admin` → Providers
- Click **Refresh Models** after adding a provider
- Check that the provider's Base URL is correct and accessible

**Connection errors with Ollama?**
- Verify Ollama is running: `ollama serve`
- Check Ollama is accessible: `curl http://localhost:11434`
- If using Docker, use `http://host.docker.internal:11434`

**API key errors?**
- Verify your API key is correct
- Check for proper formatting (no extra spaces)
- Ensure the key has sufficient quota/credits

**Slow responses?**
- Use a smaller, faster model (e.g., `llama3.2:3b` instead of `llama3.1:70b`)
- Check system resources (RAM/CPU usage)
- For cloud providers, check your network connection

## Next Steps

- [Provider Configuration](#) - Deep dive into provider setup
- [Admin Guide](#) - User management and permissions
- [Architecture](#) - Learn how Faster Chat works under the hood
