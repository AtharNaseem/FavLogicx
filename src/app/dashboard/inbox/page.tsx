"use client";

import DashbaordHeader from "@/components/common/DashbaordHeader";
import MobileModuleNavigation from "@/components/common/MobileModuleNavigation";
import DashbaordSidebar from "@/components/DashbaordSidebar/DashbaordSidebar";
import ChatMessages from "@/components/ChatMessages/ChatMessages";
import MessagingWorkspace from "@/components/MessagingWorkspace";
import ConversationInsightPanel from "@/components/ConversationInsightPanel";
import { useWorkspaceStore } from "@/global/usePolygonStore";
import { useRouter } from "next/navigation";

const Inbox = () => {
  const {activeModuleKey, } = useWorkspaceStore();
  const router = useRouter();

  if (!activeModuleKey ) {
    return (
      <div className=" min-h-[96vh] flex flex-col items-center justify-center bg-[#05070C] text-white text-center px-6">
        <h1 className="text-2xl font-bold mb-4">
          Access Restricted
        </h1>

        <p className="mb-6 text-white/70">
          You must select a module from the home screen before accessing this page.
        </p>

        <button
          onClick={() => router.push("/")}
          className="bg-[#007AEC] px-6 py-2 rounded-lg hover:opacity-80 transition"
        >
          Go to Home
        </button>
      </div>
    );
  }

  // ✅ Normal UI if valid
  return (
    <div className="w-[96%] lg:w-full mx-auto">
      <DashbaordHeader />

      <div className="flex lg:mt-[0.5%] md:gap-x-[0.5rem] lg:gap-x-[0.5%] rounded-xl overflow-hidden">
        <DashbaordSidebar openSidebar={false} />
        <MessagingWorkspace />
        <ChatMessages />
        <ConversationInsightPanel open={false} />
        <MobileModuleNavigation />
      </div>
    </div>
  );
};

export default Inbox;