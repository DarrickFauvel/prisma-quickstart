import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  //   // Create user
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Alice",
  //       email: "alices@prisma.io",
  //     },
  //   })
  //   console.log(user)

  //   // Read users
  //   const users = await prisma.user.findMany()
  //   console.log(users)

  //   Create new user with relations
  const user = await prisma.user.create({
    data: {
      name: "Bob",
      email: "bob@prisma.io",
      posts: {
        create: [
          {
            title: "Hello World",
            published: true,
          },
          {
            title: "My second post",
            content: "This is still a draft",
          },
        ],
      },
    },
  })
  console.log(user)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
