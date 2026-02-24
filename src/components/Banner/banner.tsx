"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { cloneElement, isValidElement, useState } from "react";

import { Polygon } from "./Polygon";
import { Spotlight } from "./Spotlight";
import loaderGif from "@/assets/Bannerloader.gif";
import { polygonData, PolygonItem } from "../icons/hexagonicons";
import { usePolygonStore } from "@/global/usePolygonStore";

import Sidebar from "../sidebar/Sidebar";
import Header from "../common/header";
import BottomNav from "../common/MobileBottomBar";
import ChatBot from "../ChatBox";
import SingleChatPage from "../SIngleChatPage/SingleChatPage";
import DetailsPanel from "../ChatDetailPanel";

// ------------------- Skeleton Component -------------------
const ContentSkeleton = () => (
  <div className="h-[40vh] bg-white rounded-xl flex items-center flex-col justify-center border-2 border-white/10 mt-[1%] animate-pulse">
    <div className="w-16 h-16 rounded-full bg-gray-200 mb-4" />
    <div className="h-6 w-32 bg-gray-200 rounded mb-3" />
    <div className="h-4 w-64 bg-gray-200 rounded" />
  </div>
);

// ------------------- Banner Component -------------------
const Banner = () => {
  const { stage, setStage } = usePolygonStore();
  const [selectedPolygon, setSelectedPolygon] = useState<PolygonItem | null>(null);
  const [openInboxPreview, setOpenInboxPreview] = useState(false);

  // Render polygon icon with custom class
  const renderSelectedIcon = () => {
    if (!selectedPolygon) return null;
    if (isValidElement(selectedPolygon.icon)) {
      return cloneElement(selectedPolygon.icon, {
        className: "text-[#007AEC] size-10 lg:size-[4vw] 2xl:size-16",
      });
    }
    return selectedPolygon.icon;
  };

  // Polygon click handler
  const handlePolygonClick = (polygon: PolygonItem) => {
    if (selectedPolygon?.id === polygon.id) return;
    setSelectedPolygon(polygon);
    setStage("loading");
    setTimeout(() => setStage("loaded"), 5000);
  };

  // Inbox preview open
  const handlePreviewOpen = () => setOpenInboxPreview(true);

  // ------------------- Animation Variants -------------------
  const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const headerVariants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } } };
  const pageOverlay = {
    hidden: { opacity: 0, scale: 0.96, y: 40 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.96, y: 40, transition: { duration: 0.3 } },
  };

  // ------------------- Main JSX -------------------
  return (
    <section
      className={clsx(
        "relative w-full min-h-screen bg-[#05070C] overflow-hidden flex justify-center",
        selectedPolygon ? "items-start" : "items-center"
      )}
    >
      {/* Left Glow */}
      <Image
        src="/Loading Skeleton.png"
        alt=""
        fill={false}
        width={2000}
        height={2000}
        className="fixed inset-0 transform pointer-events-none translate-y-full lg:translate-none"
      />

      {/* Spotlight lights */}
      {stage !== "idle" && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-screen">
          <Spotlight fill="#007AEC" className="absolute" />
          <Spotlight fill="#007AEC" className="absolute rotate-115" />
          <Spotlight fill="#007AEC" className="absolute rotate-310" />
          <Spotlight fill="#007AEC" className="absolute rotate-160" />
        </div>
      )}

      {/* Glass Container */}
      <div className="fixed inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[90%] lg:w-[98%] h-[95svh]  rounded-2xl border-2 border-white/10 bg-white/4 px-6 pt-6 pb-20 backdrop-blur-[30px] sm:rounded-3xl" />
      </div>

      {/* Polygons & Center Content */}
      <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full">
        {/* Desktop Polygons */}
        <div className="hidden lg:block">
          {polygonData.map((item, index) => (
            <Polygon
              key={index}
              className={clsx(
                "lg:absolute cursor-pointer z-10 transition-all duration-500 ease-in-out",
                item.position,
                item.size,
                selectedPolygon?.id === item?.id ? "opacity-0 scale-0 pointer-events-none" : "opacity-100 scale-100"
              )}
              onClick={() => handlePolygonClick(item)}
            >
              {item.icon}
            </Polygon>
          ))}
        </div>{/* Mobile Polygons */}
<div className="grid grid-cols-2 md:grid-cols-6  gap-x-[10rem] lg:gap-x-[1rem] gap-y-[1rem]   z-10 mt-[2rem] mx-auto md:ml-[6rem] md:my-[4rem] md:w-full lg:hidden">
  <AnimatePresence>
    {polygonData
      .slice(0, 5)
      .filter(item => item.id !== selectedPolygon?.id)
      .map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.4 }}
          layout   // 👈 important for smooth reposition
        >
          <Polygon
            onClick={() => handlePolygonClick(item)}
            className={clsx(
              item.size,
              "cursor-pointer transition-all duration-500 ease-in-out"
            )}
          >
            <div className="flex justify-center flex-col items-center">
              {item.icon}
              <div className="border-b-2 mt-2 w-full border-white" />
              <p className="font-bold text-white text-xs">
                {item.label}
              </p>
            </div>
          </Polygon>
        </motion.div>
      ))}
  </AnimatePresence>
</div>
 {/* Center Content */}
        <motion.div key={stage + (selectedPolygon?.id ?? "")} initial="hidden" animate="visible" variants={fadeUp} className="mix-blend-screen lg:transform  text-center w-full">
          {selectedPolygon ? (
            <SelectedPolygonContent selectedPolygon={selectedPolygon} stage={stage} renderIcon={renderSelectedIcon} />
          ) : (
            <IdleCircle />
          )}
        </motion.div>
      </div>

      {/* Footer / Bottom */}
      {stage !== "idle" && <BottomSection selectedPolygon={selectedPolygon} stage={stage} renderIcon={renderSelectedIcon} handlePolygonClick={handlePolygonClick} setOpenInboxPreview={setOpenInboxPreview} handlePreviewOpen={handlePreviewOpen} openInboxPreview={openInboxPreview} pageOverlay={pageOverlay} />}

    </section>
  );
};

// ------------------- Sub Components -------------------

// Idle state circle
const IdleCircle = () => (
  <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className={`size-[16rem] lg:size-[16vw] mx-auto rounded-full flex items-center justify-center relative transform "translate-y-[-50%]" lg:translate-y-[25%]`}>
    <div className="absolute inset-0 rounded-full p-1 slow-spin bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,_hsla(210,100%,70%,0.18)_0%,_hsla(210,100%,49%,0.08)_50%,_hsla(210,100%,45%,0)_80%)] border-4 border-[#007AEC]" />
    <div className="w-full h-full bg-[#05070C]/10 rounded-full flex items-center justify-center">
      <h1 className="text-white text-lg lg:text-xl w-[60%] text-center leading-tight">Select a module to load data</h1>
    </div>
  </motion.div>
);

// Selected Polygon Content
const SelectedPolygonContent = ({ selectedPolygon, stage, renderIcon }: any) => (
  <div className={`relative  mt-[-2rem] lg:mt-[3vw] `}> 
<div
  className={`relative mx-auto flex items-center justify-center   
  size-[12rem] lg:size-[13vw]`}
>    
    {stage === "loading" ? (
      <motion.img
        src={loaderGif.src}
        alt={`Loading ${selectedPolygon.label} data`}
        className="w-full h-full pointer-events-none object-cover rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    ) : (
      <div className="w-full h-full rounded-full flex items-center justify-center relative">
        <div className="absolute inset-0 rounded-full p-1 slow-spin bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,_hsla(210,100%,70%,0.18)_0%,_hsla(210,100%,49%,0.08)_50%,_hsla(210,100%,45%,0)_80%)] border-4 border-[#007AEC]" />
        <div className="w-full h-full bg-[#05070C] rounded-full flex items-center justify-center" />
      </div>
    )}

    {/* ICON CENTER */}
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Polygon
        active={true}
        className="relative size-20 lg:size-[5vw] 2xl:size-20 flex items-center justify-center"
      >
        {selectedPolygon.icon}
      </Polygon>
    </motion.div>

  </div>

    <motion.h1 className="text-white relative z-10 my-[1%]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
      {stage === "idle" ? "Select a module to load data" : stage === "loading" ? `Extracting ${selectedPolygon.label}...` : stage === "loaded" ? (selectedPolygon.label === "Inbox" ? "Inbox data successfully extracted" : `${selectedPolygon.label} data is being prepared`) : ""}
    </motion.h1>

    <motion.p className="roz-text text-white font-light mx-auto text-[1rem] hidden lg:block lg:text-[1vw] 2xl:text-[1.125rem]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
      {stage === "idle"
        ? "Please select a module to load data."
        : stage === "loading"
        ? `Retrieving and processing your ${selectedPolygon.label} data. Please wait...`
        : stage === "loaded"
        ? selectedPolygon.label === "Inbox"
          ? "Inbox data successfully extracted."
          : `Data for ${selectedPolygon.label} is being prepared. We are working on it.`
        : ""}
    </motion.p>
  </div>
);

// Bottom section including inbox/modal
const BottomSection = ({setOpenInboxPreview, selectedPolygon, stage, renderIcon, handlePolygonClick, handlePreviewOpen, openInboxPreview, pageOverlay }: any) => (
  <div className={`absolute w-[90%] h-[40vh] ${selectedPolygon?.id === "inbox" ? "bottom-[10%] lg:bottom-[12%]" : "bottom-12 lg:bottom-[10%]"}  left-0 right-0 z-20 mx-auto`}>
    {/* Header */}
    <motion.div key={stage === "loading" ? selectedPolygon?.id : "static"} variants={pageOverlay} initial={stage === "loading" ? "hidden" : false} animate={stage === "loading" ? "visible" : false} className="mb-[0.5rem] lg:mb-0">
      <Header handlePreview={handlePreviewOpen} selectedPolygon={selectedPolygon?.label} handlePolygonClick={handlePolygonClick} />
    </motion.div>

    {/* Inbox or other polygon content */}
    {selectedPolygon?.id === "inbox" ? (
      <motion.div key="inbox-view" variants={pageOverlay} initial="hidden" animate="visible" className="flex lg:mt-[0.5%] md:gap-x-[0.5rem] lg:gap-x-[0.5%]">
        <Sidebar openSidebar={false} />
        <ChatBot />
        <SingleChatPage />
        <DetailsPanel open={false} />
      </motion.div>
    ) : stage === "loading" ? (
      <ContentSkeleton />
    ) : selectedPolygon ? (
      <div className="h-[40vh] bg-white rounded-xl flex items-center flex-col justify-center border-2 border-white/10 mt-[1%]">
        {renderIcon()}
        <h1 className="text-[#007AEC]">{selectedPolygon.label}</h1>
        <p className="text-[1rem] lg:text-[1vw] 2xl:text-[1.125rem] text-gray-600 mt-[0.5%] opacity-80">
          Click on <span className="text-[#007aec]">Inbox</span> to see the full dashboard demo.
        </p>
      </div>
    ) : null}

    {/* Bottom Nav */}
    <BottomNav  handlePolygonClick={handlePolygonClick} selectedPolygon={selectedPolygon}/>

    {/* Inbox Modal Preview */}
    <AnimatePresence>
      {selectedPolygon?.id === "inbox" && openInboxPreview && (
        <motion.div className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-md flex justify-center items-center" initial="hidden" animate="visible" exit="exit" variants={pageOverlay}>
          <motion.div className="w-[95%] h-[96%] bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <h1 className="font-semibold text-lg text-[#007AEC]">Inbox Dashboard Preview</h1>
              <button onClick={() => setOpenInboxPreview(false)} className="text-gray-500 hover:text-black text-xl">✕</button>
            </div>
            {/* Dashboard Content */}
            <div className="flex h-full p-[0.5%] gap-x-[0.5%]">
              <Sidebar openSidebar={false} />
              <ChatBot />
              <SingleChatPage />
              <DetailsPanel open={false} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default Banner;
