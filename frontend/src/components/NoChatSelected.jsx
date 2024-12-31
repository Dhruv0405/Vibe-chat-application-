import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <>
      {/* Internal CSS */}
      <style>
        {`
          .gap-from-sidebar {
            margin-left: 16px; /* Adds a 16px gap from the sidebar */
            
          }
        `}
      </style>

      {/* Apply the CSS class */}
      <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50 gap-from-sidebar">
        <div className="max-w-md text-center space-y-6">
          {/* Icon Display */}
          <div className="flex justify-center gap-4 mb-4">
            <div className="relative">
              <div
                className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center
               justify-center animate-bounce"
              >
                <MessageSquare className="w-8 h-8 text-primary " />
              </div>
            </div>
          </div>

          {/* Welcome Text */}
          <h2 className="text-2xl font-bold">Welcome to VIBE!</h2>
          <p className="text-base-content/60">
            Select a conversation from the sidebar to start chatting
          </p>
        </div>
      </div>
    </>
  );
};

export default NoChatSelected;