import DashbaordHeader from '@/components/common/DashbaordHeader'
import MobileModuleNavigation from '@/components/common/MobileModuleNavigation'
import DashbaordSidebar from '@/components/DashbaordSidebar/DashbaordSidebar'
import ChatMessages from '@/components/ChatMessages/ChatMessages'
import MessagingWorkspace from '@/components/MessagingWorkspace'
import ConversationInsightPanel from '@/components/ConversationInsightPanel'

const Inbox = () => {
    return (
        <>
         <div className='w-[96%] lg:w-full mx-auto'>
          <DashbaordHeader/>
        <div className=" flex  lg:mt-[0.5%] md:gap-x-[0.5rem] lg:gap-x-[0.5%] rounded-xl overflow-hidden">
                
                <DashbaordSidebar openSidebar={false} />
               <MessagingWorkspace /> 
                 <ChatMessages/>
             <ConversationInsightPanel open={false}  /> 
  <MobileModuleNavigation/>


        </div>
         </div>

        </>
    )
}

export default Inbox