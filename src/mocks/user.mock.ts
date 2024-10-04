import { tUser, tUpdateUser } from "../interfaces/user.interface";

let users: tUser[] = [];

const userMock = {
  user: {
    create: async (data: { name: string; email: string; password: string; documents: any[] }) => {
      const newUser: tUser = {
        id: users.length + 1,
        name: data.name,
        email: data.email,
        password: data.password,
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
    findById: async ({ id }: { id: number }) => {
      return users.find((user) => user.id === id);
    },
    findByIdAndUpdate: async ({
      id,
      data,
    }: {
      id: number;
      data: tUpdateUser;
    }) => {
      const userIndex = users.findIndex((user) => user.id === id);
      if (userIndex === -1) {
        return null;
      }
      const updateUser = { ...users[userIndex], ...data };
      users[userIndex] = updateUser;
      return updateUser;
    },
    findByIdAndDelete: async ({ id }: { id: number }) => {
      const userIndex = users.findIndex((user) => user.id === id);
      if (userIndex === -1) {
        return null;
      }
      const deleteUser = users.splice(userIndex, 1)[0];
      return deleteUser;
    },
  },
};

export default userMock;
