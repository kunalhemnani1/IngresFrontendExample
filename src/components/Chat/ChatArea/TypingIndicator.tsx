import { Bot } from "lucide-react";

export default function TypingIndicator() {
    return (
        <div className="flex items-start gap-3 w-full mb-4 animate-in slide-in-from-left-2 duration-300">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col gap-1 max-w-[75%]">
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-2xl rounded-tl-md px-4 py-3 shadow-sm border border-slate-200/50 dark:border-slate-600/50">
                    <div className="flex items-center gap-1">
                        <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                        <span className="text-slate-500 dark:text-slate-400 text-sm ml-2">AI is thinking...</span>
                    </div>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 ml-1">
                    AI Assistant
                </div>
            </div>
        </div>
    );
}
