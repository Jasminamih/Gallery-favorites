import React, { useEffect, useState } from "react";
import { Cards, Props } from "../App";
import favourites from "./Favorites";
import Image from "./Image";

interface informations {
  images: Cards;
  setImages: (image: Cards) => void;
  setFavorite: (image: Cards) => void;
  clickImage: (image: Props) => void;
}

export const ImageList = ({
  images,

  clickImage,
}: informations) => {
 

  return (
    <div className="Imagelist">
      {images.map((item, i) => {
        return <Image image={item} onPress={clickImage} key={i} />;
      })}
    </div>
  );
};
