import React from 'react'

export const SliderVideo = () => {
  return (
    <div className='relative w-full -[80vw] md:h-[56.25vw] lg:h-[45vw]'>
        <video
            autoPlay
            loop
            muted
            className="brightness-50 object-fill w-full h-[80vw] md:h-[56.25vw] lg:h-[45vw]"
            src='https://cdn.pixabay.com/video/2021/09/18/88922-608445963_large.mp4'
        />
        <div className='flex flex-col justify-end absolute w-full md:w-[36%] px-4 md:px-0 md:left-[4%] 
        z-20 top-0 -bottom-7 md:bottom-[36%]'>
            <div className='pt-24 md:pt-0'>
                <h2 className='text-2xl md:text-5xl lg:text-8xl font-bold drop-shadow-xl'>
                    Clon de Netlix
                </h2>
            </div>
        </div>
    </div>
  )
}
