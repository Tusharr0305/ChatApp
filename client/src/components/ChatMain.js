import ChatArea from "./ChatArea";
import ChatSidebar from "./ChatSidebar";

function ChatMain() {
  return (
    <main className="columns">
      <ChatSidebar />
      <ChatArea />
      
    </main>
  );
}

export default ChatMain;
