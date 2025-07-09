import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 마크다운을 HTML로 변환하는 함수
export function parseMarkdown(text: string): string {
  if (!text) return text
  
  // **텍스트**를 <strong>텍스트</strong>로 변환
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
}
