"use client";
import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react";
import {
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar";



const items = [
  {
    title: "Home",
    url: "/",
    icon: HomeIcon
  },
  {
    title: "Subscriptions",
    url: "/feed/subscriptions",
    icon: PlaySquareIcon,
    auth: true
  },
  {
    title: "trending",
    url: "/feed/trending",
    icon: FlameIcon
  }
]
export const MainSection = () => {
  return (
    <SidebarGroup>
      <SidebarContent>
        <SidebarMenu>

        </SidebarMenu>
      </SidebarContent>
    </SidebarGroup>
  )
}
