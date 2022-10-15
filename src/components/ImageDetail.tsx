import React from "react";
import { useParams } from "react-router-dom";
import { Cards } from "../App";

interface Details {
  images: Cards;
}

const ImageDetail = ({ images }: Details) => {
  const { id } = useParams();

  let image;

  if (id) {
    image = images.find((image) => image.id === id);
  }

  if (!image) {
    return <div></div>;
  }

  const { id: imageId, url } = image;
  return (
    <div>
      <img className="img" src={url} alt="" />
    </div>
  );
};

export default ImageDetail;
