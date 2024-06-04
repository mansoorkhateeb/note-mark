import { notesMock } from '@/store/mocks'
import { ComponentProps } from 'react'
import { NotePreview } from '@/components/NotePreview'
import { twMerge } from 'tailwind-merge'
import { useNotesList } from '@/hooks/useNotesList'

export type NotePreviewListProps = ComponentProps<'ul'> & {
  onSelect?: () => void
}

export const NotePreviewList = ({ className, onSelect, ...props }: ComponentProps<'ul'>) => {
  // @ts-ignore it works so ty
  const { notes, selectedNoteIndex, handleNoteSelect } = useNotesList({ onSelect })

  if (notes.length === 0) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <span>No Notes Yet!</span>
      </ul>
    )
  }
  return (
    <ul className={className} {...props}>
      {notes.map((Note, index) => (
        <NotePreview key={Note.title + Note.lastEditTime} isActive={selectedNoteIndex === index} onClick={handleNoteSelect(index)} {...Note} />


      ))}
    </ul>
  )
}
