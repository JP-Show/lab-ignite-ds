import { InputHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import { Slot } from '@radix-ui/react-slot'

export interface TextInputRootProps {
  children: ReactNode
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div
      className={clsx(
        ' flex items-center gap-3 py-3 h-12 px-4 rounded w-full bg-gray-800 focus-within:ring-2 ring-gray-400'
      )}
    >
      {props.children}
    </div>
  )
}

export interface TextInputIconProps {
  children: ReactNode
}

function TextInputIcon(props: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>
}

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 outline-none  text-gray-100 text-xs placeholder:text-gray-400"
      {...props}
    />
  )
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}
