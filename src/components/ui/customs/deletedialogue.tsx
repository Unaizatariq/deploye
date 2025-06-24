"use client"

import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from '../button'
import { TrashIcon } from 'lucide-react'
import { deleteStudentById } from '@/app/actions/page'
import { id } from 'zod/v4/locales'
import { useRouter } from 'next/navigation'

interface deletedialogprops {
  id: string | number;
}

const DeleteDialogue = ({id}: deletedialogprops) => {
    const router = useRouter();

    const handleDelete = async () => {
        await deleteStudentById(Number(id));
        router.refresh();
    }
  return (
    <div>
      <AlertDialog >
  <AlertDialogTrigger asChild>
    <Button variant={"ghost"} className='text-red-500 siz'>
        <TrashIcon/>
      </Button></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction className='bg-red-700' onClick={handleDelete}>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
    </div>
  )
}

export default DeleteDialogue
