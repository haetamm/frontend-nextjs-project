import z, { object, string } from "zod";
import { stripHtml } from "./helper";

export const usernameLogin = string().trim().min(1, "username is required");
export const passwordLogin = string().trim().min(1, "password is required");

export const username = string()
  .trim()
  .min(1, "username is required")
  .regex(/^[a-zA-Z0-9]+$/, "only alphanumeric characters are allowed")
  .min(3, "username must be at least 3 characters long");

export const password = string()
  .trim()
  .min(1, "password is required")
  .regex(/^[a-zA-Z0-9]+$/, "only alphanumeric characters are allowed")
  .min(6, "password must be at least 6 characters long");

export const passwordUpdate = string()
  .trim()
  .min(6, "password must be at least 6 characters long")
  .regex(/^[a-zA-Z0-9]+$/, "only alphanumeric characters are allowed")
  .optional()
  .or(z.literal(""));

export const title = string()
  .trim()
  .min(1, "harus diisi.")
  .max(150, "Title tidak boleh lebih dari 150 karakter");

export const body = string()
  .min(1, "Harus diisi.")
  .max(10000, "Body tidak boleh lebih dari 10.000 karakter")
  .refine((value) => stripHtml(value).length > 0, {
    message: "Body tidak boleh hanya berisi spasi atau tag kosong.",
  });

export const schemaLogin = object({
  username: usernameLogin,
  password: passwordLogin,
});

export const schemaUpdateUser = object({
  username: username,
  password: passwordUpdate,
});

export const schemaRegister = object({
  username: username,
  password: password,
});

export const schemaThread = object({
  title: title,
  body: body,
});

export const schemaComment = object({
  comentar: string()
    .trim()
    .min(1, "wajib disi")
    .max(4000, "Title tidak boleh lebih dari 4000 karakter"),
});
