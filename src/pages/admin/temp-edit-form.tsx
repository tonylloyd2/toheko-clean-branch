// This is the modified edit form section without registration number and group type fields
<div className="grid grid-cols-2 gap-4">
  <FormField
    control={groupForm.control}
    name="groupName"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Group Name</FormLabel>
        <FormControl>
          <Input {...field} placeholder="Enter group name" />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
  <FormField
    control={groupForm.control}
    name="phoneNumber"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Phone Number</FormLabel>
        <FormControl>
          <Input {...field} placeholder="e.g., 0712345678" />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
</div>
<div className="grid grid-cols-2 gap-4">
  <FormField
    control={groupForm.control}
    name="email"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Email Address</FormLabel>
        <FormControl>
          <Input {...field} type="email" placeholder="group@example.com" />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
  <FormField
    control={groupForm.control}
    name="physicalAddress"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Physical Address</FormLabel>
        <FormControl>
          <Input {...field} placeholder="Enter physical address" />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
</div>
