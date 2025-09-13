"use client"
import { SessionContext } from "@/app/_Contxets/SessionContextProvider";
import { redirect } from "next/navigation";
import { use, useContext } from "react";

import Chat from "../Chat";

export default function Chats({
  params,
}: {
  params: Promise<{ chatID?: string}>;
}) {
  const { chatID } = use(params)
    const sessioncntxt = useContext(SessionContext)
  if(!sessioncntxt)
      throw new Error
  if(sessioncntxt?.session?.user_type!=="user")  
      redirect("/chat")
  
  return (
    <Chat chatid={chatID}></Chat>
  );
}
