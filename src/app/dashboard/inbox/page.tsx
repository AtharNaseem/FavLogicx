import ChatBot from '@/components/ChatBox'
import DetailsPanel from '@/components/ChatDetailPanel'
import Sidebar from '@/components/sidebar/Sidebar'
import SingleChatPage from '@/components/SIngleChatPage/SingleChatPage'

const Inbox = () => {
    return (
        <div className=" flex  lg:mt-[0.5%] md:gap-x-[0.5rem] lg:gap-x-[0.5%]">
                 
                <Sidebar openSidebar={false} />
                <ChatBot />
                
  <SingleChatPage />
  <DetailsPanel open={false}  />


        </div>
    )
}

export default Inbox