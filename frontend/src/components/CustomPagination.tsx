"use client"

import { useState } from "react"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface Props {
  totalPages: number
  currentPage?: number
  onPageChange?: (page: number) => void
}

export function CustomPagination({ totalPages, currentPage = 1, onPageChange }: Props) {
  const [page, setPage] = useState(currentPage)

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return
    setPage(newPage)
    onPageChange?.(newPage)
  }

  const renderPageNumbers = () => {
    const pages: (number | string)[] = []

    if (totalPages <= 5) {
      // Show all pages
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      // Always show first, last, current ±1
      pages.push(1)

      if (page > 3) pages.push("...")

      if (page > 2) pages.push(page - 1)
      if (page !== 1 && page !== totalPages) pages.push(page)
      if (page < totalPages - 1) pages.push(page + 1)

      if (page < totalPages - 2) pages.push("...")

      pages.push(totalPages)
    }

    return pages.map((p, i) =>
      typeof p === "number" ? (
        <PaginationItem key={i}>
          <PaginationLink
            onClick={() => handlePageChange(p)}
            isActive={p === page}
          >
            {p}
          </PaginationLink>
        </PaginationItem>
      ) : (
        <PaginationItem key={i}>
          <PaginationEllipsis />
        </PaginationItem>
      )
    )
  }

  return (
    <Pagination >
      <PaginationContent>
        {/* Prev Button */}
        <PaginationItem>
          <PaginationPrevious
            onClick={() => handlePageChange(page - 1)}
            aria-disabled={page === 1}
            className={page === 1 ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>

        {/* Page Numbers */}
        {renderPageNumbers()}

        {/* Next Button */}
        <PaginationItem>
          <PaginationNext
            onClick={() => handlePageChange(page + 1)}
            aria-disabled={page === totalPages}
            className={page === totalPages ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
