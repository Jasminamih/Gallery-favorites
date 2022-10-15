import React from "react";
import { Props } from "../App";

interface SelectedDetail {
  image: Props;
}

export const Selected = ({ image }: SelectedDetail) => {
  return (
    <div>
      <img className="img" src={image.url} alt="" />
    </div>
  );
};

export default Selected;
