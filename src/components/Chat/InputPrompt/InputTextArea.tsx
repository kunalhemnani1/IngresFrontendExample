
import { Textarea } from "@/components/ui/textarea";
import { Send, Loader2 } from "lucide-react";

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
        <div className="flex-1 relative">
            <div className="relative">
                <Textarea 
                    placeholder="Ask anything about groundwater data..." 
                    className="h-auto resize-none max-h-32 min-h-[44px] pr-12 pl-4 py-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-200 shadow-sm focus:shadow-md" 
                    value={value} 
                    onChange={onChange}
                    onKeyDownCapture={(e)=>{
                        if(e.key=="Enter" && !e.shiftKey){
                            e.preventDefault()
                            if(!disabled && value.trim()) {
                                sendPrompt()
                            }
                        }
                    }}
                    disabled={disabled}
                />
                <button
                    onClick={sendPrompt}
                    disabled={disabled || !value.trim()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-slate-300 disabled:to-slate-400 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md disabled:shadow-none"
                >
                    {disabled ? (
                        <Loader2 className="w-4 h-4 text-white animate-spin" />
                    ) : (
                        <Send className="w-4 h-4 text-white" />
                    )}
                </button>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 ml-1">
                Press Enter to send, Shift+Enter for new line
            </div>
        </div>
    )
}