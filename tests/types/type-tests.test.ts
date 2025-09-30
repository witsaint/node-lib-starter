import { describe, expect, it } from 'vitest'
import { main } from '@/index'

// Type-only tests to ensure TypeScript types are correct
describe('type Tests', () => {
  describe('function Return Types', () => {
    it('should have correct return type for main function', () => {
      const result = main()

      // TypeScript should infer this as string
      expect(typeof result).toBe('string')

      // This should compile without errors
      const stringResult: string = result
      expect(stringResult).toBeDefined()
    })
  })

  describe('message Types', () => {
    it('should have correct message structure', () => {
      interface TestMessage {
        name: string
        params: any
      }

      interface AsyncMessage extends TestMessage {
        hash: string
      }

      const syncMessage: TestMessage = {
        name: 'test',
        params: { value: 'test' },
      }

      const asyncMessage: AsyncMessage = {
        name: 'test',
        params: { value: 'test' },
        hash: 'test-hash',
      }

      expect(syncMessage.name).toBeDefined()
      expect(syncMessage.params).toBeDefined()
      expect(asyncMessage.hash).toBeDefined()
    })
  })

  describe('configuration Types', () => {
    it('should have correct configuration structure', () => {
      interface ExtensionConfig {
        autoSave: boolean
        theme: 'light' | 'dark'
        language: string
        notifications: boolean
      }

      const config: ExtensionConfig = {
        autoSave: true,
        theme: 'dark',
        language: 'en',
        notifications: true,
      }

      expect(config.autoSave).toBeTypeOf('boolean')
      expect(['light', 'dark']).toContain(config.theme)
      expect(config.language).toBeTypeOf('string')
      expect(config.notifications).toBeTypeOf('boolean')
    })
  })

  describe('error Types', () => {
    it('should handle different error types correctly', () => {
      interface CustomError extends Error {
        code: string
        details?: any
      }

      const createCustomError = (message: string, code: string): CustomError => {
        const error = new Error(message) as CustomError
        error.code = code
        return error
      }

      const error = createCustomError('Test error', 'TEST_ERROR')

      expect(error).toBeInstanceOf(Error)
      expect(error.message).toBe('Test error')
      expect(error.code).toBe('TEST_ERROR')
      expect(typeof error.code).toBe('string')
    })
  })

  describe('generic Types', () => {
    it('should work with generic types', () => {
      interface ApiResponse<T> {
        success: boolean
        data: T
        error?: string
      }

      const stringResponse: ApiResponse<string> = {
        success: true,
        data: 'test string',
      }

      const objectResponse: ApiResponse<{ id: number, name: string }> = {
        success: true,
        data: { id: 1, name: 'test' },
      }

      expect(stringResponse.data).toBeTypeOf('string')
      expect(objectResponse.data).toBeTypeOf('object')
      expect(objectResponse.data.id).toBeTypeOf('number')
      expect(objectResponse.data.name).toBeTypeOf('string')
    })
  })
})
