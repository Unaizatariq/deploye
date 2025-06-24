import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getAllActiveStudents } from '@/app/actions/page'
import { Button } from '@/components/ui/button';
import { ArrowBigLeftIcon, EyeIcon, TrashIcon  } from 'lucide-react';
import Link from "next/link";
import DeleteDialogue from '@/components/ui/customs/deletedialogue';


const studentList = async() => {
  const students=await getAllActiveStudents();
  
  
  return (
  <div className="flex items-center justify-center">
    <div className='p-5 bg-accent m-5'> 
      <h1 className='flex justify-center p-4 font-bold'>Student Data List</h1>
      <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Student Id</TableHead>
      <TableHead>First Name</TableHead>
      <TableHead>Last Name</TableHead>
      <TableHead >Stauts</TableHead>
      <TableHead >Remarks</TableHead>
       <TableHead >View</TableHead>
      <TableHead >Delete</TableHead>

    </TableRow>
  </TableHeader>
  
  <TableBody>
    {students.map((student) => (
      <TableRow key={student.id}>
        <TableCell className="font-medium">{student.studentId}</TableCell>
        <TableCell>{student.firstName}</TableCell>
        <TableCell>{student.lastName}</TableCell>
        <TableCell>{student.isActive ? "yes" : "No"}</TableCell>
        <TableCell>{student.remarks}</TableCell>

         <TableCell>
          <Button asChild variant={"ghost"} size={"default"} >
            <Link href={`/student/${student.id}`}>
            <EyeIcon className="h-4 w-4"/>
             </Link>
          </Button>
         </TableCell>
         <TableCell>

    <DeleteDialogue id={student.id}/>
           </TableCell>
      </TableRow>
    ))}

  
  </TableBody>
</Table>


           <div className='m-5 flex justify-center'>
           
            <Link href={`/student/create`}>
          <Button asChild className=' w-[400px]'>
          <ArrowBigLeftIcon />
           </Button>
          </Link>

  </div>
</div>
  </div>
  )
}

export default studentList
