import Image from "next/image"
import cardImg from '../assets/img/cover.jpg'


export const Card = ()=> {
    return(
        <div className="card">
            <Image src={cardImg} alt="" className="w-full object-cover" />
            <div className="w-full bg-gray-200 rounded-t-2xl p-3">
                <h1>Villa meublée</h1>
                <div className="flex justify-between items-center">
                    <div className=" flex">
                    </div>
                    <p>150 USDT</p>
                </div>
                <div className="flex justify-between items-center">
                    <p>Disponible:</p>
                    <p className=" flex"> Bobo-Dioulasso, Secteur 22 avec voiture</p>
                </div>
            </div>
        </div>
    )
}

