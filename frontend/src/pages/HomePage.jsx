import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div
      className="h-screen bg-base-200"
      style={{
        backgroundImage: "url('https://cdn.pixabay.com/photo/2019/03/11/15/05/landscape-4048720_960_720.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      <div className="flex items-center justify-center pt-20 px-4 ">
        <div className=" rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)] bg-transparent ">
          <div className="flex h-full rounded-lg overflow-hidden ">
            <Sidebar />
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
