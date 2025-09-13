import { Message } from "@/lib/types/User";
import MessageContainer from "./MessageContainer";
import ShinyText from "@/components/ShinyText"
export default function Convo(
    {
        messages,
        genrating
    }:{
        messages:Message[]
        genrating:boolean;
    }
){
    
    return (
        <div className="flex flex-col px-2 ">
            <div className="flex-1 overflow-y-auto flex flex-col gap-6 ">

            {
                messages.map((value,index)=>{
                    const left = value.sender !== "user"
                    return <MessageContainer left={left} key={index}> {value.text} </MessageContainer>
                })
            }
            {
                genrating && <ShinyText 
                text="Loading" 
                disabled={false} 
                speed={1.4} 
                className='custom-class' 
                />
            }
            </div>
        </div>
    )
}