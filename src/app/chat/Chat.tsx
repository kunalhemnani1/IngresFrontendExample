"use client"

import ChatArea from "@/components/Chat/ChatArea/ChatArea";
import Sidebar from "@/components/Chat/Sidebar/sidebar";


export default function Chat(
    {chatid}:{chatid?:string}
){

    return <Sidebar ActiveChatID={chatid}>
            <ChatArea chatid={chatid} ></ChatArea>
    </Sidebar>
}