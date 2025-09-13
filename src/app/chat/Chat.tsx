"use client"

import ChatArea from "@/components/Chat/ChatArea/ChatArea";
import Sidebar from "@/components/Chat/Sidebar/sidebar";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import ThemeContext from "../_Contxets/ThemeProvider";
import { SessionContext } from "../_Contxets/SessionContextProvider";
import { redirect } from "next/navigation";

export default function Chat(
    {chatid}:{chatid?:string}
){
    const sessioncntxt = useContext(SessionContext)
    if(!sessioncntxt)
        throw new Error
    if(sessioncntxt?.session?.user_type!=="user")  
        redirect("/chat")
    const thcnxt = useContext(ThemeContext)
    if(!thcnxt)
        throw new Error("Theme context not defined")
    const {theme,setTheme} = thcnxt
    return <Sidebar ActiveChatID={chatid}>
        <div className="flex justify-center min-h-screen dark:bg-neutral-900 ">
            <div className="flex-1 flex flex-col max-w-4xl pb-6 md:px-2 bg-transparent ">
                <div className=" md:mb-2 md:px-2 md:py-2 flex justify-end">
                    <Button variant={"link"}> Login </Button>
                    <Button onClick={()=>{setTheme((prev:any)=>{
                        return prev=="light" ? "dark" : "light"
                    })}}> Switch </Button>
                </div>
                <ChatArea chatid={chatid}></ChatArea>
            </div>
        </div>

    </Sidebar>
}