/**
 * Mock Prisma client to avoid connection attempts when no database is configured.
 */
const prisma = new Proxy({}, {
  get: (target, prop) => {
    return () => {
      // Return a proxy that resolves as an empty result or a mock promise
      return Promise.resolve({
        _sum: { count: 0 },
        findMany: () => Promise.resolve([]),
        findUnique: () => Promise.resolve(null),
        upsert: () => Promise.resolve({ count: 0 }),
        create: () => Promise.resolve({ id: '0' }),
        delete: () => Promise.resolve({}),
        update: () => Promise.resolve({}),
        aggregate: () => Promise.resolve({ _sum: { count: 0 } }),
      })
    }
  }
})

export default prisma
