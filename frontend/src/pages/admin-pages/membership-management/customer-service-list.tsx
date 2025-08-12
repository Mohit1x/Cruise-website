"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Plus } from "lucide-react"

// Dummy data for Customer Service List
const customerServiceData = [
  {
    id: 1,
    username: "WhatsApp",
    link: "https://t.me/Financialsupport044",
    workingHours: "",
    offGetOf: "",
    addTime: "February 19, 2024, 12:49:38",
  },
  {
    id: 2,
    username: "Telegram",
    link: "www.baidu.com",
    workingHours: "",
    offGetOf: "",
    addTime: "October 11, 2024, 12:19:30",
  },
]

export default function CustomerServiceList() {
  const [username, setUsername] = useState("")
  const [registrationTime, setRegistrationTime] = useState("")
  const [pageSize, setPageSize] = useState("20")

  const getOperationBadgeClass = (operation: string) => {
    switch (operation) {
      case "edit":
        return "bg-teal-500 text-white border-teal-500"
      case "Disable":
        return "bg-red-500 text-white border-red-500"
      default:
        return "bg-gray-500 text-white border-gray-500"
    }
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Breadcrumb */}
      <div className="text-xs sm:text-sm text-gray-500">
        Admin &gt; Membership Management &gt; Customer Service Management &gt; Customer Service List
      </div>

      <Card>
        <CardHeader className="pb-3 sm:pb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
            <CardTitle className="text-base sm:text-lg">Conditional Search</CardTitle>
            <Button size="sm" className="h-8 sm:h-9 px-3 sm:px-4 text-xs sm:text-sm bg-teal-600 hover:bg-teal-700">
              <Plus className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" /> Add customer service
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-xs sm:text-sm whitespace-nowrap">Username</span>
              <Input
                placeholder="Please enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full h-8 sm:h-10 text-xs sm:text-sm"
              />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs sm:text-sm whitespace-nowrap">Registration Time</span>
              <Input
                placeholder="Please select the registration time"
                value={registrationTime}
                onChange={(e) => setRegistrationTime(e.target.value)}
                className="w-full h-8 sm:h-10 text-xs sm:text-sm"
              />
            </div>
            <Button size="sm" className="h-8 sm:h-10 px-2 sm:px-3 w-full sm:w-auto">
              <Search className="h-3 w-3 sm:h-4 sm:w-4 mr-2" /> Search
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0 sm:p-6 sm:pt-0">
          {/* Mobile Card View */}
          <div className="sm:hidden space-y-3 p-3">
            {customerServiceData.map((service, index) => (
              <Card key={index} className="p-3">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm">ID: {service.id}</span>
                    <div className="flex gap-1">
                      <Badge variant="outline" className={`text-xs ${getOperationBadgeClass("edit")}`}>
                        edit
                      </Badge>
                      <Badge variant="outline" className={`text-xs ${getOperationBadgeClass("Disable")}`}>
                        Disable
                      </Badge>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600">
                    <div>
                      <strong>Username:</strong> {service.username}
                    </div>
                    <div>
                      <strong>Link:</strong>{" "}
                      <a
                        href={service.link}
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {service.link}
                      </a>
                    </div>
                    <div>
                      <strong>Add Time:</strong> {service.addTime}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden sm:block overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs sm:text-sm">ID</TableHead>
                  <TableHead className="text-xs sm:text-sm">username</TableHead>
                  <TableHead className="text-xs sm:text-sm">Link</TableHead>
                  <TableHead className="text-xs sm:text-sm">Working h...</TableHead>
                  <TableHead className="text-xs sm:text-sm">Off-get of...</TableHead>
                  <TableHead className="text-xs sm:text-sm">Add Time</TableHead>
                  <TableHead className="text-xs sm:text-sm">operate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customerServiceData.map((service, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-xs sm:text-sm">{service.id}</TableCell>
                    <TableCell className="text-xs sm:text-sm">{service.username}</TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      <a
                        href={service.link}
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {service.link}
                      </a>
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">{service.workingHours}</TableCell>
                    <TableCell className="text-xs sm:text-sm">{service.offGetOf}</TableCell>
                    <TableCell className="text-xs sm:text-sm">{service.addTime}</TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className={`text-xs ${getOperationBadgeClass("edit")}`}>
                          edit
                        </Badge>
                        <Badge variant="outline" className={`text-xs ${getOperationBadgeClass("Disable")}`}>
                          Disable
                        </Badge>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 border-t">
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
              <span>Total 2 records, displayed per page</span>
              <Select value={pageSize} onValueChange={setPageSize}>
                <SelectTrigger className="w-16 h-8">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
              <span>items, total 1 page, currently showing page 1.</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
