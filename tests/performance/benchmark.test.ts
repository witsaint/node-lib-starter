import { describe, expect, it } from 'vitest'
import { main } from '@/index'

describe('performance Tests', () => {
  describe('function Performance', () => {
    it('should execute main function quickly', () => {
      const startTime = performance.now()

      // Execute the function multiple times
      for (let i = 0; i < 1000; i++) {
        main()
      }

      const endTime = performance.now()
      const executionTime = endTime - startTime

      // Should complete in less than 100ms
      expect(executionTime).toBeLessThan(100)
    })

    it('should handle concurrent executions', async () => {
      const promises = Array.from({ length: 100 }, () =>
        Promise.resolve(main()))

      const startTime = performance.now()
      const results = await Promise.all(promises)
      const endTime = performance.now()

      expect(results).toHaveLength(100)
      expect(results.every(result => result === 'Hello, world!')).toBe(true)

      // All concurrent executions should complete quickly
      expect(endTime - startTime).toBeLessThan(50)
    })
  })

  describe('memory Usage', () => {
    it('should not leak memory with repeated calls', () => {
      const initialMemory = process.memoryUsage().heapUsed

      // Execute function many times
      for (let i = 0; i < 10000; i++) {
        main()
      }

      // Force garbage collection if available
      if (globalThis.gc) {
        globalThis.gc()
      }

      const finalMemory = process.memoryUsage().heapUsed
      const memoryIncrease = finalMemory - initialMemory

      // Memory increase should be minimal (less than 1MB)
      expect(memoryIncrease).toBeLessThan(1024 * 1024)
    })
  })

  describe('stress Testing', () => {
    it('should handle high frequency calls', () => {
      const iterations = 10000
      const startTime = performance.now()

      for (let i = 0; i < iterations; i++) {
        const result = main()
        expect(result).toBe('Hello, world!')
      }

      const endTime = performance.now()
      const totalTime = endTime - startTime
      const averageTime = totalTime / iterations

      // Average execution time should be very low
      expect(averageTime).toBeLessThan(0.1) // Less than 0.1ms per call
    })

    it('should maintain consistency under load', () => {
      const results = new Set()

      // Generate many results
      for (let i = 0; i < 1000; i++) {
        results.add(main())
      }

      // All results should be identical
      expect(results.size).toBe(1)
      expect(results.has('Hello, world!')).toBe(true)
    })
  })
})
