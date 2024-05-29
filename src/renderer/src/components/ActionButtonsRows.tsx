import { DeleteNoteButton, NewNoteButton } from './Button'
import { ComponentProps } from 'react'

export const ActionButtonsRows = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props}>
      <NewNoteButton />
      <DeleteNoteButton />
    </div>
  )
}
