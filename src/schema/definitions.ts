import { z } from "zod"


export type FormState =
    | {
    errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
    };
    message?: string;
}
    | undefined;

export const createUserSchema = z.object({
    name: z.string().min(3, { message: 'Be at least 3 characters long' }).trim(),
    email: z.string().email({
        message: "Please enter a valid email"
    }),
    password: z.string()
        .min(8, { message: 'Be at least 8 characters long' })
        .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
        .regex(/[0-9]/, { message: 'Contain at least one number.' })
        .regex(/[^a-zA-Z0-9]/, {
            message: 'Contain at least one special character.',
        })
        .trim(),
})

export const loginSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email"
    }),
    password: z.string()
        .min(8, { message: 'Be at least 8 characters long' })
        .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
        .regex(/[0-9]/, { message: 'Contain at least one number.' })
        .regex(/[^a-zA-Z0-9]/, {
            message: 'Contain at least one special character.',
        })
        .trim(),
})
