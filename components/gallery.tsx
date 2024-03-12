"use client";

import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const slides = {
  jazigos: [
    { src: "/jazigos/jazigos1.jpeg", width: 768, height: 1024 },
    { src: "/jazigos/jazigos2.jpeg", width: 1024, height: 768 },
    { src: "/jazigos/jazigos3.jpeg", width: 768, height: 1024 },
    { src: "/jazigos/jazigos4.jpeg", width: 1024, height: 576 },
    { src: "/jazigos/jazigos5.jpg", width: 636, height: 480 },
    { src: "/jazigos/jazigos6.jpeg", width: 640, height: 480 },
    { src: "/jazigos/jazigos7.jpeg", width: 640, height: 480 },
    { src: "/jazigos/jazigos8.jpeg", width: 768, height: 1024 },
    { src: "/jazigos/jazigos9.jpeg", width: 768, height: 1024 },
    { src: "/jazigos/jazigos10.jpeg", width: 768, height: 1024 },
    { src: "/jazigos/jazigos11.jpeg", width: 768, height: 1024 },
  ],
  residencial: [
    { src: "/residencial/residencial1.jpg", width: 600, height: 400 },
    { src: "/residencial/residencial2.jpg", width: 600, height: 400 },
    { src: "/residencial/residencial3.jpeg", width: 1299, height: 974 },
    { src: "/residencial/residencial4.jpg", width: 600, height: 400 },
    { src: "/residencial/residencial5.jpeg", width: 1300, height: 830 },
    { src: "/residencial/residencial6.jpeg", width: 1300, height: 1137 },
    { src: "/residencial/residencial7.jpg", width: 600, height: 400 },
    { src: "/residencial/residencial8.jpg", width: 600, height: 400 },
    { src: "/residencial/residencial9.jpg", width: 600, height: 400 },
    { src: "/residencial/residencial10.jpg", width: 600, height: 400 },
    { src: "/residencial/residencial11.jpg", width: 600, height: 400 },
    { src: "/residencial/residencial12.jpg", width: 600, height: 400 },
    { src: "/residencial/residencial13.jpeg", width: 1030, height: 946 },
    { src: "/residencial/residencial14.jpeg", width: 1106, height: 1106 },
    { src: "/residencial/residencial15.jpeg", width: 1106, height: 1106 },
    { src: "/residencial/residencial16.jpeg", width: 1024, height: 768 },
    { src: "/residencial/residencial17.jpeg", width: 1024, height: 576 },
    { src: "/residencial/residencial18.jpeg", width: 768, height: 1024 },
    { src: "/residencial/residencial19.jpeg", width: 1024, height: 768 },
    { src: "/residencial/residencial20.jpeg", width: 1024, height: 576 },
    { src: "/residencial/residencial21.jpeg", width: 1024, height: 576 },
    { src: "/residencial/residencial22.jpeg", width: 1024, height: 576 },
    { src: "/residencial/residencial23.jpeg", width: 576, height: 1024 },
    { src: "/residencial/residencial24.jpeg", width: 768, height: 1024 },
    { src: "/residencial/residencial25.jpeg", width: 768, height: 1024 },
    { src: "/residencial/residencial26.jpeg", width: 1024, height: 576 },
    { src: "/residencial/residencial27.jpeg", width: 1024, height: 576 },
    { src: "/residencial/residencial28.jpeg", width: 1024, height: 576 },
    { src: "/residencial/residencial29.jpeg", width: 768, height: 1024 },
    { src: "/residencial/residencial30.jpeg", width: 576, height: 1024 },
    { src: "/residencial/residencial31.jpeg", width: 1024, height: 512 },
    { src: "/residencial/residencial32.jpeg", width: 576, height: 1024 },
  ],
};

const widths = [500, 1000, 1600];
const ratios = [2.2, 4, 6, 8];

interface GalleryComp {
  type: "residencial" | "jazigos";
}

export default function GalleryComp({ type }: GalleryComp) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <PhotoAlbum
        layout="rows"
        photos={slides[type]}
        targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        index={index}
        slides={slides[type]}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
  );
}
