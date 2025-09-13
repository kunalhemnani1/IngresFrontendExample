"use client";

import * as React from "react";
import {
  Plus,
  MessageSquare,
  User,
  Settings,
  LogOut,
  ChevronDown,
} from "lucide-react";
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { redirect, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SessionContext } from "@/app/_Contxets/SessionContextProvider";
import ThemeContext from "@/app/_Contxets/ThemeProvider";

// Mock data for open chats
const openChats = [
  {
    id: `1`,
    title: "Design Engineering Discussion",
    lastMessage: "Let's review the new UI mockups",
    timestamp: "2 min ago",
  },
  {
    id: `2`,
    title: "Sales & Marketing Strategy",
    lastMessage: "Q4 targets look promising",
    timestamp: "1 hour ago",
  },
  {
    id: `3`,
    title: "Product Roadmap Planning",
    lastMessage: "Feature prioritization meeting",
    timestamp: "3 hours ago",
  },
  {
    id: `4`,
    title: "Technical Architecture Review",
    lastMessage: "Database optimization needed",
    timestamp: "1 day ago",
  },
  {
    id: `5`,
    title: "Team Standup Notes",
    lastMessage: "All tasks on track",
    timestamp: "2 days ago",
  },
];

export default function Sidebar({
  children,
  ActiveChatID,
}: // createChat,
{
  children: React.ReactNode;
  ActiveChatID?: string;
  chats?:Object[]
}) {
  const [chats,sendChats] = React.useState(1)
  const sessioncntxt = React.useContext(SessionContext)
  const thcntxt = React.useContext(ThemeContext)
  const router = useRouter();
  if(!sessioncntxt)
    throw new Error("Sessoin context does not exists")
  if(sessioncntxt?.session?.user_type != "user"){
    return children
  }
  
  if(!thcntxt)
    throw new Error("Theme context does not exists")

  const {theme,setTheme} = thcntxt

  const handleNewChat = () => {
  
    if (ActiveChatID) {
      router.push("/chat")
    } else {
      // don't create a new chat use existing one
    }
  };

  const handleChatSelect = (chatId: string) => {
    router.push(`/chat/${chatId}`);
  };

  return (
    <SidebarProvider className="dark:bg-neutral-900">
      <div className="flex min-h-screen mr-2  ">
        <SidebarComponent>
          {/* Header Section */}
          <SidebarHeader>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Chat</h2>
              <Button onClick={handleNewChat} size="sm" className="h-8 w-8 p-0">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <SidebarSeparator />
          </SidebarHeader>

          {/* Content Section - Chat List */}
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Recent Chats</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {openChats.map((chat) => (
                    <SidebarMenuItem key={chat.id}>
                      <SidebarMenuButton
                        onClick={() => handleChatSelect(chat.id)}
                        isActive={ActiveChatID === chat.id}
                        className="flex flex-col items-start h-auto p-3"
                      >
                        <div className="flex items-center gap-2 w-full">
                          <MessageSquare className="h-4 w-4 flex-shrink-0" />
                          <span className="font-medium text-sm truncate flex-1">
                            {chat.title}
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1 w-full">
                          <div className="truncate">{chat.lastMessage}</div>
                          <div className="text-xs opacity-70">
                            {chat.timestamp}
                          </div>
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          { sessioncntxt.session.user_type === "user" 
            && 
          <SidebarFooter>
            <SidebarSeparator />
            <div className="flex items-center gap-2 p-2">
              <div className="flex items-center gap-2 flex-1">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white text-sm font-medium">
                  S
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="text-sm font-medium truncate">shadcn</span>
                  <span className="text-xs text-muted-foreground truncate">
                    m@example.com
                  </span>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64">
                  <DropdownMenuLabel>Profile</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Account
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Theme</DropdownMenuLabel>
                  <DropdownMenuRadioGroup
                    value={theme}
                    onValueChange={(val) => setTheme(val as "light" | "dark")}
                    >
                    <DropdownMenuRadioItem value={"light"}>
                      Light
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value={"dark"}>
                      Dark
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </SidebarFooter>
      }
        </SidebarComponent>
      </div>
        <SidebarTrigger></SidebarTrigger>

      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
