//import Image from 'next/image'
//import Link from 'next/link';
import './globals.css'
import classes from "./page.module.css"
import Backdrop from './ui/backdrop/Backdrop'
import ImageSlideshow from './ui/slideshow/image-slideshow'
//import { lusitana } from '@/app/ui/fonts';

  
export default function Home() {

  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
      </header>
      <main>
      
        <section className='h-full'>
          <Backdrop/>
          <div
          aria-hidden='true'
          className='fixed inset-0 -z-10 bg-black/70 bg-blend-multiply'
          />
        </section> 
        
     </main> 
    </>
  )
}