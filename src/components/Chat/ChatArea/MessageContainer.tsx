
export default function MessageContainer({
    children,
    left,
}:{
    children:React.ReactNode,
    left:boolean
}){
    if(left)
        return <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2  dark:text-white text-black ">
            {children}
        </div>
    return <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2  dark:bg-white text-black text-sm md:text-md">
        {children}
    </div>
    
}