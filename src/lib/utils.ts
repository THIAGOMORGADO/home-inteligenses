import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function smoothScroll(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  e.preventDefault()
  const href = e.currentTarget.href
  const targetId = href.replace(/.*#/, "")
  const elem = document.getElementById(targetId)
  if (elem) {
    const offsetTop = elem.getBoundingClientRect().top + window.pageYOffset - 72 // 72px is the header height
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })
  }
}

