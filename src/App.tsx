import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Favorites from "./components/Favorites";
import Header from "./components/header";
import ImageDetail from "./components/ImageDetail";
import { ImageList } from "./components/ImageList";

export interface Props {
  url: string;
  id: string;
  isFavorite: boolean;
}

export type Cards = Array<Props>;

function App() {
  const [images, setImages] = useState<Cards>([]);
  const [favorite, setFavorite] = useState<Props[]>([]);



  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
      });
  }, []);

  const clickImage = (image: Props) => {
    setImages((prevState) => {
      return prevState.map((p) => {
        if (p.id === image.id) {
          return {
            ...p,
            isFavorite: !p.isFavorite,
          };
        }
        return p;
      });
    });
    const findSelectedProd = favorite.find((p) => p.id === image.id);
    if (findSelectedProd) {
      setFavorite((prevState) => {
        return prevState.filter((p) => p.id !== findSelectedProd.id);
      });
    } else {
      setFavorite([...favorite, { ...image, isFavorite: true }]);
    }
  };


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ImageList
              images={images}
              setImages={setImages}
              setFavorite={setFavorite}
              clickImage={clickImage}
            />
          }
        />
        <Route path="/favorites" element={<Favorites favorite={favorite} />} />
        <Route
          path="/imagedetails/:id"
          element={<ImageDetail images={images} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
