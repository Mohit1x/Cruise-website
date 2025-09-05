"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface MembershipLevelData {
  id: number
  name: string
  membershipFee: string
  commission: string
  subordinateCommission: string
  minimumBalance: string
  number1: number
  number2: number
  minimumWithdraw: string
  maximumWithdraw: string
  invitePermission: string
  status: string
}

interface EditMembershipLevelDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  membershipLevel: MembershipLevelData | null
}

export function EditMembershipLevelDialog({ open, onOpenChange, membershipLevel }: EditMembershipLevelDialogProps) {
  const [levelName, setLevelName] = useState("")
  const [level, setLevel] = useState("") // This seems to be a display field, not editable
  const [upgradePrice, setUpgradePrice] = useState("")
  const [orderRestrictions, setOrderRestrictions] = useState("")
  const [commissionRate, setCommissionRate] = useState("")
  const [subordinateCommissionRatio, setSubordinateCommissionRatio] = useState("")
  const [numberOfWithdrawals, setNumberOfWithdrawals] = useState("")
  const [minimumWithdrawalLimit, setMinimumWithdrawalLimit] = useState("")
  const [maximumWithdrawalLimit, setMaximumWithdrawalLimit] = useState("")
  const [userBalanceLimit, setUserBalanceLimit] = useState("")
  const [automaticUpgradeRequires, setAutomaticUpgradeRequires] = useState("")

  useEffect(() => {
    if (membershipLevel) {
      setLevelName(membershipLevel.name)
      setLevel(membershipLevel.id.toString()) // Assuming ID is the level
      setUpgradePrice(membershipLevel.membershipFee)
      setCommissionRate(membershipLevel.commission)
      setSubordinateCommissionRatio(membershipLevel.subordinateCommission)
      setNumberOfWithdrawals(membershipLevel.number1.toString())
      setMinimumWithdrawalLimit(membershipLevel.minimumWithdraw)
      setMaximumWithdrawalLimit(membershipLevel.maximumWithdraw)
      // Assuming these fields are not directly in membershipLevel, or need default values
      setOrderRestrictions(membershipLevel.number2.toString()) // Using number2 for order restrictions
      setUserBalanceLimit(membershipLevel.minimumBalance) // Using minimumBalance for user balance limit
      setAutomaticUpgradeRequires("0") // Placeholder, as it's not in dummy data
    }
  }, [membershipLevel])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Updating membership level:", {
      id: membershipLevel?.id,
      levelName,
      upgradePrice,
      orderRestrictions,
      commissionRate,
      subordinateCommissionRatio,
      numberOfWithdrawals,
      minimumWithdrawalLimit,
      maximumWithdrawalLimit,
      userBalanceLimit,
      automaticUpgradeRequires,
    })
    onOpenChange(false) // Close dialog on submit
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Membership Level</DialogTitle>
          <DialogDescription>Make changes to the membership level here.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="level-name" className="text-right">
              Level Name
            </Label>
            <Input
              id="level-name"
              value={levelName}
              onChange={(e) => setLevelName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="level" className="text-right">
              Level
            </Label>
            <Input id="level" value={level} className="col-span-3" readOnly disabled />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="upgrade-price" className="text-right">
              Upgrade price
            </Label>
            <Input
              id="upgrade-price"
              value={upgradePrice}
              onChange={(e) => setUpgradePrice(e.target.value)}
              className="col-span-3"
              placeholder="For example 100, if it will not be automatically upgraded"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="order-restrictions" className="text-right">
              Order restrictions
            </Label>
            <Input
              id="order-restrictions"
              value={orderRestrictions}
              onChange={(e) => setOrderRestrictions(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="commission-rate" className="text-right">
              Commission rate
            </Label>
            <Input
              id="commission-rate"
              value={commissionRate}
              onChange={(e) => setCommissionRate(e.target.value)}
              className="col-span-3"
              placeholder="For example 1%, then fill in 0.01, calculation method order amount x commission rate = commission"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="subordinate-commission-ratio" className="text-right">
              Subordinate commission ratio
            </Label>
            <Input
              id="subordinate-commission-ratio"
              value={subordinateCommissionRatio}
              onChange={(e) => setSubordinateCommissionRatio(e.target.value)}
              className="col-span-3"
              placeholder="For example 10% for the first generation/7% for the second generation/3% for the third generation, then fill in 0.1/0.07/0.03; calculation method: single commission x algebraic ratio"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="number-of-withdrawals" className="text-right">
              Number of withdrawals
            </Label>
            <Input
              id="number-of-withdrawals"
              value={numberOfWithdrawals}
              onChange={(e) => setNumberOfWithdrawals(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="minimum-withdrawal-limit" className="text-right">
              Minimum withdrawal limit
            </Label>
            <Input
              id="minimum-withdrawal-limit"
              value={minimumWithdrawalLimit}
              onChange={(e) => setMinimumWithdrawalLimit(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="maximum-withdrawal-limit" className="text-right">
              Maximum withdrawal limit
            </Label>
            <Input
              id="maximum-withdrawal-limit"
              value={maximumWithdrawalLimit}
              onChange={(e) => setMaximumWithdrawalLimit(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="user-balance-limit" className="text-right">
              User balance limit
            </Label>
            <Input
              id="user-balance-limit"
              value={userBalanceLimit}
              onChange={(e) => setUserBalanceLimit(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="automatic-upgrade-requires" className="text-right">
              Automatic upgrade requires
            </Label>
            <Input
              id="automatic-upgrade-requires"
              value={automaticUpgradeRequires}
              onChange={(e) => setAutomaticUpgradeRequires(e.target.value)}
              className="col-span-3"
              placeholder="Invite several people to automatically upgrade to this level"
            />
          </div>
          <DialogFooter>
            <Button type="submit">submit</Button>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
