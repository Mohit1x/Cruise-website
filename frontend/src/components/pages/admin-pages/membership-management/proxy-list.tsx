"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import DynamicBreadcrumbs from "@/components/DynamicBreadcurmbs";
import { CustomPagination } from "@/components/CustomPagination";

// Dummy data for Proxy List
const proxyData = [
  {
    realUserId: "17588165",
    level: "Level 1",
    username: "bd team 6",
    phoneNumber: "",
    invitationCode: "YG7PH",
    numberOfLogins: 0,
    usageStatus: "In use",
    addTime: "2025-08-21 14:58:30",
  },
  {
    realUserId: "17587478",
    level: "Level 1",
    username: "bdteam3",
    phoneNumber: "",
    invitationCode: "DRVHFG",
    numberOfLogins: 0,
    usageStatus: "In use",
    addTime: "2025-08-19 20:30:47",
  },
  {
    realUserId: "17587194",
    level: "Level 1",
    username: "bdteam2",
    phoneNumber: "",
    invitationCode: "BJBGPS",
    numberOfLogins: 0,
    usageStatus: "In use",
    addTime: "2025-08-19 19:59:11",
  },
  {
    realUserId: "17586429",
    level: "Level 1",
    username: "bangladesh",
    phoneNumber: "",
    invitationCode: "HABSAZ",
    numberOfLogins: 0,
    usageStatus: "In use",
    addTime: "2025-12-26 16:05:16",
  },
  {
    realUserId: "17552838",
    level: "Level 1",
    username: "team6",
    phoneNumber: "",
    invitationCode: "BFWMVG",
    numberOfLogins: 0,
    usageStatus: "In use",
    addTime: "2024-11-18 12:45:52",
  },
  {
    realUserId: "0",
    level: "Level 1",
    username: "1111111111",
    phoneNumber: "14714714714",
    invitationCode: "",
    numberOfLogins: 0,
    usageStatus: "In use",
    addTime: "2024-10-14 17:17:29",
  },
  {
    realUserId: "17500494",
    level: "Level 1",
    username: "obito",
    phoneNumber: "",
    invitationCode: "NMYAB",
    numberOfLogins: 0,
    usageStatus: "In use",
    addTime: "2024-10-14 16:18:07",
  },
  {
    realUserId: "17500493",
    level: "Level 1",
    username: "ashik",
    phoneNumber: "",
    invitationCode: "ADBGDG",
    numberOfLogins: 0,
    usageStatus: "In use",
    addTime: "2024-10-14 16:18:05",
  },
  {
    realUserId: "17500492",
    level: "Level 1",
    username: "stark",
    phoneNumber: "",
    invitationCode: "SCMXKZ",
    numberOfLogins: 0,
    usageStatus: "In use",
    addTime: "2024-10-14 16:17:48",
  },
  {
    realUserId: "17500490",
    level: "Level 1",
    username: "jack",
    phoneNumber: "",
    invitationCode: "QBMHZ",
    numberOfLogins: 0,
    usageStatus: "In use",
    addTime: "2024-10-14 16:17:33",
  },
  {
    realUserId: "17500489",
    level: "Level 1",
    username: "mark",
    phoneNumber: "",
    invitationCode: "TGMKV",
    numberOfLogins: 0,
    usageStatus: "In use",
    addTime: "2024-10-14 16:17:27",
  },
  {
    realUserId: "17500487",
    level: "Level 1",
    username: "shaggan",
    phoneNumber: "",
    invitationCode: "FMSETC",
    numberOfLogins: 0,
    usageStatus: "In use",
    addTime: "2024-10-14 16:16:06",
  },
  {
    realUserId: "17500486",
    level: "Level 1",
    username: "jihan",
    phoneNumber: "",
    invitationCode: "FHQGZ",
    numberOfLogins: 0,
    usageStatus: "In use",
    addTime: "2024-10-14 16:14:02",
  },
  {
    realUserId: "17500486",
    level: "Level 1",
    username: "kaka",
    phoneNumber: "",
    invitationCode: "NABGN",
    numberOfLogins: 0,
    usageStatus: "In use",
    addTime: "2024-10-14 16:11:06",
  },
  {
    realUserId: "17500485",
    level: "Level 1",
    username: "tufy",
    phoneNumber: "",
    invitationCode: "SGSAKZ",
    numberOfLogins: 0,
    usageStatus: "In use",
    addTime: "2024-10-14 16:11:00",
  },
  {
    realUserId: "17500484",
    level: "Level 1",
    username: "rose",
    phoneNumber: "",
    invitationCode: "CSCGR",
    numberOfLogins: 0,
    usageStatus: "In use",
    addTime: "2024-10-14 16:10:34",
  },
  {
    realUserId: "17500483",
    level: "Level 1",
    username: "Tyler",
    phoneNumber: "",
    invitationCode: "GTBSN",
    numberOfLogins: 0,
    usageStatus: "In use",
    addTime: "2024-10-14 16:10:43",
  },
  {
    realUserId: "17500482",
    level: "Level 1",
    username: "Dany",
    phoneNumber: "",
    invitationCode: "FHQGZ",
    numberOfLogins: 0,
    usageStatus: "In use",
    addTime: "2024-10-14 16:10:42",
  },
  {
    realUserId: "17500457",
    level: "Level 1",
    username: "Dashing Agent",
    phoneNumber: "",
    invitationCode: "SJHSJN",
    numberOfLogins: 0,
    usageStatus: "In use",
    addTime: "2024-10-14 16:06:30",
  },
  {
    realUserId: "17500451",
    level: "Level 1",
    username: "khan",
    phoneNumber: "",
    invitationCode: "ZBYRBG",
    numberOfLogins: 0,
    usageStatus: "In use",
    addTime: "2024-10-14 16:06:06",
  },
];

export default function ProxyList() {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const getOperationBadgeClass = (operation: string) => {
    switch (operation) {
      case "subordinates":
        return "bg-blue-500 text-white border-blue-500";
      case "password":
        return "bg-blue-600 text-white border-blue-600";
      case "edit":
        return "bg-teal-500 text-white border-teal-500";
      case "delete":
        return "bg-yellow-500 text-white border-yellow-500";
      default:
        return "bg-gray-500 text-white border-gray-500";
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Breadcrumb */}
      <div className="pt-4 pl-3">
        <DynamicBreadcrumbs />
      </div>

      <Card className="rounded-none">
        <CardHeader className="p-3 sm:pb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
          <CardTitle className="text-base sm:text-lg">Conditional Search</CardTitle>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <Input
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full h-8 sm:h-10 text-xs sm:text-sm"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Input
                placeholder="Enter your mobile no."
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full h-8 sm:h-10 text-xs sm:text-sm"
              />
            </div>
            <Button
              size="sm"
              className="h-8 sm:h-10 px-2 sm:px-3 w-full sm:w-auto"
            >
              <Search className="h-3 w-3 sm:h-4 sm:w-4 mr-2" /> Search
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0 sm:p-6 sm:pt-0">
          {/* Mobile Card View */}
          <div className="sm:hidden space-y-3 p-3">
            {proxyData.map((proxy, index) => (
              <Card key={index} className="p-3">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm">
                      ID: {proxy.realUserId}
                    </span>
                    <Badge
                      variant="outline"
                      className="text-xs bg-green-500 text-white border-green-500"
                    >
                      {proxy.usageStatus}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                    <div>
                      <div>
                        <strong>Level:</strong> {proxy.level}
                      </div>
                      <div>
                        <strong>Username:</strong> {proxy.username}
                      </div>
                      <div>
                        <strong>Phone:</strong> {proxy.phoneNumber || "N/A"}
                      </div>
                    </div>
                    <div>
                      <div>
                        <strong>Inv. Code:</strong>{" "}
                        {proxy.invitationCode || "N/A"}
                      </div>
                      <div>
                        <strong>Logins:</strong> {proxy.numberOfLogins}
                      </div>
                      <div>
                        <strong>Add Time:</strong> {proxy.addTime}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {["subordinates", "password", "edit", "delete"].map(
                      (op, opIndex) => (
                        <Badge
                          key={opIndex}
                          variant="outline"
                          className={`text-xs ${getOperationBadgeClass(op)}`}
                        >
                          {op}
                        </Badge>
                      )
                    )}
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
                  <TableHead className="text-xs sm:text-sm">
                    Real User ID
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm">level</TableHead>
                  <TableHead className="text-xs sm:text-sm">username</TableHead>
                  <TableHead className="text-xs sm:text-sm">
                    phone number
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm">
                    Invitation Code
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm">
                    Number of logins
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm">
                    Usage Status
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm">Add Time</TableHead>
                  <TableHead className="text-xs sm:text-sm">operate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {proxyData.map((proxy, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-xs sm:text-sm">
                      {proxy.realUserId}
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      {proxy.level}
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      {proxy.username}
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      {proxy.phoneNumber || ""}
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      {proxy.invitationCode}
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      {proxy.numberOfLogins}
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      <Badge
                        variant="outline"
                        className="text-xs bg-green-500 text-white border-green-500"
                      >
                        {proxy.usageStatus}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      {proxy.addTime}
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      <div className="flex flex-wrap gap-1">
                        {["subordinates", "password", "edit", "delete"].map(
                          (op, opIndex) => (
                            <Badge
                              key={opIndex}
                              variant="outline"
                              className={`text-xs ${getOperationBadgeClass(
                                op
                              )}`}
                            >
                              {op}
                            </Badge>
                          )
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row gap-4 p-4 border-t">
            <CustomPagination
              totalPages={5}
              currentPage={1}
              onPageChange={(page) => console.log("Page changed to:", page)}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
