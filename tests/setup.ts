import { afterAll, afterEach, beforeAll, beforeEach, vi } from 'vitest'

// Global test setup
beforeAll(() => {
  // Setup code that runs once before all tests
  console.log('🚀 Starting test suite...')
})

afterAll(() => {
  // Cleanup code that runs once after all tests
  console.log('✅ Test suite completed!')
})

beforeEach(() => {
  // Setup code that runs before each test
})

afterEach(() => {
  // Cleanup code that runs after each test
})

// Mock VSCode API for testing
global.vscode = {
  window: {
    createWebviewPanel: vi.fn(),
    showInformationMessage: vi.fn(),
    showErrorMessage: vi.fn(),
    showWarningMessage: vi.fn(),
  },
  ViewColumn: {
    One: 1,
    Two: 2,
    Three: 3,
  },
  Uri: {
    file: vi.fn((path: string) => ({ fsPath: path })),
    parse: vi.fn((path: string) => ({ fsPath: path })),
  },
  workspace: {
    getConfiguration: vi.fn(() => ({
      get: vi.fn(),
      update: vi.fn(),
    })),
  },
  commands: {
    registerCommand: vi.fn(),
    executeCommand: vi.fn(),
  },
  extensions: {
    getExtension: vi.fn(),
  },
} as any

// Mock console methods to reduce noise in tests
const originalConsole = console
global.console = {
  ...originalConsole,
  log: vi.fn(),
  info: vi.fn(),
  warn: vi.fn(),
  error: vi.fn(),
  debug: vi.fn(),
}
