import { PrismaClient } from '@prisma/client';

/**
 * Creates a new instance of PrismaClient.
 * @returns {PrismaClient} An instance of PrismaClient.
 */
const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  /**
   * Global variable for the PrismaClient instance.
   * @type {PrismaClient | undefined}
   */
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

/**
 * Singleton instance of PrismaClient.
 * If a global instance already exists, it will use that. Otherwise, it creates a new one.
 * This helps to prevent multiple instances of PrismaClient in development mode.
 * @type {PrismaClient}
 */
export const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;