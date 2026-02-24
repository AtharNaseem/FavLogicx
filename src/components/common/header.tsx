import { NavbarData } from "@/data/navbar";
import Image from "next/image";
import Link from "next/link";
import HeaderLinks from "./HeaderLinks";
import { log } from "console";

const Header = ({selectedPolygon,handlePolygonClick,handlePreview}:{selectedPolygon?:string,handlePolygonClick:()=>void}) => {
  const userName = "Box Pad";
  const userInitial = userName.charAt(0).toUpperCase();
  return (
    <nav className="bg-white shadow-sm border-b-2 border-gray-300 lg:border-0 rounded-xl flex justify-between items-center px-4 lg:px-[1%] py-2 lg:py-[0.8%] ">
      <div className="flex items-center gap-4 lg:gap-x-[4%] 2xl:gap-x-[6%] whitespace-nowrap">
        <Link href={"/"} className="lg:w-[18%] 2xl:size-full ">
          <Image src={NavbarData.logo} alt="Logo" width={100} height={100} />
        </Link>

        {/* Desktop Menu */}
        <HeaderLinks  handlePolygonClick={handlePolygonClick} selectedPolygon={selectedPolygon} />
      </div>
      <div className="flex items-center whitespace-nowrap gap-x-1 w-full lg:w-[20%] justify-end">
        <Image
          height={18}
          width={18}
          src={NavbarData.settingsIcon}
          alt="settings icon"
          className="hidden lg:block slow-spin mr-[2%]"
        />

        <p className="w-8 h-8 lg:w-[1.5vw] lg:h-[1.5vw]  2xl:w-6 2xl:h-6 flex items-center justify-center bg-[#FE3265] text-white rounded-full ">
          {userInitial}
        </p>

        {/* Desktop Username */}
        <span className="hidden lg:block font-medium text-gray-800">
          {userName}
        </span>
        {selectedPolygon==="Inbox" && ( 
        <button
  onClick={() => handlePreview()}
  className="ml-4 flex items-center gap-2 px-4 py-2 rounded-lg 
             bg-[#007AEC] text-white text-sm font-semibold
             hover:bg-[#005bb5] transition-all"
>
  Preview <span className=" hidden lg:block">Inbox Dashboard</span> 
</button>
)}
      </div>
    </nav>
  );
};

export default Header;
