import bycript from "bcryptjs";

export const hashPassword = (password: string): string =>
  bycript.hashSync(password);
export const comparePassword = (
  password: string,
  hashingPassword: string
): boolean => bycript.compareSync(password, hashingPassword);
