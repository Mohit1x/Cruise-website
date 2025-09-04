"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { EditMembershipLevelDialog } from "@/components/admin/member-management/edit-membership-level-dialog";
import DynamicBreadcrumbs from "@/components/DynamicBreadcurmbs";
import { CustomPagination } from "@/components/CustomPagination";

// Dummy data for membership levels
const membershipData = [
  {
    id: 1,
    name: "VIP0",
    membershipFee: "100.00",
    commission: "0.0078",
    subordinateCommission: "0.16/0.08",
    minimumBalance: "0.00",
    number1: 20,
    number2: 10,
    minimumWithdraw: "500.00",
    maximumWithdraw: "1500000.00",
    invitePermission: "Not allowed",
    status: "active",
  },
  {
    id: 2,
    name: "VIP1",
    membershipFee: "1000.00",
    commission: "0.0090",
    subordinateCommission: "0.16/0.08",
    minimumBalance: "0.00",
    number1: 20,
    number2: 100,
    minimumWithdraw: "500.00",
    maximumWithdraw: "10000000.00",
    invitePermission: "Not allowed",
    status: "active",
  },
  {
    id: 3,
    name: "VIP2",
    membershipFee: "4000.00",
    commission: "0.0100",
    subordinateCommission: "0.16/0.08",
    minimumBalance: "0.00",
    number1: 20,
    number2: 100,
    minimumWithdraw: "500.00",
    maximumWithdraw: "20000000.00",
    invitePermission: "Not allowed",
    status: "active",
  },
  {
    id: 4,
    name: "VIP3",
    membershipFee: "10000.00",
    commission: "0.0120",
    subordinateCommission: "0.16/0.08",
    minimumBalance: "0.00",
    number1: 20,
    number2: 100,
    minimumWithdraw: "500.00",
    maximumWithdraw: "30000000.00",
    invitePermission: "Not allowed",
    status: "active",
  },
  {
    id: 5,
    name: "VIP4",
    membershipFee: "20000.00",
    commission: "0.0130",
    subordinateCommission: "0.16/0.08",
    minimumBalance: "0.00",
    number1: 20,
    number2: 100,
    minimumWithdraw: "500.00",
    maximumWithdraw: "100000000.00",
    invitePermission: "Not allowed",
    status: "active",
  },
  {
    id: 6,
    name: "VIP5",
    membershipFee: "40000.00",
    commission: "0.0140",
    subordinateCommission: "0.16/0.08",
    minimumBalance: "0.00",
    number1: 20,
    number2: 100,
    minimumWithdraw: "500.00",
    maximumWithdraw: "100000000.00",
    invitePermission: "allow",
    status: "active",
  },
  {
    id: 7,
    name: "VIP6",
    membershipFee: "60000.00",
    commission: "0.0180",
    subordinateCommission: "0.18/0.08",
    minimumBalance: "0.00",
    number1: 20,
    number2: 100,
    minimumWithdraw: "500.00",
    maximumWithdraw: "100000000.00",
    invitePermission: "allow",
    status: "active",
  },
  {
    id: 8,
    name: "VIP7",
    membershipFee: "150000.00",
    commission: "0.0200",
    subordinateCommission: "0.16/0.08",
    minimumBalance: "0.00",
    number1: 25,
    number2: 100,
    minimumWithdraw: "500.00",
    maximumWithdraw: "100000000.00",
    invitePermission: "allow",
    status: "active",
  },
];

export default function MembershipLevel() {
  // const [searchTerm, setSearchTerm] = useState("")
  const [pageSize, setPageSize] = useState("20");
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedMembershipLevel, setSelectedMembershipLevel] = useState<
    (typeof membershipData)[0] | null
  >(null);

  const handleEditClick = (member: (typeof membershipData)[0]) => {
    setSelectedMembershipLevel(member);
    setIsEditDialogOpen(true);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Breadcrumb */}
      <div className="pt-4 pl-3">
        <DynamicBreadcrumbs />
      </div>
      <Card className="rounded-none">
        <CardHeader className="pb-3 sm:pb-6">
          <CardTitle className="text-base sm:text-lg">User Level</CardTitle>
        </CardHeader>
        <CardContent className="p-0 sm:p-6 sm:pt-0">
          {/* Mobile Card View */}
          <div className="sm:hidden space-y-3 p-3">
            {membershipData.map((member) => (
              <Card key={member.id} className="p-3">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm">{member.name}</span>
                    <div className="flex space-x-2">
                      <Badge
                        variant={
                          member.invitePermission === "allow"
                            ? "default"
                            : "secondary"
                        }
                        className={
                          member.invitePermission === "allow"
                            ? "bg-blue-500"
                            : "bg-orange-500"
                        }
                      >
                        {member.invitePermission}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-teal-500 text-white border-teal-500"
                        onClick={() => handleEditClick(member)} // Open edit dialog
                      >
                        edit
                      </Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                    <div>
                      <div>
                        <strong>Fee:</strong> {member.membershipFee}
                      </div>
                      <div>
                        <strong>Commission:</strong> {member.commission}
                      </div>
                      <div>
                        <strong>Sub Comm:</strong>{" "}
                        {member.subordinateCommission}
                      </div>
                      <div>
                        <strong>Min Balance:</strong> {member.minimumBalance}
                      </div>
                    </div>
                    <div>
                      <div>
                        <strong>Number:</strong> {member.number1}
                      </div>
                      <div>
                        <strong>Number:</strong> {member.number2}
                      </div>
                      <div>
                        <strong>Min Withdraw:</strong> {member.minimumWithdraw}
                      </div>
                      <div>
                        <strong>Max Withdraw:</strong> {member.maximumWithdraw}
                      </div>
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
                  <TableHead className="text-xs sm:text-sm">name</TableHead>
                  <TableHead className="text-xs sm:text-sm">
                    Membership...
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm">
                    Commission...
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm">
                    Subordinate comm...
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm">
                    Minimum bal...
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm">
                    Number...
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm">
                    Number...
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm">
                    Minimum w...
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm">
                    Maximum m...
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm">
                    Invite perm...
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm">operate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {membershipData.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell className="text-xs sm:text-sm">
                      {member.id}
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm font-medium">
                      {member.name}
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      {member.membershipFee}
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      {member.commission}
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      {member.subordinateCommission}
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      {member.minimumBalance}
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      {member.number1}
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      {member.number2}
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      {member.minimumWithdraw}
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      {member.maximumWithdraw}
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      <Badge
                        variant={
                          member.invitePermission === "allow"
                            ? "default"
                            : "secondary"
                        }
                        className={`text-xs ${
                          member.invitePermission === "allow"
                            ? "bg-blue-500 hover:bg-blue-600"
                            : "bg-orange-500 hover:bg-orange-600 text-white"
                        }`}
                      >
                        {member.invitePermission}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      <Badge
                        variant="outline"
                        className="bg-teal-500 text-white border-teal-500 hover:bg-teal-600 cursor-pointer"
                        onClick={() => handleEditClick(member)} // Open edit dialog
                      >
                        edit
                      </Badge>
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

      <EditMembershipLevelDialog
        open={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        membershipLevel={selectedMembershipLevel}
      />
    </div>
  );
}
