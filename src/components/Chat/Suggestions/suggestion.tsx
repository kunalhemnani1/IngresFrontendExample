import { Button } from "@/components/ui/button"

const suggestionsdata = [
    "get ground water data 1",
    "get ground water data 2",
    "get ground water data 3",
    "get ground water data 4",
]

export default function Suggestions({setPrompt}:{setPrompt:(value:string)=>void}){
    return <div className="flex-1  flex gap-2 items-center justify-start px-2 my-3 overflow-hidden">
        {
            suggestionsdata.map((value,index)=>{
                return <Button key={index} variant={"outline"} onClick={()=>{setPrompt(value)}}>
                    {value}
                </Button>
            })
        }
    </div>
}