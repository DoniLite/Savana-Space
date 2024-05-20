import Image from "next/image"
import cardImg from '../assets/img/cover.jpg'
import RoomIcon from "@mui/icons-material/Room";


export const Card = ()=> {
    return (
      <div className="card">
        <Image src={cardImg} alt="" className="w-full object-cover h-40 rounded-t-2xl" />
        <div className="w-full bg-gray-200 rounded-2xl p-3 relative bottom-3">
          <h1 className=" font-bold text-xl">Villa meublée</h1>
          <div className="flex justify-between items-center">
            <div className=" flex">
              <RoomIcon />
              <p>Bobo-Dioulasso</p>
            </div>
            <p>Appartement</p>
          </div>
          <div className="flex justify-between items-center">
            <p>
              120 000 FCFA / <span className=" font-bold">mois</span>
            </p>
            <button className="p-1 text-white bg-green-600 rounded-lg cursor-pointer w-20 font-bold">
              voir
            </button>
          </div>
        </div>
      </div>
    );
}

