import { Filter, Search } from "lucide-react";
import "./globals.css";
import { TopNavigationBar } from "@/components/Nav";
import { Card } from "@/components/Cards";

export default function Home() {
  return (
    <div className=" w-full p-3">
      <div className=" mt-4">
        <p className=" text-2xl">
          Hello Martial
        </p>
        <h3 className=" font-bold">Recherchez vos residence</h3>
      </div>

      <div className="search">
        <Search />
        <input className=" bg-transparent pl-2 outline-none w-5/6" type="search" name="search" id="search" />
        <Filter/>
      </div>

      <TopNavigationBar />

      <div className=" mt-4">
        <Card />
      </div>
    </div>
  );
}
