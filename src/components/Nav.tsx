import { Car, Home, Mountain, Warehouse } from "lucide-react"


export const TopNavigationBar = () => {
    return (
        <div className="topNav">
            <a href="#" className="flex justify-between items-center p-1 rounded text-blue-700 font-bold">
                <Home className=" pr-1" />
                Home
            </a>
            <a href="#" className="flex justify-between items-center p-1 rounded text-blue-700 font-bold">
                <Mountain className=" pr-1" />
                Terrains
            </a>
            <a href="#" className="flex justify-between items-center p-1 rounded text-blue-700 font-bold">
                <Warehouse className=" pr-1" />
                Immeubles
            </a>
            <a href="#" className="flex justify-between items-center p-1 rounded text-blue-700 font-bold">
                <Car className=" pr-1" />
                Voitures
            </a>
        </div>
    )
}