import React from "react";
import { Cards} from "../App";
import Selected from "./Selected";

interface Fav {
  favorite: Cards;
}

export const Favorites = ({ favorite }: Fav) => {
  return (
    <div>
      {favorite?.map((item, i) => (
        <Selected key={i} image={item} />
      ))}
    </div>
  );
};

export default Favorites;
