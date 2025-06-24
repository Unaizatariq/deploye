"use server"

import { Student } from "@/generated/prisma"
import prisma from "@/lib/prisma"

export async function studentCreate(formData: Student) {
  
 const created = await prisma?.student?.create({
   data: {
      firstName: formData.firstName,
      lastName: formData.lastName,
      studentId: formData.studentId,
      remarks: formData.remarks,
      isActive: formData.isActive,
    },
    
 })
   console.log("✅ Saved to Neon:", created)
  return created


}

export async function getAllActiveStudents() {
  const students = await prisma?.student?.findMany({
    where: {
      isActive: true,
    },
  })
  success: true;
  return students
}

export async function getStudentById(_id: number) {
  const students = await prisma?.student?.findUnique({
    where: {
      id: _id,
    },
  })

  return students
}

export async function deleteStudentById(_id: number) {
  const students = await prisma?.student?.deleteMany({
    where: {
      id: _id,
    },
  })
}