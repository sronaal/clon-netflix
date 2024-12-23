import { z } from 'zod'



export const formSchema = z.object({
    email: z.string().email().min(2),
    password: z.string().min(6),
})