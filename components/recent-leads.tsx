"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const leads = [
  {
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    interest: "3 BHK Apartment",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
  },
  {
    name: "Michael Chen",
    email: "m.chen@example.com",
    interest: "Luxury Villa",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
  },
  {
    name: "Emma Davis",
    email: "emma.d@example.com",
    interest: "Commercial Space",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
  },
]

export function RecentLeads() {
  return (
    <div className="space-y-8">
      {leads.map((lead) => (
        <div key={lead.email} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={lead.image} alt={lead.name} />
            <AvatarFallback>{lead.name[0]}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{lead.name}</p>
            <p className="text-sm text-muted-foreground">{lead.email}</p>
          </div>
          <div className="ml-auto font-medium">
            <p className="text-sm text-muted-foreground">{lead.interest}</p>
          </div>
        </div>
      ))}
    </div>
  )
}