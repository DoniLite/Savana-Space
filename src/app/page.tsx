import "./globals.css";
import { TopNavigationBar } from "@/components/Nav";
import { Card } from "@/components/Cards";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";

export default function Home() {
  return (
    <div className=" w-full">
      <div className="cover">
        <div className=" pl-3 pt-4">
          <h3 className=" font-bold text-yellow-400 text-2xl">Savana-Space </h3>
          <p className=" text-white font-bold">Vitrine de l&apos;immobilier</p>
        </div>
        <div>{/* <Image src="#" alt="image de drapeau" /> */}</div>
      </div>

      <div className="search">
        <SearchIcon />
        <input
          className=" bg-transparent pl-2 outline-none w-5/6"
          type="search"
          name="search"
          id="search"
          placeholder="Que chechez-vous?"
        />
        <div className=" text-white bg-green-600 p-0.5 rounded-lg">
          <TuneIcon />
        </div>
      </div>

      <TopNavigationBar />

      <p className=" font-bold text-xl ml-3 mt-2">Recommandées</p>

      <div className=" mt-4 mb-20 flex overflow-x-scroll justify-between">
        <div className=" w-screen flex-none">
          <Card />
        </div>
        <div className=" w-screen flex-none">
          <Card />
        </div>
        <div className=" w-screen flex-none">
          <Card />
        </div>
        <div className=" w-screen flex-none">
          <Card />
        </div>
      </div>
    </div>
  );
}
