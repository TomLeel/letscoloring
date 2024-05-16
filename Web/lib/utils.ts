import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const unit8Array2String = (uint8Array:Uint8Array):string =>{
    const decoder = new TextDecoder();
    return decoder.decode(uint8Array);
}
