import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import RandomCatImage from "./components/RandomCatImage";
import Crudpage from "./components/Crudpage";

export default function Home() {
  return (
    <main>
      <h1>Car webpage FastAPI</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
      <RandomCatImage />
      <Crudpage />
    </main>
  );
}
