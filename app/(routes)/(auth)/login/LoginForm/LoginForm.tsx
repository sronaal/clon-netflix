"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { formSchema } from './LoginForm.form'
import { z } from 'zod'

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import FormError from './FormError/FormError'




export default function LoginForm() {

    const [error, setError] = useState<string | undefined>('Hola')

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full gap-4 flex flex-col ">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input className='h-14 text-white' placeholder="Email" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input className='h-14 text-white' type='password' placeholder="Password" {...field} />
                            </FormControl>


                            <FormMessage />
                        </FormItem>
                    )}
                />

               <FormError message={error}/>
                <Button className='w-full bg-[#E50914]' type="submit">Iniciar sesión </Button>

            </form>
        </Form>
    )
}
