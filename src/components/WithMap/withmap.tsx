import ChatArea from "@/components/Chat/ChatArea/ChatArea"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
 

export default function WithMap({children}:{children:React.ReactNode}){
    return (
        <div className="h-screen">
            <ResizablePanelGroup direction="horizontal" className="h-screen">
                <ResizablePanel>
                    <iframe src="https://ingres.iith.ac.in/gecdataonline/gis/" className="w-full h-screen"></iframe>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel>
                    {children}
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
}