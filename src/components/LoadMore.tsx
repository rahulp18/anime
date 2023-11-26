"use client";
import { fetchAnime } from '@/app/action';
import Image from 'next/image';
import React,{useState,useEffect} from 'react'
import {useInView} from 'react-intersection-observer'
 

let page=2;
const LoadMore = () => {
    const {ref,inView}=useInView();
    const [data, setData] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(true);  

       useEffect(()=>{
        console.log(inView)
          if(inView){
          setIsLoading(true);
          const delay=500;

          const timeId=setTimeout(()=>{
            fetchAnime(page).then((res)=>{
                setData([...data,...res]);
                page++;
            });
            setIsLoading(false);

          },delay)
          return ()=>clearTimeout(timeId)
          }
       },[inView,isLoading,data])
  return (
    <>
      <section  className="grid  mt-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
          <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          {inView && isLoading && (
            <Image
              src="./spinner.svg"
              alt="spinner"
              width={56}
              height={56}
              className="object-contain"
            />
          )}
        </div>
      </section>

    </>
  ) 
}

export default LoadMore