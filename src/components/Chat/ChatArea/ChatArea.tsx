"use client"
import { useEffect, useState } from "react";
import InputPromptArea from "../InputPrompt/InputTextArea";
import { Button } from "@/components/ui/button";
import Convo from "./Convo";
import { Message } from "@/lib/types/User";
import { useContext } from "react";
import ThemeContext from "@/app/_Contxets/ThemeProvider";
import { useSearchParams } from "next/navigation";
import { Bot } from "lucide-react";
import { graphPoint,graphData,responsetype } from "@/lib/types/User";

// const url = process.env.API_GATEWAY

const graphEx:graphPoint[] = [
    {
        x:1,
        y1:1,
        y2:3,
    },
    {
        x:2,
        y1:343,
        y2:33,
    },
    {
        x:"2030",
        y1:31,
        y2:35,
    },
    {
        x:5,
        y1:4,
        y2:5,
    }
]

const graphsExample:graphData[] = [
  {
    "xlabel": "District",
    "ylabel": "Average Rainfall Total",
    "graph_type": "bar",
    "graph_data": [
      {
        "x": "indore",
        "y1": 924.2000000000002
      },
      {
        "x": "jabalpur",
        "y1": 1227.3
      },
      {
        x:"rewa",
        "y1":1299.1
      },
      {
        x:"Panma",
        "y1":833.1
      }
    ]
  }
]

const responseExample:responsetype = {
    answer : "Jabalpur has a higher average rainfall than Indore.",
    graphs: graphsExample,
} 

const initalmessage:Message[] = [
    {
    id: "1",
    sender: "ai",
    text: "How can i assist you ? ",
    timestamp:new Date("2025-09-12T10:00:00"),
  },
]

async function fetchData(prompt:string):Promise<responsetype>{
    
    try{
        throw new Error("dj")
        // const newurl = url || ""
        const resp = await fetch("http://13.201.46.102:8000/process-query", {
            method:"post",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(
                {
                    "query": prompt
                }
            )
        })
        
        return await resp.json();
    } catch(err){
        console.log(err)
            return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(responseExample)
            },1500)
        })
    }
}


export default function ChatArea({chatid,sm}:{chatid?:string,sm?:boolean}){
    const thcnxt = useContext(ThemeContext)
    if(!thcnxt)
        throw new Error("Theme context not defined")
    const {theme,setTheme} = thcnxt
    const [messages,setMessage] = useState<Message[]>([...initalmessage])
    const searchParams = useSearchParams()
    const [prompt,setPrompt] = useState<string>(() => {
        const urlPrompt = searchParams.get('prompt');
        return urlPrompt ? decodeURIComponent(urlPrompt) : "";
    })
    const [genrating,setGenrating] = useState<boolean>(false)
    const [hasProcessedUrlPrompt, setHasProcessedUrlPrompt] = useState(false)

    async function genrateResult(currprompt:string) {
        const response:responsetype = await fetchData(currprompt);
        const answer:Message = {
            id : "1",
            sender: "ai",
            text: response.answer || "Sorry, I couldn't process your request.",
            graphArray: response.graphs,
        }
        setGenrating(false)
        setMessage((prev)=>[...prev,answer])
    }

    async function sendPrompt() {
        if(prompt=="")
            return
        setGenrating(true)
        // console.log("Sending Prompt")
        const currprompt = prompt
        const newMessage =  {
            id: "1",
            sender: "user",
            text: prompt,
            timestamp: new Date("2025-09-12T10:00:00"),
            typeEffect: true
        }
        setMessage((prev)=>[...prev,newMessage])
        genrateResult(currprompt)
        setPrompt("")
    }

    useEffect(()=>{
        // console.log("Fetch messagse from server and update state ! with chatID ",chatid)
    },[chatid])

    // Clean up URL parameter after setting initial prompt
    useEffect(() => {
        if (!hasProcessedUrlPrompt && !sm) { // Only process for main chat, not small chat
            const urlPrompt = searchParams.get('prompt');
            if (urlPrompt) {
                setHasProcessedUrlPrompt(true);
                
                // Clean up URL parameter
                const url = new URL(window.location.href);
                url.searchParams.delete('prompt');
                window.history.replaceState({}, '', url.toString());
            }
        }
    }, [searchParams, hasProcessedUrlPrompt, sm]);


    return (
        <div className={`flex ${sm ? "flex-col" : "flex-col md:flex-row "} justify-center min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800`}>
            <div className="flex-1 flex flex-col max-w-4xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl rounded-t-2xl md:rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
                <div className="flex justify-between items-center px-6 py-4 border-b border-slate-200/50 dark:border-slate-700/50 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-t-2xl">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                            <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <h2 className="font-semibold text-slate-800 dark:text-slate-200">JalMitra Assistant</h2>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Groundwater Data Expert</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant={"ghost"} size="sm" className="text-slate-600 dark:text-slate-400"> Login </Button>
                        <Button 
                            variant="outline" 
                            size="sm"
                            onClick={()=>{setTheme((prev:any)=>{
                                return prev=="light" ? "dark" : "light"
                            })}}
                            className="border-slate-300 dark:border-slate-600"
                        > 
                            Switch Theme 
                        </Button>
                    </div>
                </div>
                <div className="flex-1 flex flex-col h-[calc(100vh-160px)]">
                    <div className="flex-1 overflow-hidden">
                        <div className="h-full px-4 py-6">
                            <Convo messages={messages} genrating={genrating}></Convo>
                        </div>
                    </div>
                    <div className="">
                        {/* <Suggestions></Suggestions> */}
                    </div>
                    <div className="px-4 py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-t border-slate-200/50 dark:border-slate-700/50">
                        <InputPromptArea  
                            disabled={genrating}
                            value={prompt} 
                            onChange={(e)=>{setPrompt(e.target.value)}}
                            sendPrompt={sendPrompt}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}