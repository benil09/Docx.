import React from "react";
import Card from "./Card";

import {useRef} from 'react'


function Foreground() {


    const ref = useRef(null);


  const data = [
    {
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo odio aliquid maiores.",
      filesize: "0.5mb",
      close:false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo odio aliquid maiores.",
      filesize: "0.5mb",
      close:true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo odio aliquid maiores.",
      filesize: "0.5mb",
      close:false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <>
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full  flex  flex-wrap ">
         {data.map((item,index)=>(<Card data={item} reference={ref} />))}
      </div>
    </>
  );
}

export default Foreground;
