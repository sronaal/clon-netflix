import { Button } from '@/components/ui/button'
import { Info, Play } from 'lucide-react'
import React from 'react'

export const SliderVideo = () => {
  return (
    <div className='relative w-full -[80vw] md:h-[56.25vw] lg:h-[40vw]'>
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
                <h2 className='text-2xl md:text-2xl lg:text-4xl font-bold drop-shadow-xl'>
                    Clon de Netlix
                </h2>
                <p className='max-w-md mt-2 text-xs  md:text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nostrum enim minima labore aliquam voluptates doloremque consequatur atque, nobis voluptate? Eaque nisi veniam ea autem minus explicabo eius hic quidem!</p>
                
                <div className='flex flex-col md:flex-row gap-4 mt-4'>
                    <Button size="lg" variant="secondary">
                        <Play className='h-6 w-6 mr-2 fill-black'/>
                        Reproducir
                    </Button>
                    <Button size="lg" variant="secondary" className='bg-gray-600 hover:bg-gray-500/40'>
                        <Info className='h-6 w-6 mr-2'/>
                        Más información
                    </Button>



                </div>
            </div>
        </div>

        <div className='bg-transparent bg-no-repeat bg-contain w-full opacity-100 top-auto h-[] '/>
    </div>
  )
}
