import React from 'react'
import noImage from '../assets/Noimage.png'

function NewCard(props) {
  return (
    <div className=' shadow-lg h-[550px] p-[10px] bg-gray-300 rounded-2xl m-[10px] relative hover:scale-105 duration-500'>
        <div>
            <img className='object-fill rounded-2xl mb-[10px]' src={props.imgUrl===null? noImage:props.imgUrl}/>
            <span className='bg-amber-800 text-white p-2 rounded-xl absolute top-[10px] right-[10px]'>{props.source}</span>
        </div>
        <div className='p-[10px] rounded-2xl'>
            <h2 className='text-[22px] font-bold text-black'>{props.title}</h2>
            <p className='text-[15px] text-black'>{props.description}</p>
        </div>
        <div className='mt-[10px] absolute bottom-[20px] right-[10px]'><a href={props.fullNews} target='_blank' 
        className='p-[8px] rounded-xl bg-blue-300'>Read More</a></div>
        <div className='text-[15px] absolute bottom-[20px] left[10px] font-bold'><p>Date: {new Date(props.newsDate).toGMTString()}</p></div>
    </div>
  )
}

export default NewCard
