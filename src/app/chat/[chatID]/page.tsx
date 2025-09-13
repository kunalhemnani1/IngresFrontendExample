

import Chat from "../Chat";

export default async function Chats({
  params,
}: {
  params: Promise<{ chatID?: string}>;
}) {
  const { chatID } = await params
  
  return (
    <Chat chatid={chatID}></Chat>
  );
}
