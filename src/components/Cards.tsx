import { LocateFixed, Star, StarOff } from "lucide-react"
import Image from "next/image"
import cardImg from '../app/assets/fuck.jpeg'


export const Card = ()=> {
    return(
        <div className="card">
            <Image src={cardImg} alt="" className=" object-contain w-full" />
            <div className="w-full bg-gray-200 rounded-t-2xl p-3">
                <h1>Villa meublée</h1>
                <div className="flex justify-between items-center">
                    <div className=" flex">
                        <Star />
                        <Star />
                        <Star className=" bg-yellow-300" />
                        <Star />
                        <Star />
                    </div>
                    <p>150 USDT</p>
                </div>
                <div className="flex justify-between items-center">
                    <p>Disponible:</p>
                    <p className=" flex"><LocateFixed /> Bobo-Dioulasso, Secteur 22 avec voiture</p>
                </div>
            </div>
        </div>
    )
}

