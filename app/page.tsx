import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import RandomCatImage from "./components/RandomCatImage";
import Crudpage from "./components/Crudpage";
import NextFastAPI from "./components/NextFastAPI";

export default function Home() {
  return (
    <main>
      <h1>Car webpage FastAPI</h1>
      <Crudpage />
      <Link href="/users">Users</Link>
      <ProductCard />
      <RandomCatImage />
      <NextFastAPI />
    </main>
  );
}
