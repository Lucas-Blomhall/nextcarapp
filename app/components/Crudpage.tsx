"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

type ApiCar = {
  id: string;
  car_name: string;
  price: number;
  year: string;
  car_type: string;
  engine_type: string;
};

const Crudpage = () => {
  const [data, setData] = useState<ApiCar[]>([]);
  // const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://0.0.0.0:80/cars")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>Data from FastAPI</h1>
      <div>
        {data.map((car) => (
          <div key={car.id}>
            <div>ID: {car.id}</div>
            <div>Name: {car.car_name}</div>
            <div>Price: {car.price}</div>
            <div>Year: {car.year}</div>
            <div>Type: {car.car_type}</div>
            <div>Engine: {car.engine_type}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crudpage;
