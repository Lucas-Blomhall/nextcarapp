"use client";

import React, { useState } from "react";

// type CatApiResponse = { url: string }[];

const RandomCatImage = () => {
  const [catImageUrl, setCatImageUrl] = useState<string>("");

  const fetchPics = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => response.json)
      .then((data: any) => {
        if (data.length) {
          setCatImageUrl(data[0].url);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <button className="btn btn-primary my-4" onClick={fetchPics}>
        Generate
      </button>
      {catImageUrl && (
        <img src={catImageUrl} alt="A random cat" className="showcase" />
      )}
    </div>
  );
};

export default RandomCatImage;
