"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { studentCreate } from "@/app/actions/page"
import { Student } from "@/generated/prisma"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "firstName must be at least 2 characters.",
  }),

  lastName: z.string().min(2, {
    message: "lastName must be at least 2 characters.",
  }),

  studentId: z.string().min(2, {
    message: "studentId must be at least 2 characters.",
  }),

  remarks: z.string().min(2, {
    message: "remarks must be at least 2 characters.",
  }),

  isActive: z.boolean(),

})

export default function  CreateStudent() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName:"",
      studentId:"",
      remarks:"",
      isActive: true
    },
  })
 
  async function onSubmit(values: z.infer<typeof formSchema>) {
    await studentCreate(values as Student)
    console.log(values)
    router.refresh();
    form.reset();
  }

  return (
    
   <div className="flex justify-center">
    <div className="p-5 bg-amber-100 ">
         <Form<z.infer<typeof formSchema>> {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="eg Ali" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

         <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>lastName </FormLabel>
              <FormControl>
                <Input placeholder="eg Ali" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

         <FormField
          control={form.control}
          name="studentId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>student Id</FormLabel>
              <FormControl>
                <Input placeholder="eg Ali" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

         <FormField
          control={form.control}
          name="remarks"
          render={({ field }) => (
            <FormItem>
              <FormLabel>remarks</FormLabel>
              <FormControl>
                <Input placeholder="eg sample sentence" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
   </div>
  )
}