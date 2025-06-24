import { getStudentById } from '@/app/actions/page'
import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowBigLeftIcon } from 'lucide-react'

// ✅ JUST THIS TYPE WAS ADDED
type PageProps = {
  params: {
    id: string;
  };
};

export default async function studentId({ params }: PageProps) {
  const { id } = params
  const student = await getStudentById(Number(id))

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='p-5 bg-accent m-5 w-[400px]'>
        <Card>
          <CardHeader>
            <CardTitle>Student ID: {student?.studentId}</CardTitle>
          </CardHeader>
          <CardContent>
            Student Name: {student?.firstName} {student?.lastName}
          </CardContent>
          <CardContent>
            <p>Status: {student?.isActive ? "yes" : "no"}</p>
          </CardContent>
          <CardFooter>
            <p>Remarks: {student?.remarks}</p>
          </CardFooter>
          <div className='flex justify-center'>
            <Link href={`/student/list`}>
              <Button asChild className='w-[330px]'>
                <ArrowBigLeftIcon />
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}
