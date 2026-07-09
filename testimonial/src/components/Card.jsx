import React from 'react'
import { FiCornerRightDown } from "react-icons/fi";
import { FiCornerLeftUp } from "react-icons/fi";


const Card = (props) => {
    let review = props.reviews;
    return(
        <div className='flex flex-col md:relative'>
            <div className='absolute top-[-7rem] z-[10] mx-auto'>
                <img className='aspect-square rounded-full w-[160px] h-[160px] z-[-25]' src={review.image}/>
                <div className='w-[160px] h-[160px] bg-violet-500 rounded-full absolute top-[-6px] z-[-100] left-[10px] '></div>
            </div>

            <div className='text-center mt-7'>
                <p className='tracking-wider font-bold text-2xl capitalize'>{review.name}</p>
                <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
            </div>

            <div className='text-center mt-7'>
            </div>

            <span className='flex gap-1 text-violet-400 mx-auto mt-5'>
                <FiCornerRightDown/><FiCornerRightDown/>
            </span>

            <div className='text-center mt-4 text-slate-500'>
                {review.text}
            </div>

            <div className='flex gap-1 text-violet-400 mx-auto mt-5'>
                <FiCornerLeftUp/>
                <FiCornerLeftUp/>
            </div>

            
        </div>
    )
}

export default Card