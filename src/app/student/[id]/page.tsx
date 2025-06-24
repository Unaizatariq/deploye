import { getStudentById } from '@/app/actions/page';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowBigLeftIcon } from 'lucide-react';

type PageProps = {
  params: {
    id: Number;
  };
};

export default async function StudentIdPage({ params }: PageProps) {
  const student = await getStudentById(Number(params.id));

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
            <Button asChild className='w-[330px]'>
              <Link href={`/student/list`}>
                <ArrowBigLeftIcon />
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
