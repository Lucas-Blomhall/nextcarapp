"use client";

import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

type Repo = {
  car_name: string;
};

export const getServerSideProps = (async () => {
  // Fetch data from external API
  const res = await fetch("http://0.0.0.0:80/cars");
  const repo: Repo = await res.json();
  // Pass data to the page via props
  return { props: { repo } };
}) satisfies GetServerSideProps<{ repo: Repo }>;

export default function fetchinginnext({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <p>{repo.car_name}</p>
    </main>
  );
}
