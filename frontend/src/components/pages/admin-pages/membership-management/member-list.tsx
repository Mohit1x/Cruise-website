"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Download } from "lucide-react"
import { AddMemberDialog } from "./add-member-dialog"
import DynamicBreadcrumbs from "@/components/DynamicBreadcurmbs"
import { CustomPagination } from "@/components/CustomPagination"

// Dummy data for Member List
const memberData = [
  {
    uid: "17602550",
    registrationTime: "August 11, 2025, 2:48:19 PM",
    lastLoginTime: "August 11, 2025, 10:03:18.77.42",
    firstLevelAgent: "bdteam3",
    secondaryAgent: "01763694104",
    account: "H9_Rcpq",
    username: "GXB_tys7t",
    grade: "VIP0",
    currentOrder: 0,
    totalOrdersPlaced: 0,
    balance: "Account balance: 11500\nInvestment balance: 0",
    commission: 0,
    cumulativeRecharge: 0,
    cumulativeWithdrawal: 0,
    frozenAmount: 0,
    advancedUser: "Team3",
    invitationCode: "6MJM9G",
    online: "Offline",
    state: "real people",
    operations: [
      "inject",
      "activation",
      "Reset the task load for the day",
      "Consecutive Order Settings",
      "grade",
      "Balance",
      "Investment balance",
      "edit",
      "Bank card information",
    ],
  },
  {
    uid: "17602547",
    registrationTime: "August 11, 2025, 2:47:57 PM",
    lastLoginTime: "157.48.14.055",
    firstLevelAgent: "ashik",
    secondaryAgent: "9390287669",
    account: "KE_Mmpq",
    username: "ashik",
    grade: "VIP0",
    currentOrder: 0,
    totalOrdersPlaced: 0,
    balance: "Account balance: 11500\nInvestment balance: 0",
    commission: 0,
    cumulativeRecharge: 0,
    cumulativeWithdrawal: 0,
    frozenAmount: 0,
    advancedUser: "2BMY5P",
    invitationCode: "2BMY5P",
    online: "Offline",
    state: "real people",
    operations: [
      "inject",
      "activation",
      "Reset the task load for the day",
      "Consecutive Order Settings",
      "grade",
      "Balance",
      "Investment balance",
      "edit",
      "Bank card information",
    ],
  },
  {
    uid: "17602546",
    registrationTime: "August 11, 2025, 2:47:56 PM",
    lastLoginTime: "223.185.131.101",
    firstLevelAgent: "obito",
    secondaryAgent: "7013588895",
    account: "EVP_lgrq",
    username: "Obito",
    grade: "VIP0",
    currentOrder: 0,
    totalOrdersPlaced: 0,
    balance: "Account balance: 11500\nInvestment balance: 0",
    commission: 0,
    cumulativeRecharge: 0,
    cumulativeWithdrawal: 0,
    frozenAmount: 0,
    advancedUser: "NMOLTV",
    invitationCode: "NMOLTV",
    online: "Offline",
    state: "real people",
    operations: [
      "inject",
      "activation",
      "Reset the task load for the day",
      "Consecutive Order Settings",
      "grade",
      "Balance",
      "Investment balance",
      "edit",
      "Bank card information",
    ],
  },
  {
    uid: "17602547",
    registrationTime: "August 11, 2025, 2:47:04 PM",
    lastLoginTime: "118.179.0.253",
    firstLevelAgent: "kumar",
    secondaryAgent: "8792319331",
    account: "HU_51dn",
    username: "Kumar",
    grade: "VIP0",
    currentOrder: 0,
    totalOrdersPlaced: 0,
    balance: "Account balance: 11500\nInvestment balance: 0",
    commission: 0,
    cumulativeRecharge: 0,
    cumulativeWithdrawal: 0,
    frozenAmount: 0,
    advancedUser: "QMBJTW",
    invitationCode: "QMBJTW",
    online: "Offline",
    state: "real people",
    operations: [
      "inject",
      "activation",
      "Reset the task load for the day",
      "Consecutive Order Settings",
      "grade",
      "Balance",
      "Investment balance",
      "edit",
      "Bank card information",
    ],
  },
  {
    uid: "17602546",
    registrationTime: "August 11, 2025, 2:47:04 PM",
    lastLoginTime: "161.248.50.212",
    firstLevelAgent: "bangladesh",
    secondaryAgent: "01712134370",
    account: "QAB_tqw13F",
    username: "Bangladesh",
    grade: "VIP0",
    currentOrder: 0,
    totalOrdersPlaced: 0,
    balance: "Account balance: 11500\nInvestment balance: 0",
    commission: 0,
    cumulativeRecharge: 0,
    cumulativeWithdrawal: 0,
    frozenAmount: 0,
    advancedUser: "4YMZN2",
    invitationCode: "4YMZN2",
    online: "Offline",
    state: "real people",
    operations: [
      "inject",
      "activation",
      "Reset the task load for the day",
      "Consecutive Order Settings",
      "grade",
      "Balance",
      "Investment balance",
      "edit",
      "Bank card information",
    ],
  },
  {
    uid: "17602545",
    registrationTime: "August 11, 2025, 2:45:54 PM",
    lastLoginTime: "August 11, 2025, 2:45:54 PM",
    firstLevelAgent: "Team3",
    secondaryAgent: "01920997429",
    account: "IEZ_tqpo",
    username: "Team3",
    grade: "VIP0",
    currentOrder: 0,
    totalOrdersPlaced: 0,
    balance: "Account balance: 11500\nInvestment balance: 0",
    commission: 0,
    cumulativeRecharge: 0,
    cumulativeWithdrawal: 0,
    frozenAmount: 0,
    advancedUser: "H5U4WR",
    invitationCode: "H5U4WR",
    online: "Offline",
    state: "real people",
    operations: [
      "inject",
      "activation",
      "Reset the task load for the day",
      "Consecutive Order Settings",
      "grade",
      "Balance",
      "Investment balance",
      "edit",
      "Bank card information",
    ],
  },
  {
    uid: "17602544",
    registrationTime: "August 11, 2025, 2:45:15 PM",
    lastLoginTime: "August 11, 2025, 2:45:15 PM",
    firstLevelAgent: "DU_pz3fd",
    secondaryAgent: "01763694104",
    account: "DU_pz3fd",
    username: "DU_pz3fd",
    grade: "VIP0",
    currentOrder: 0,
    totalOrdersPlaced: 0,
    balance: "Account balance: 11500\nInvestment balance: 0",
    commission: 0,
    cumulativeRecharge: 0,
    cumulativeWithdrawal: 0,
    frozenAmount: 0,
    advancedUser: "DU_pz3fd",
    invitationCode: "DU_pz3fd",
    online: "Offline",
    state: "real people",
    operations: [
      "inject",
      "Disable", // Changed from activation to Disable for variety
      "Reset the task load for the day",
      "Consecutive Order Settings",
      "grade",
      "Balance",
      "Investment balance",
      "edit",
      "Bank card information",
    ],
  },
]

export default function MemberList() {
  const [firstLevelAgent, setFirstLevelAgent] = useState("all")
  const [secondaryAgent, setSecondaryAgent] = useState("all")
  const [level, setLevel] = useState("all")
  const [overlayGroup, setOverlayGroup] = useState("all")
  const [stateFilter, setStateFilter] = useState("all")
  const [onlineStatus, setOnlineStatus] = useState("all")
  const [sortBy, setSortBy] = useState("default")
  const [username, setUsername] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [invitationCode, setInvitationCode] = useState("")
  const [registrationTime, setRegistrationTime] = useState("") // Date range
  const [loginIp, setLoginIp] = useState("")
  const [isAddMemberDialogOpen, setIsAddMemberDialogOpen] = useState(false) // State for dialog

  const getOnlineStatusBadgeClass = (status: string) => {
    return status === "Online" ? "bg-green-500 text-white" : "bg-gray-400 text-white"
  }

  const getStateBadgeClass = (state: string) => {
    return state === "real people" ? "bg-blue-500 text-white" : "bg-red-500 text-white" // Assuming 'real people' is blue, others red
  }

  const getOperationBadgeClass = (operation: string) => {
    switch (operation) {
      case "inject":
        return "bg-green-500 text-white"
      case "activation":
        return "bg-blue-500 text-white"
      case "Disable":
        return "bg-red-500 text-white"
      case "Reset the task load for the day":
        return "bg-orange-500 text-white"
      case "Consecutive Order Settings":
        return "bg-purple-500 text-white"
      case "grade":
        return "bg-yellow-500 text-white"
      case "Balance":
        return "bg-indigo-500 text-white"
      case "Investment balance":
        return "bg-pink-500 text-white"
      case "edit":
        return "bg-teal-500 text-white"
      case "Bank card information":
        return "bg-gray-700 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Breadcrumb */}
      <div className="pt-4 pl-3">
        <DynamicBreadcrumbs/>
      </div>
      

      <Card className="rounded-none">
        <CardHeader className="pb-3 sm:pb-6">
          <div className="mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
            <CardTitle className="text-base sm:text-lg">Member List</CardTitle>
            <div className="flex gap-2">
              <Button
                size="sm"
                className="h-8 sm:h-9 px-3 sm:px-4 text-xs sm:text-sm"
                onClick={() => setIsAddMemberDialogOpen(true)} // Open dialog
              >
                <Plus className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" /> Add Member
              </Button>
              <Button size="sm" variant="outline" className="h-8 sm:h-9 px-3 sm:px-4 text-xs sm:text-sm bg-transparent">
                <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" /> Export
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 mt-4">
            <div className="flex items-center space-x-2">
              <span className="text-xs sm:text-sm whitespace-nowrap">First-level agent</span>
              <Select value={firstLevelAgent} onValueChange={setFirstLevelAgent}>
                <SelectTrigger className="w-full h-8 sm:h-10 text-xs sm:text-sm">
                  <SelectValue placeholder="全部" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全部</SelectItem>
                  <SelectItem value="agent1">Agent 1</SelectItem>
                  <SelectItem value="agent2">Agent 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs sm:text-sm whitespace-nowrap">Secondary Agent</span>
              <Select value={secondaryAgent} onValueChange={setSecondaryAgent}>
                <SelectTrigger className="w-full h-8 sm:h-10 text-xs sm:text-sm">
                  <SelectValue placeholder="全部" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全部</SelectItem>
                  <SelectItem value="subagent1">Sub-Agent 1</SelectItem>
                  <SelectItem value="subagent2">Sub-Agent 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs sm:text-sm whitespace-nowrap">level</span>
              <Select value={level} onValueChange={setLevel}>
                <SelectTrigger className="w-full h-8 sm:h-10 text-xs sm:text-sm">
                  <SelectValue placeholder="全部等级" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全部等级</SelectItem>
                  <SelectItem value="vip0">VIP0</SelectItem>
                  <SelectItem value="vip1">VIP1</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs sm:text-sm whitespace-nowrap">Overlay Group</span>
              <Select value={overlayGroup} onValueChange={setOverlayGroup}>
                <SelectTrigger className="w-full h-8 sm:h-10 text-xs sm:text-sm">
                  <SelectValue placeholder="全部叠加组" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全部叠加组</SelectItem>
                  <SelectItem value="group1">Group 1</SelectItem>
                  <SelectItem value="group2">Group 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs sm:text-sm whitespace-nowrap">State</span>
              <Select value={stateFilter} onValueChange={setStateFilter}>
                <SelectTrigger className="w-full h-8 sm:h-10 text-xs sm:text-sm">
                  <SelectValue placeholder="All states" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All states</SelectItem>
                  <SelectItem value="real-people">real people</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs sm:text-sm whitespace-nowrap">Online status</span>
              <Select value={onlineStatus} onValueChange={setOnlineStatus}>
                <SelectTrigger className="w-full h-8 sm:h-10 text-xs sm:text-sm">
                  <SelectValue placeholder="All states" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All states</SelectItem>
                  <SelectItem value="online">Online</SelectItem>
                  <SelectItem value="offline">Offline</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs sm:text-sm whitespace-nowrap">Sort by</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full h-8 sm:h-10 text-xs sm:text-sm">
                  <SelectValue placeholder="Default sort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default sort</SelectItem>
                  <SelectItem value="time">Registration time</SelectItem>
                  <SelectItem value="balance">Balance</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Input
              placeholder="Please enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full h-8 sm:h-10 text-xs sm:text-sm"
            />
            <Input
              placeholder="Please enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full h-8 sm:h-10 text-xs sm:text-sm"
            />
            <Input
              placeholder="Please enter your invitation code"
              value={invitationCode}
              onChange={(e) => setInvitationCode(e.target.value)}
              className="w-full h-8 sm:h-10 text-xs sm:text-sm"
            />
            <Input
              type="date"
              placeholder="Please select the registration time"
              value={registrationTime}
              onChange={(e) => setRegistrationTime(e.target.value)}
              className="w-full h-8 sm:h-10 text-xs sm:text-sm"
            />
            <Input
              placeholder="Please enter the login IP"
              value={loginIp}
              onChange={(e) => setLoginIp(e.target.value)}
              className="w-full h-8 sm:h-10 text-xs sm:text-sm"
            />
            <Button size="sm" className="h-8 sm:h-10 px-2 sm:px-3 w-full sm:w-auto">
              <Search className="h-3 w-3 sm:h-4 sm:w-4 mr-2" /> Search
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0 sm:p-6 sm:pt-0">
          {/* Mobile Card View */}
          <div className="sm:hidden space-y-3 p-3">
            {memberData.map((member, index) => (
              <Card key={index} className="p-3">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm">UID: {member.uid}</span>
                    <div className="flex gap-2">
                      <Badge variant="outline" className={`text-xs ${getOnlineStatusBadgeClass(member.online)}`}>
                        {member.online}
                      </Badge>
                      <Badge variant="outline" className={`text-xs ${getStateBadgeClass(member.state)}`}>
                        {member.state}
                      </Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                    <div>
                      <div>
                        <strong>Reg Time:</strong> {member.registrationTime}
                      </div>
                      <div>
                        <strong>Last Login:</strong> {member.lastLoginTime}
                      </div>
                      <div>
                        <strong>1st Agent:</strong> {member.firstLevelAgent}
                      </div>
                      <div>
                        <strong>2nd Agent:</strong> {member.secondaryAgent}
                      </div>
                      <div>
                        <strong>Account:</strong> {member.account}
                      </div>
                      <div>
                        <strong>Username:</strong> {member.username}
                      </div>
                      <div>
                        <strong>Grade:</strong> {member.grade}
                      </div>
                    </div>
                    <div>
                      <div>
                        <strong>Current Order:</strong> {member.currentOrder}
                      </div>
                      <div>
                        <strong>Total Orders:</strong> {member.totalOrdersPlaced}
                      </div>
                      <div>
                        <strong>Balance:</strong> {member.balance.split("\n")[0]}
                      </div>
                      <div>
                        <strong>Inv. Balance:</strong> {member.balance.split("\n")[1]}
                      </div>
                      <div>
                        <strong>Commission:</strong> {member.commission}
                      </div>
                      <div>
                        <strong>Cum. Recharge:</strong> {member.cumulativeRecharge}
                      </div>
                      <div>
                        <strong>Cum. Withdraw:</strong> {member.cumulativeWithdrawal}
                      </div>
                      <div>
                        <strong>Frozen Amt:</strong> {member.frozenAmount}
                      </div>
                      <div>
                        <strong>Adv. User:</strong> {member.advancedUser}
                      </div>
                      <div>
                        <strong>Inv. Code:</strong> {member.invitationCode}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {member.operations.map((op, opIndex) => (
                      <Badge key={opIndex} variant="outline" className={`text-xs ${getOperationBadgeClass(op)}`}>
                        {op}
                      </Badge>
                    ))}
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
                  <TableHead className="text-xs sm:text-sm">UID</TableHead>
                  <TableHead className="text-xs sm:text-sm">Registration time</TableHead>
                  <TableHead className="text-xs sm:text-sm">Last login time</TableHead>
                  <TableHead className="text-xs sm:text-sm">First-level agent</TableHead>
                  <TableHead className="text-xs sm:text-sm">Secondary Agent</TableHead>
                  <TableHead className="text-xs sm:text-sm">Account</TableHead>
                  <TableHead className="text-xs sm:text-sm">username</TableHead>
                  <TableHead className="text-xs sm:text-sm">grade</TableHead>
                  <TableHead className="text-xs sm:text-sm">Current order</TableHead>
                  <TableHead className="text-xs sm:text-sm">Total orders placed on the day</TableHead>
                  <TableHead className="text-xs sm:text-sm">Balance</TableHead>
                  <TableHead className="text-xs sm:text-sm">commission</TableHead>
                  <TableHead className="text-xs sm:text-sm">Cumulative recharge amount</TableHead>
                  <TableHead className="text-xs sm:text-sm">Cumulative withdrawn amount</TableHead>
                  <TableHead className="text-xs sm:text-sm">Frozen amount</TableHead>
                  <TableHead className="text-xs sm:text-sm">Advanced User</TableHead>
                  <TableHead className="text-xs sm:text-sm">Invitation Code</TableHead>
                  <TableHead className="text-xs sm:text-sm">Online</TableHead>
                  <TableHead className="text-xs sm:text-sm">state</TableHead>
                  <TableHead className="text-xs sm:text-sm">operate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {memberData.map((member, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-xs sm:text-sm">{member.uid}</TableCell>
                    <TableCell className="text-xs sm:text-sm">{member.registrationTime}</TableCell>
                    <TableCell className="text-xs sm:text-sm">{member.lastLoginTime}</TableCell>
                    <TableCell className="text-xs sm:text-sm">{member.firstLevelAgent}</TableCell>
                    <TableCell className="text-xs sm:text-sm">{member.secondaryAgent}</TableCell>
                    <TableCell className="text-xs sm:text-sm">{member.account}</TableCell>
                    <TableCell className="text-xs sm:text-sm">{member.username}</TableCell>
                    <TableCell className="text-xs sm:text-sm">{member.grade}</TableCell>
                    <TableCell className="text-xs sm:text-sm">{member.currentOrder}</TableCell>
                    <TableCell className="text-xs sm:text-sm">{member.totalOrdersPlaced}</TableCell>
                    <TableCell className="text-xs sm:text-sm whitespace-pre-line">{member.balance}</TableCell>
                    <TableCell className="text-xs sm:text-sm">{member.commission}</TableCell>
                    <TableCell className="text-xs sm:text-sm">{member.cumulativeRecharge}</TableCell>
                    <TableCell className="text-xs sm:text-sm">{member.cumulativeWithdrawal}</TableCell>
                    <TableCell className="text-xs sm:text-sm">{member.frozenAmount}</TableCell>
                    <TableCell className="text-xs sm:text-sm">{member.advancedUser}</TableCell>
                    <TableCell className="text-xs sm:text-sm">{member.invitationCode}</TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      <Badge variant="outline" className={`text-xs ${getOnlineStatusBadgeClass(member.online)}`}>
                        {member.online}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      <Badge variant="outline" className={`text-xs ${getStateBadgeClass(member.state)}`}>
                        {member.state}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      <div className="flex flex-wrap gap-1">
                        {member.operations.map((op, opIndex) => (
                          <Badge key={opIndex} variant="outline" className={`text-xs ${getOperationBadgeClass(op)}`}>
                            {op}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row gap-4 p-4 border-t">
          <CustomPagination totalPages={5} currentPage={1} onPageChange={(page) => console.log("Page changed to:", page)} />
          </div>
        </CardContent>
      </Card>

      <AddMemberDialog open={isAddMemberDialogOpen} onOpenChange={setIsAddMemberDialogOpen} />
    </div>
  )
}
