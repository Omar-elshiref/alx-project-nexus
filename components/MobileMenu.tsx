"use client"
import { AlignLeft } from "lucide-react"
import SideMenu from "./SideMenu"
import { useState } from "react"

const MobileMenu = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <><button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden hover:text-darkColor hoverEffect">
        <AlignLeft className="hover:text-darkColor hoverEffect md:hidden hover:cursor-pointer md:gap-0"/>
    </button>
    <div className="md:hidden">
        <SideMenu 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        />
    </div>
    </>
  )
}

export default MobileMenu