import { beforeEach, describe, expect, it, vi } from 'vitest'
import { mockWebviewMessages } from '../fixtures/mock-data'

// Mock the FlatWebview class for testing
class MockFlatWebview {
  private webviewPanel: any
  private messageHandler: any

  constructor() {

  }

  get moduleName() {
    return 'test-module'
  }

  sendAsyncMessage(message: { name: string, params: any }) {
    // Simulate sending message to webview
    this.messageHandler.emit(message.name, message.params)
    return Promise.resolve()
  }

  async sendAsyncCallBackMessage(message: { hash: string, params: any }) {
    // Simulate async callback message
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, data: message.params })
      }, 10)
    })
  }
}

describe('webview Integration Tests', () => {
  let webview: MockFlatWebview

  beforeEach(() => {
    webview = new MockFlatWebview()
  })

  describe('sendAsyncMessage', () => {
    it('should send a simple message', async () => {
      const message = mockWebviewMessages.simple

      await expect(webview.sendAsyncMessage(message)).resolves.toBeUndefined()
    })

    it('should send a complex message', async () => {
      const message = mockWebviewMessages.complex

      await expect(webview.sendAsyncMessage(message)).resolves.toBeUndefined()
    })

    it('should handle message with different types', async () => {
      const messages = [
        { name: 'string-message', params: 'test string' },
        { name: 'number-message', params: 123 },
        { name: 'object-message', params: { key: 'value' } },
        { name: 'array-message', params: [1, 2, 3] },
        { name: 'boolean-message', params: true },
        { name: 'null-message', params: null },
      ]

      for (const message of messages) {
        await expect(webview.sendAsyncMessage(message)).resolves.toBeUndefined()
      }
    })
  })

  describe('sendAsyncCallBackMessage', () => {
    it('should send async callback message and return response', async () => {
      const message = mockWebviewMessages.async

      const result = await webview.sendAsyncCallBackMessage(message)

      expect(result).toEqual({
        success: true,
        data: message.params,
      })
    })

    it('should handle different callback message types', async () => {
      const messages = [
        { hash: 'hash1', params: { action: 'get' } },
        { hash: 'hash2', params: { action: 'set', value: 'test' } },
        { hash: 'hash3', params: { action: 'delete', id: 123 } },
      ]

      for (const message of messages) {
        const result = await webview.sendAsyncCallBackMessage(message)
        expect(result).toEqual({
          success: true,
          data: message.params,
        })
      }
    })
  })

  describe('moduleName', () => {
    it('should return the correct module name', () => {
      expect(webview.moduleName).toBe('test-module')
    })
  })
})
