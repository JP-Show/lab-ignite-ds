import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
}

export function Button({
  children,
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={clsx(
        'py-3 px-4 rounded font-semibold text-black bg-cyan-500 text-sm w-full  transition-colors hover:bg-cyan-300 focus:ring-1 ring-white',
        className
      )}
      {...props}
      font-sans
    >
      {children}
    </Comp>
  )
}
