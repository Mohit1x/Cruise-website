"use client"

import { Link, useLocation } from "react-router-dom"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function DynamicBreadcrumbs() {
  const location = useLocation()
  const pathname = location.pathname // e.g. "/home/user/acc"

  // Split and clean up segments
  const segments = pathname
    .split("/")
    .filter(Boolean) // remove empty parts

  // Build URL path progressively
  const crumbs = segments.map((segment, index) => {
    const url = "/" + segments.slice(0, index + 1).join("/")
    return { label: segment, url }
  })

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {crumbs.map((crumb, index) => (
          <BreadcrumbItem key={crumb.url}>
            {index < crumbs.length - 1 ? (
              <>
                <BreadcrumbLink asChild>
                  <Link to={crumb.url}>
                    {crumb.label.charAt(0).toUpperCase() + crumb.label.slice(1)}
                  </Link>
                </BreadcrumbLink>
                <BreadcrumbSeparator />
              </>
            ) : (
              <BreadcrumbPage>
                {crumb.label.charAt(0).toUpperCase() + crumb.label.slice(1)}
              </BreadcrumbPage>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
