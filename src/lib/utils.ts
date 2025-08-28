import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  try {
    // Parse YYYY-MM format explicitly
    if (date.includes('-')) {
      const [year, month] = date.split('-')
      const monthIndex = parseInt(month) - 1 // JavaScript months are 0-indexed
      const yearNum = parseInt(year)
      
      return new Date(yearNum, monthIndex).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })
    }
    
    // Fallback for other formats
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    })
  } catch (error) {
    console.error('Error formatting date:', date, error)
    return date // Return original string if parsing fails
  }
}

export function formatDateRange(start: string, end?: string) {
  try {
    const startDate = formatDate(start)
    const endDate = end ? formatDate(end) : "Present"
    return `${startDate} - ${endDate}`
  } catch (error) {
    console.error('Error formatting date range:', start, end, error)
    return `${start} - ${end || 'Present'}`
  }
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
}
