import { createSafeActionClient } from "next-safe-action";
import { getCurrentUser } from "./auth/current-user";

export class ActionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ActionError";
  }
}

export const handleActionError = (error: Error) => {
  if (error instanceof ActionError) {
    return error.message;
  }
  return "Something went wrong";
};

export const action = createSafeActionClient({
  handleReturnedServerError: handleActionError,
});

export const userAction = createSafeActionClient({
  handleReturnedServerError: handleActionError,
  middleware: async () => {
    const user = await getCurrentUser();
    if (!user) {
      throw new ActionError("Unauthorized");
    }
    return { user };
  },
});
