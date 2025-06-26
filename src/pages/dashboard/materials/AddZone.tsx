import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const AddZone = ({data, type}:{data?:any, type: 'create'|'edit'}) => {
    const initialValues = {
        name: data?.name || '',
        location: data?.location || '',
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log('Form submitted:')
    }
  return (
    <Dialog>
      <form onSubmit={handleSubmit} className="w-full">
        <DialogTrigger asChild>
          <Button variant={type=== 'create'?"default":"ghost"}>{type=== 'create'?"Add":"Edit"}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{type=== 'create'?"Add":"Edit"} Material</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="material-name">Name</Label>
              <Input id="material-name" name="name" value={initialValues.name} defaultValue="" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="material-location">Location</Label>
              <Input id="material-location" name="location" value={initialValues.location} defaultValue="" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">{type=== 'create'?"Add":"Edit"} Zone</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}

export default AddZone




