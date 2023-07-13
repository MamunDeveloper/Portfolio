"use client";
import Image from "next/image";
import React from "react";

function Slider({ list }) {
  return (
    <div>
      {list.map((img) => (
        <Image
          src={img}
          width={120}
          height={100}
          alt="nono"
          key={list.indexOf(img)}
        />
      ))}
    </div>
  );
}

export default Slider;
