<div align="center">

# 🎯 @wit

**A modern TypeScript starter template for building VSCode extensions with LLM integration**

[![CI](https://github.com/witsaint/ts-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/witsaint/ts-starter/actions/workflows/ci.yml)
[![NPM Version](https://img.shields.io/npm/v/@wit)](https://www.npmjs.com/package/@wit)
[![NPM Downloads](https://img.shields.io/npm/dm/@wit)](https://www.npmjs.com/package/@wit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vitest](https://img.shields.io/badge/Vitest-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev/)

[📖 Documentation](./docs/CI-CD.md) • [🧪 Testing Guide](./docs/TESTING.md) • [🚀 Getting Started](#-getting-started) • [🛠️ Development](#️-development) • [🤝 Contributing](#-contributing)

</div>

---

## ✨ Features

- 🔧 **TypeScript First** - Full TypeScript support with strict type checking
- ⚡ **Fast Build** - Powered by [unbuild](https://github.com/unjs/unbuild) for lightning-fast builds
- 🧪 **Testing Ready** - Pre-configured [Vitest](https://vitest.dev/) for unit testing
- 📏 **Code Quality** - ESLint with [@antfu/eslint-config](https://github.com/antfu/eslint-config)
- 🔄 **CI/CD** - Complete GitHub Actions workflows for testing, building, and publishing
- 📦 **Modern Tooling** - PNPM, Git hooks, and automated dependency updates
- 🎨 **VSCode Extension** - Designed for building VSCode extensions with LLM integration
- 🔒 **Security** - Automated security scanning and dependency auditing

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [PNPM](https://pnpm.io/) (recommended package manager)

### Installation

```bash
# Install via npm
npm install @wit

# Install via pnpm (recommended)
pnpm add @wit

# Install via yarn
yarn add @wit
```

### Quick Start

```typescript
import { FlatWebview } from '@wit'

export class MyExtensionPanel extends FlatWebview {
  private webviewPanel: WebviewPanel

  get moduleName() {
    return 'my-extension'
  }

  constructor() {
    super()
  }

  // Send a message to webview
  sendMessage() {
    this.sendAsyncMessage({
      name: 'updateContent',
      params: { message: 'Hello from extension!' },
    })
  }

  // Send message and wait for response
  async callWebview() {
    const result = await this.sendAsyncCallBackMessage({
      hash: 'unique-id',
      params: { action: 'getData' },
    })
    return result
  }
}
```

## 📖 API Reference

### FlatWebview

Base class for creating VSCode webview panels with communication capabilities.

#### Methods

| Method | Description | Parameters |
|--------|-------------|------------|
| `sendAsyncMessage` | Send one-way message to webview | `{ name: string, params: any }` |
| `sendAsyncCallBackMessage` | Send message and wait for response | `{ hash: string, params: any }` |

#### Abstract Properties

| Property | Type | Description |
|----------|------|-------------|
| `moduleName` | `string` | Unique identifier for the webview module |

## 🛠️ Development

### Setup

```bash
# Clone the repository
git clone https://github.com/witsaint/ts-starter.git
cd ts-starter

# Install dependencies
pnpm install

# Start development
pnpm dev
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development mode with file watching |
| `pnpm build` | Build the project for production |
| `pnpm test` | Run all tests |
| `pnpm test:coverage` | Run tests with coverage report |
| `pnpm test:watch` | Run tests in watch mode |
| `pnpm test:ui` | Open Vitest UI |
| `pnpm test:type` | Run type tests only |
| `pnpm test:performance` | Run performance tests only |
| `pnpm test:integration` | Run integration tests only |
| `pnpm test:e2e` | Run E2E tests only |
| `pnpm lint` | Lint code with ESLint |
| `pnpm typecheck` | Run TypeScript type checking |

### Project Structure

```
ts-starter/
├── src/              # Source code
├── dist/             # Built files
├── docs/             # Documentation
├── .github/          # GitHub workflows and templates
├── tests/            # Test files
│   ├── unit/         # Unit tests
│   ├── integration/  # Integration tests
│   ├── e2e/          # End-to-end tests
│   ├── performance/  # Performance tests
│   ├── types/        # Type tests
│   ├── utils/        # Test utilities
│   └── fixtures/     # Test data
├── scripts/          # Build and utility scripts
└── package.json      # Package configuration
```

## 🔧 Configuration

### TypeScript

The project uses strict TypeScript configuration. Customize settings in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ESNext",
    "module": "ESNext"
  }
}
```

### ESLint

Code style is enforced by ESLint with Anthony Fu's configuration:

```javascript
// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu()
```

## 🚢 Deployment

The project includes automated CI/CD workflows:

- ✅ **Continuous Integration** - Automated testing on multiple platforms
- 📦 **Automated Publishing** - Release to NPM on version tags
- 🔒 **Security Scanning** - CodeQL and dependency auditing
- 📱 **PR Checks** - Automated code review and size analysis

To release a new version:

```bash
# Bump version and create tag
pnpm bumpp

# Or use GitHub Actions workflow for manual release
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

### Development Workflow

1. 🍴 Fork the repository
2. 🌿 Create a feature branch (`git checkout -b feature/amazing-feature`)
3. 💻 Make your changes
4. ✅ Run tests (`pnpm test`)
5. 📝 Commit your changes (`git commit -m 'Add amazing feature'`)
6. 🚀 Push to the branch (`git push origin feature/amazing-feature`)
7. 🔄 Open a Pull Request

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

## 🙏 Acknowledgments

- [Anthony Fu](https://github.com/antfu) for the amazing ESLint config
- [Vitest](https://vitest.dev/) team for the fast testing framework
- [unbuild](https://github.com/unjs/unbuild) for the build system

---

<div align="center">

**[⭐ Star this project](https://github.com/witsaint/ts-starter)** if you find it helpful!

Made with ❤️ by [witsaint](https://github.com/witsaint)

</div>
