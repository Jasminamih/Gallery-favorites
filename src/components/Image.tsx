import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Cards, Props } from "../App";

interface inf {
  onPress: (image: Props) => void;
  image: Props;
}
const Image = ({ onPress, image }: inf) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <>
      {hover ? (
        // <Link to = {`/imagedetails/${id}`}
        <div onMouseLeave={() => setHover(false)} id={image.id}>
          <div className="Image">
            <img className="img" src={image.url} alt="" />
            <i
              onClick={() => onPress(image)}
              className={
                image.isFavorite
                  ? " i fas fa-heart fa-3x"
                  : " far fa-heart fa-3x"
              }
            ></i>
          </div>
          {/* </Link> */}
        </div>
      ) : (
        <div onMouseEnter={() => setHover(true)} id={image.id}>
          <div className="Image">
            <img className="img" src={image.url} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default Image;
