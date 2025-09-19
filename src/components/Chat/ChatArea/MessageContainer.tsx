
import { Bot, User } from "lucide-react";

export default function MessageContainer({
    children,
    left,
}:{
    children:React.ReactNode,
    left:boolean
}){
    if(left)
        return (
            <div className="flex items-start gap-3 w-full mb-4 animate-in slide-in-from-left-2 duration-300">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col gap-1 max-w-[75%]">
                    <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-2xl rounded-tl-md px-4 py-3 shadow-sm border border-slate-200/50 dark:border-slate-600/50">
                        <div className="text-slate-800 dark:text-slate-200 text-sm leading-relaxed">
                            {children}
                        </div>
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 ml-1">
                        AI Assistant
                    </div>
                </div>
            </div>
        )
    
    return (
        <div className="flex items-start gap-3 w-full mb-4 justify-end animate-in slide-in-from-right-2 duration-300">
            <div className="flex flex-col gap-1 max-w-[75%] items-end">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl rounded-tr-md px-4 py-3 shadow-lg">
                    <div className="text-white text-sm leading-relaxed">
                        {children}
                    </div>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mr-1">
                    You
                </div>
            </div>
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                <User className="w-4 h-4 text-white" />
            </div>
        </div>
    )
}