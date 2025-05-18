import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { Sidebar } from "@/components/navigation/sidebar"
import { NoteList } from "@/components/notes/note-list"
import { Editor } from "@/components/editor/editor"

export function DesktopLayout() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={20} minSize={15}>
        <Sidebar />
      </ResizablePanel>

      <ResizableHandle />

      <ResizablePanel defaultSize={30} minSize={20}>
        <NoteList />
      </ResizablePanel>

      <ResizableHandle />

      <ResizablePanel defaultSize={50}>
        <Editor />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

