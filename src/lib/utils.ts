import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function handleKeyPress(e: React.KeyboardEvent, callback: () => void) {
  if (e.key === 'Enter') {
    callback()
  }
}
