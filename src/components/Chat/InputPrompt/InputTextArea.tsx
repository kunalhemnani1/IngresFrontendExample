
import { Textarea } from "@/components/ui/textarea";

export default function InputPromptArea({
    value,
    onChange,
    sendPrompt,
    disabled,
}:{
    value:string;
    onChange:(e:any)=>void;
    sendPrompt:()=>Promise<void>;
    disabled:boolean;
}){
    return (
        <div className="flex-1 ">
            <Textarea placeholder="Ask anything...." className="h-auto resize-none max-h-50 " value={value} onChange={onChange}
            onKeyDownCapture={(e)=>{
                if(e.key=="Enter" && !e.shiftKey){
                    e.preventDefault()
                    sendPrompt()
                }
            }}
            disabled={disabled}
            
            ></Textarea>
        </div>
    )
}