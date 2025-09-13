"use client"
import Loading from "@/components/Loading";
import { UserSession } from "@/lib/types/User";
import { useEffect, useState } from "react";
import { createContext } from "react";

type SessionContextType = {
  session: UserSession | null;
};


export const SessionContext = createContext<SessionContextType | undefined>(undefined);

export default function SessionContextProvider(
    {children}:{children:React.ReactNode}
){

    const [session,setSession] = useState<UserSession>({})
    const [loading,setLoading] = useState<boolean>(true)

    async function getSession() {
        // getSession from server 
        setSession({
            user_type: "guest"
        })
        setLoading(false)
    }

    // async function RemoveSession() {
        
    // }

    useEffect(()=>{
        getSession()
    },[])
    
    if(loading)
        return <Loading></Loading>

    return (
    <SessionContext.Provider value={
            {session}
        }>
            {children}

    </SessionContext.Provider>)

}