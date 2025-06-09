"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Book, Home, User } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  
  const navItems = [
    {
      label: "Home",
      href: "/",
      icon: <Home className="h-4 w-4 mr-2" />,
    },
    {
      label: "Notes",
      href: "/notes",
      icon: <Book className="h-4 w-4 mr-2" />,
    },
    {
      label: "Profile",
      href: "/profile",
      icon: <User className="h-4 w-4 mr-2" />,
    },
  ]
  
  return (
    <nav className="border-b">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <Link href="/" className="text-xl font-bold">
          StudyNotes AI
        </Link>
        
        <div className="flex space-x-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant={pathname === item.href ? "default" : "ghost"}
                className="flex items-center"
              >
                {item.icon}
                {item.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
} 