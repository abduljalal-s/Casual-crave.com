// test-prisma.ts
import { prisma } from './lib/prisma'

async function main() {
  try {
    console.log('Fetching all users...')
    const users = await prisma.user.findMany()
    console.log('Users:', users)

    console.log('Fetching all listings...')
    const listings = await prisma.listing.findMany()
    console.log('Listings:', listings)

  } catch (error) {
    console.error('Error fetching data:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
