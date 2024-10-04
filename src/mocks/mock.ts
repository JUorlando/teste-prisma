import { tUser } from "../interfaces/user.interface";

let users: tUser[] = [];

const prismaMock = {
  user: {
    create: async (data: { name: string; email: string; documents: any[] }) => {
      const newUser: tUser = {
        id: users.length + 1,
        name: data.name,
        email: data.email,
        documents: data.documents,
      };
      users.push(newUser);
      return newUser;
    },
    findUnique: async ({ email }: { email: string }) => {
      return users.find((user) => user.email === email);
    },
    find: async () => {
      return users;
    },
  },
};

export default prismaMock;
