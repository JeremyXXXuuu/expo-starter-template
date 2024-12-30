import { getDrizzle } from "./db";
import { usersTable } from "./schema";
import { eq } from "drizzle-orm";

async function createUser({
  name,
  age,
  email,
}: {
  name: string;
  age: number;
  email: string;
}) {
  const drizzle = getDrizzle();
  await drizzle
    .insert(usersTable)
    .values({
      name,
      age,
      email,
    })
    .execute();
}

async function getUserByEmail(email: string) {
  const drizzle = getDrizzle();
  return drizzle
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email))
    .execute();
}

async function getAllUsers() {
  const drizzle = getDrizzle();
  return drizzle.select().from(usersTable).execute();
}

async function deleteAllUsers() {
  const drizzle = getDrizzle();
  await drizzle.delete(usersTable).execute();
}

export const UserService = {
  createUser,
  getUserByEmail,
  getAllUsers,
  deleteAllUsers,
};
