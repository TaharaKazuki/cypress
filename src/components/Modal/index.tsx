import { ReactNode } from 'react'
import './index.css'

type Props = {
  children: ReactNode,
  onClose: () => void
}

export const Modal = ({children, onClose }: Props) => {
  return (
    <>
      <div className='backdrop'  onClick={onClose}>
        <dialog className='modal'>
          {children}
        </dialog>
      </div>
    </>
  )
}