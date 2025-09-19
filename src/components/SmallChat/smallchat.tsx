"use client"

import { Button } from "@/components/ui/button"
import { BotMessageSquare, Send, X } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
// import { Textarea } from "@/components/ui/textarea"
// import { useState } from "react"
// import { cn } from "@/lib/utils"
import ChatArea from "../Chat/ChatArea/ChatArea"

interface Message {
    id: string
    sender: "user" | "ai"
    text: string
    timestamp: Date
}

const initialMessages: Message[] = [
    {
        id: "1",
        sender: "ai",
        text: "Hello! How can I help you today?",
        timestamp: new Date()
    }
]

export default function SmallChat(){



    return (
        <div className="fixed z-50 right-4 bottom-4">
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="size-16 bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg transition-all duration-200 hover:scale-105">
                        <BotMessageSquare className="size-8 text-white" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[400px] sm:w-[540px] p-0">
                        
                        {/* Messages Area */}
                        <ChatArea sm={true}></ChatArea>
                </SheetContent>
            </Sheet>
        </div>
    )
}

