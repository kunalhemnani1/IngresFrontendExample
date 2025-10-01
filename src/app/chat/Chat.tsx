"use client"

import ChatArea from "@/components/Chat/ChatArea/ChatArea";
import Sidebar from "@/components/Chat/Sidebar/sidebar";
import WithMap from "@/components/WithMap/withmap";


export default function Chat(
    {chatid}:{chatid?:string}
){

    return <Sidebar ActiveChatID={chatid}>
        <WithMap>
            <ChatArea chatid={chatid} ></ChatArea>
        </WithMap>
    </Sidebar>
}