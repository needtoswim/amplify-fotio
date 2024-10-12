'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';

import Elephant from '../../../public/assets/Elephant.webp';
import esperanceImg from '../../../public/assets/esperance.webp';
import EsperanceMarina from '../../../public/assets/EsperanceMarina.webp';
import FremantlePier from '../../../public/assets/FremantlePier.webp';
import koalaImg from '../../../public/assets/koala.webp';
import lakebonnyImg from '../../../public/assets/lakebonny.webp';
import lincolnsrockImg from '../../../public/assets/lincolnsrock.webp';
import SandyBeach from '../../../public/assets/SandyBeach.webp';
import TravSunset from '../../../public/assets/TravSunset.webp';
import SunsetWA from '../../../public/assets/SunsetWA.webp';
import mga from '../../../public/assets/mga.webp';



import classes from './image-slideshow.module.css';

const images = [
    { image: Elephant, alt: 'ElephantRocks' },
    { image: esperanceImg, alt: 'Western Australia Southern Coast' },
    { image: EsperanceMarina, alt: 'Esperance Marina' },
    { image: FremantlePier, alt: 'Fremantle Pier' },
    { image: koalaImg, alt: 'Native ' },
    { image: lakebonnyImg, alt: 'South Australian Riverland' },
    { image: lincolnsrockImg, alt: 'Named for Mountianeer' },
    { image: SandyBeach, alt: 'Sandy Beach, Hawaii' },
    { image: TravSunset, alt: 'Sunset, Hawaii' },
    { image: SunsetWA, alt: 'Sunset WA' },
    { image: mga, alt: 'mga' },

];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}