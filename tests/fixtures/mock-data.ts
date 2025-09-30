/**
 * Mock data for testing
 */

export const mockWebviewMessages = {
  simple: {
    name: 'test-message',
    params: { value: 'test' },
  },
  complex: {
    name: 'updateContent',
    params: {
      id: 'test-id',
      content: 'Test content',
      metadata: {
        timestamp: Date.now(),
        source: 'test',
      },
    },
  },
  async: {
    hash: 'test-hash-123',
    params: {
      action: 'getData',
      query: 'test query',
    },
  },
}

export const mockVSCodeConfig = {
  extension: {
    name: 'test-extension',
    version: '1.0.0',
    displayName: 'Test Extension',
  },
  webview: {
    title: 'Test Webview',
    viewType: 'testView',
    retainContextWhenHidden: true,
  },
  settings: {
    autoSave: true,
    theme: 'dark',
    language: 'en',
  },
}

export const mockFileSystem = {
  files: [
    {
      path: '/test/file1.ts',
      content: 'export const test = "hello"',
      size: 25,
    },
    {
      path: '/test/file2.js',
      content: 'console.log("test")',
      size: 20,
    },
  ],
  directories: [
    '/test',
    '/test/subdir',
  ],
}

export const mockAPIResponses = {
  success: {
    status: 200,
    data: { message: 'Success' },
  },
  error: {
    status: 500,
    error: 'Internal Server Error',
  },
  notFound: {
    status: 404,
    error: 'Not Found',
  },
}

export const mockUserData = {
  profile: {
    id: 'user-123',
    name: 'Test User',
    email: 'test@example.com',
  },
  preferences: {
    theme: 'dark',
    language: 'en',
    notifications: true,
  },
  settings: {
    autoSave: true,
    formatOnSave: true,
  },
}
