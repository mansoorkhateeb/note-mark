import { notesMock } from '@/store/mocks'
import { ComponentProps } from 'react'
import { NotePreview } from './NotePreview'
import { twMerge } from 'tailwind-merge'

export const NotePreviewList = ({className, ...props }: ComponentProps<'ul'>) => {
  if(notesMock.length=== 0) {
    return <ul className={twMerge('text-center pt-4', className)} {...props}>
      <span>No Notes Yet!</span>
    </ul>
  }
  return (
    <ul className={className} {...props}>
      {notesMock.map((Note) => (
        <NotePreview key={Note.title + Note.lastEditTime} {...Note} />
      ))}
    </ul>
  )
}
