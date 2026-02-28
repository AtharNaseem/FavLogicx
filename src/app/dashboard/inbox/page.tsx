"use client";

import DashbaordHeader from "@/components/common/DashbaordHeader";
import MobileModuleNavigation from "@/components/common/MobileModuleNavigation";
import DashbaordSidebar from "@/components/DashbaordSidebar/DashbaordSidebar";
import ChatMessages from "@/components/ChatMessages/ChatMessages";
import MessagingWorkspace from "@/components/MessagingWorkspace";
import ConversationInsightPanel from "@/components/ConversationInsightPanel";
import { useWorkspaceStore } from "@/global/usePolygonStore";
import { useRouter } from "next/navigation";
import { ArrowRight, Lock } from "lucide-react";

const Inbox = () => {
  const {activeModuleKey, } = useWorkspaceStore();
  const router = useRouter();

  if (!activeModuleKey ) {
    return (
     <div className="min-h-screen flex items-center justify-center bg-[#05070C] px-6 relative overflow-hidden">

        {/* Ambient Glow */}
        <div className="absolute w-[500px] h-[500px] bg-[#007AEC]/20 blur-[150px] rounded-full top-[-150px] left-[-150px]" />
        <div className="absolute w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full bottom-[-120px] right-[-120px]" />

        <div className="relative z-10 w-full max-w-xl text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-[0_0_60px_rgba(0,0,0,0.6)]">

          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-[#007AEC]/10 border border-[#007AEC]/30 p-6 rounded-2xl">
              <Lock className="w-10 h-10 text-[#007AEC]" />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-3xl font-semibold text-white mb-4 tracking-tight">
            Secure Workspace Locked
          </h1>

          {/* Subheading */}
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            The Inbox workspace is part of an active module environment.  
            To access conversations and insights, please activate a module from your dashboard.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-white/50 mb-10">
            <div className="bg-white/5 border border-white/10 rounded-xl py-4">
              Real-time Messaging
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl py-4">
              Insight Panels
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl py-4">
              Secure Access
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => router.push("/")}
            className="group w-full bg-[#007AEC] hover:bg-[#0066cc] text-white py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-[#007AEC]/50 flex items-center justify-center gap-3"
          >
            Activate Module
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </button>

          {/* Footer note */}
          <p className="text-white/30 text-xs mt-6">
            Module activation ensures controlled access and structured workflows.
          </p>

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