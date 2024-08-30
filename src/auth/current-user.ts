import { User } from "@prisma/client";
import { baseAuth } from "./auth";

export const getCurrentUser = async () => {
  const session = await baseAuth();

  if (!session?.user) {
    return null;
  }

  const user = session.user as User;

  return user;
};

export const requiredCurrentUser = async () => {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};
