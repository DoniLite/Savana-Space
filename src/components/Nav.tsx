'use client'
import Link from "next/link";
import VillaIcon from "@mui/icons-material/Villa";
import HouseIcon from "@mui/icons-material/House";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ApartmentIcon from "@mui/icons-material/Apartment";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PaidIcon from "@mui/icons-material/Paid";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { usePathname } from "next/navigation";


export const TopNavigationBar = () => {
    return (
      <div className="topNav">
        <button className="flex justify-between items-center p-1 rounded text-blue-700 font-bold">
          <VillaIcon />
          Résidences
        </button>
        <button className="flex justify-between items-center p-1 rounded text-blue-700 font-bold">
          <HouseIcon />
          Terrains
        </button>
        <button className="flex justify-between items-center p-1 rounded text-blue-700 font-bold">
          <ApartmentIcon />
          Immeubles
        </button>
        <button className="flex justify-between items-center p-1 rounded text-blue-700 font-bold">
          <DirectionsCarIcon />
          Voitures
        </button>
      </div>
    );
}

export const BottomNavBar = () => {

  const pathName = usePathname()

    return (
      <div className=" w-full fixed bottom-0 bg-white p-3 flex justify-between text-green-600 h-12">
        <Link href={"/"} className={`${pathName === "/" ? "active" : ""}`}>
          <TravelExploreIcon />
        </Link>
        <Link
          href={"/reservation"}
          className={`${pathName === "/reservation" ? "active" : ""}`}
        >
          <CalendarTodayIcon />
        </Link>
        <Link
          href={"/biling"}
          className={`${pathName === "/biling" ? "active" : ""}`}
        >
          <PaidIcon />
        </Link>
        <Link
          href={"/settings"}
          className={`${pathName === "/settings" ? "active" : ""}`}
        >
          <ManageAccountsIcon />
        </Link>
      </div>
    );
}