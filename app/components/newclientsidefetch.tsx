"use client";

import { useState, useEffect } from "react";

type ApiCar = {
  id: string;
  car_name: string;
  price: number;
  year: string;
  car_type: string;
  engine_type: string;
};

export function newclientsidefetch() {
  const [data, setData] = useState<ApiCar[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://0.0.0.0:80/cars")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data.length) return <p>No profile data</p>;

  return (
    <div>
      {data.map((car) => (
        <div key={car.id}>
          <p>{car.car_name}</p>
          <p>{car.car_type}</p>
        </div>
      ))}
    </div>
  );
}
