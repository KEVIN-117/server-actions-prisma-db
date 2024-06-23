"use server"
import { loginSchema, FormState, createUserSchema } from "@/schema/definitions"

export async function createUser(state: FormState, data:FormData): Promise<FormState>{
    try {
        const validateFields = createUserSchema.safeParse({
            name: data.get("name"),
            email: data.get("email"),
            password: data.get("password")
        })

        if (!validateFields.success){
            return {
                errors: validateFields.error.flatten().fieldErrors
            }
        }
    }catch (error) {
        console.error(error)
    }
}


export async function login(state: any, data:FormData) : Promise<FormState>{
    try {
        const validateFields = loginSchema.safeParse({
            email: data.get("email"),
            password: data.get("password")
        })

        if (!validateFields.success){
            return {
                errors: validateFields.error.flatten().fieldErrors,
                message: "Please enter valid email and password"
            }
        }

        



    }catch (e: any) {
        return {
            errors: {
                email: ["Please enter a valid email"],
                password: ["Please enter a valid password"]
            },
            message: "Please enter valid email and password"
        }
    }
}
