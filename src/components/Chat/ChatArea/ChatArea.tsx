"use client"
import { useEffect, useState } from "react";
import InputPromptArea from "../InputPrompt/InputTextArea";
import { Button } from "@/components/ui/button";
import Convo from "./Convo";
import { Message } from "@/lib/types/User";

const messagesexample = [
    {
    id: "1",
    sender: "user",
    text: "Hey! How are you?",
    timestamp: new Date("2025-09-12T10:00:00"),
  },
  {
    id: "2",
    sender: "me",
    text: "I’m good, just working on the new project. You?",
    timestamp: new Date("2025-09-12T10:01:30"),
  }
]


export default function ChatArea({chatid}:{chatid?:string}){
    const [messages,setMessage] = useState<Message[]>([])
    const [prompt,setPrompt] = useState<string>("")
    const [genrating,setGenrating] = useState<boolean>(false)

    async function genrateResult() {
        const answer:Message = {
            sender:"ai",
            text:"This is here ! "
        }
        await new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("hello")
            },5000)
        })
        setGenrating(false)
        setMessage((prev)=>[...prev,answer])
    }

    async function sendPrompt() {
        if(prompt=="")
            return
        setGenrating(true)
        console.log("Sending Prompt")
        const newMessage =  {
            id: "1",
            sender: "user",
            text: prompt,
            timestamp: new Date("2025-09-12T10:00:00"),
            typeEffect: true
        }

        setMessage((prev)=>[...prev,newMessage])
        genrateResult()
        setPrompt("")
    }

    useEffect(()=>{
        console.log("Fetch messagse from server and update state ! with chatID ",chatid)
        setMessage((prev)=>[...prev,...messagesexample])
    },[chatid])



    return <div className="flex flex-col flex-1 max-w-screen ">
        <div className="flex-1">
            <div>
                <Convo messages={messages} genrating={genrating}></Convo>
            </div>
        </div>
        <div className="px-2">

                <InputPromptArea  disabled={genrating}
                value={prompt} onChange={(e)=>{setPrompt(e.target.value)}}
                sendPrompt={sendPrompt}></InputPromptArea>
                
            <Button className="my-2 " disabled={genrating}> Ask </Button>
        </div>
    </div>
}