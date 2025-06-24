// import { getStudentById } from '@/app/actions/page';
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { ArrowBigLeftIcon } from 'lucide-react';

// // ✅ Proper type for route parameters
// type PageProps = {
//   params: {
//     id: string;
//   };
// };

// // ✅ Page component using PageProps
// export default async function StudentIdPage({ params }: PageProps) {
//   const student = await getStudentById(Number(params.id));

//   return (
//     <div className='flex items-center justify-center h-screen'>
//       <div className='p-5 bg-accent m-5 w-[400px]'>
//         <Card>
//           <CardHeader>
//             <CardTitle>Student ID: {student?.studentId}</CardTitle>
//           </CardHeader>
//           <CardContent>
//             Student Name: {student?.firstName} {student?.lastName}
//           </CardContent>
//           <CardContent>
//             <p>Status: {student?.isActive ? "yes" : "no"}</p>
//           </CardContent>
//           <CardFooter>
//             <p>Remarks: {student?.remarks}</p>
//           </CardFooter>
//           <div className='flex justify-center'>
//             <Button asChild className='w-[330px]'>
//               <Link href={`/student/list`}>
//                 <ArrowBigLeftIcon />
//               </Link>
//             </Button>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// }

// // ✅ Type utilities for validation (optional, but safe for type checking)
// type FirstArg<T> = T extends (arg1: infer U, ...args: any[]) => any ? U : never;

// type Diff<T, U> = {
//   [K in keyof T as K extends keyof U ? (T[K] extends U[K] ? never : K) : K]: T[K];
// };

// declare function checkFields<T>(): void;

// // ✅ Type check to ensure props are valid (optional)
// checkFields<Diff<PageProps, FirstArg<typeof StudentIdPage>>>();
