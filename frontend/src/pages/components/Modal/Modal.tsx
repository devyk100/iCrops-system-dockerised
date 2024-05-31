import  { ReactNode } from 'react'

function Modal({ children, closeHandler }: {
  children: ReactNode;
  closeHandler?: () => void
}) {
  return (
    <div onClick={() => {
      if (closeHandler) closeHandler();
    }} className='flex y-5 items-center overflow-scroll justify-center h-screen w-screen absolute top-0 left-0 z-50 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
      <div className='h-screen py-10' onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
export default Modal