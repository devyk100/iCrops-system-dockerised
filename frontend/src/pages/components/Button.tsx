import  { MouseEventHandler, ReactNode } from 'react'

function Button({ children, onClick, className, disabled }: {
    children: ReactNode,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    className?: string;
    disabled?: boolean; 
}) {
    if(!disabled)
    return (
        <button onClick={onClick} className={'w-fit px-5 border border-gray-500  py-2 rounded-3xl font-semibold mx-1 transition hover:text-gray-100 ease-in-out delay-150 bg-blue-500 focus:-translate-y-1 hover:scale-110 hover:bg-indigo-500  '+className} disabled={disabled}>{children}</button>
    )
    return (
        <button onClick={onClick} className={'w-fit px-5 py-2 border border-gray-500  rounded-3xl font-semibold mx-1  bg-blue-500  '+className} disabled={disabled}>{children}</button>
    )
}

export default Button