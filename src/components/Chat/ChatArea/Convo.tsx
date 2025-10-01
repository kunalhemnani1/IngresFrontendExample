import { Message } from "@/lib/types/User";
import MessageContainer from "./MessageContainer";
import TypingIndicator from "./TypingIndicator";
import { useEffect, useRef } from "react"
export default function Convo(
    {
        messages,
        genrating
    }:{
        messages:Message[]
        genrating:boolean;
    }
){
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, genrating]);
    
    return (
        <div className="flex flex-col px-2 h-full">
            <div className="flex-1 flex flex-col gap-6 overflow-y-auto max-h-[calc(100vh-200px)] scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
                {
                    messages.map((value:Message,index)=>{
                        const left = value.sender !== "user"
                        return <MessageContainer left={left} key={index} graphArray={value.graphArray}> {value.text} </MessageContainer>
                    })
                }
                {
                    genrating && <TypingIndicator />
                }
                <div ref={messagesEndRef} />
            </div>
        </div>
    )
}