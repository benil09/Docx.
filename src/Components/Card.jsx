import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({ data, refrence }) {
  return (
    <motion.div drag dragConstraints={refrence} className='p-10'>
         <div className=' relative w-60 h-72 rounded-[20px] text-white  px-8 py-10 bg-zinc-700 overflow-hidden'>
         <FaRegFileAlt />

         <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
         <div className="data flex items-center  mt-5 justify-between ">
                <h5 >{data.filesize} </h5>

                <div className="cont  p-2 bg-gray-500 rounded-full">
                    { data.close? <IoCloseSharp />: <LuDownload />}
                
                </div>
               

             </div>


             {data.tag.isOpen ? ( <div className="footer absolute bottom-0 bg-green-600 w-full  flex items-center justify-center font-semibold left-0 py-3">
             <h5 className=''>Download Now</h5>
</div>) : null }

           
            

         </div>
      
    </motion.div>
  )
}

export default Card
