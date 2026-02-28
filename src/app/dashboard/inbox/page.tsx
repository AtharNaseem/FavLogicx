"use client";

import DashbaordHeader from "@/components/common/DashbaordHeader";
import MobileModuleNavigation from "@/components/common/MobileModuleNavigation";
import DashbaordSidebar from "@/components/DashbaordSidebar/DashbaordSidebar";
import ChatMessages from "@/components/ChatMessages/ChatMessages";
import MessagingWorkspace from "@/components/MessagingWorkspace";
import ConversationInsightPanel from "@/components/ConversationInsightPanel";
import { useWorkspaceStore } from "@/global/usePolygonStore";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

const Inbox = () => {
  const {activeModuleKey, } = useWorkspaceStore();
  const router = useRouter();

  if (!activeModuleKey ) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#05070C] via-[#0A0F1A] to-[#05070C]">
        <div className="w-full max-w-md text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10 shadow-2xl">

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-[#007AEC]/20 p-4 rounded-full">
              <Lock className="w-8 h-8 text-[#007AEC]" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-semibold text-white mb-3">
            Module Access Required
          </h1>

          {/* Description */}
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            Please select a module from the home dashboard before accessing
            the inbox workspace.
          </p>

          {/* Button */}
          <button
            onClick={() => router.push("/")}
            className="w-full bg-[#007AEC] hover:bg-[#0066cc] text-white py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-[#007AEC]/40"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  // ✅ Normal UI if valid
  return (
    <div className="w-[96%] lg:w-full mx-auto lg:px-[1%] lg:pt-[1%]" >
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