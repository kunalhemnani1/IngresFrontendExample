import SessionContextProvider from "./_Contxets/SessionContextProvider";

export default function RootTemplate({
    children
}:{children:React.ReactNode}){

    return <SessionContextProvider>
        {children}
    </SessionContextProvider>
}