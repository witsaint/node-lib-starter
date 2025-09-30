import { vi } from 'vitest'

/**
 * Create a mock VSCode extension context
 */
export function createMockExtensionContext(): any {
  return {
    subscriptions: [],
    extensionPath: '/mock/extension/path',
    globalState: {
      get: vi.fn(),
      update: vi.fn(),
      keys: vi.fn(() => []),
    },
    workspaceState: {
      get: vi.fn(),
      update: vi.fn(),
      keys: vi.fn(() => []),
    },
    secrets: {
      get: vi.fn(),
      store: vi.fn(),
      delete: vi.fn(),
    },
    extensionUri: {
      fsPath: '/mock/extension/path',
    },
    environmentVariableCollection: {
      persistent: true,
      replace: vi.fn(),
      append: vi.fn(),
      prepend: vi.fn(),
      get: vi.fn(),
      forEach: vi.fn(),
      delete: vi.fn(),
      clear: vi.fn(),
    },
  }
}

/**
 * Wait for a specified amount of time
 */
export function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Create a promise that resolves after the next tick
 */
export function nextTick(): Promise<void> {
  return new Promise(resolve => setImmediate(resolve))
}
