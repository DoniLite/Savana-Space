import Link from "next/link";


export const TopNavigationBar = () => {
    return (
      <div className="topNav">
        <button className="flex justify-between items-center p-1 rounded text-blue-700 font-bold">
          <i></i>
          Home
        </button>
        <button className="flex justify-between items-center p-1 rounded text-blue-700 font-bold">
          <i></i>
          Terrains
        </button>
        <button className="flex justify-between items-center p-1 rounded text-blue-700 font-bold">
          <i></i>
          Immeubles
        </button>
        <button className="flex justify-between items-center p-1 rounded text-blue-700 font-bold">
          <i></i>
          Voitures
        </button>
      </div>
    );
}

export const BottomNavBar = () => {
    return (
      <div className=" w-full fixed bottom-0 bg-white p-3 flex justify-between text-green-600 h-12">
        <Link
          href={"/"}
          className=" active:text-white active:bg-green-600 active:p-3 active:absolute active:rounded-t-lg active:h-16"
        >
          <i></i>
        </Link>
        <Link
          href={"/reservation"}
          className=" active:text-white active:bg-green-600 active:p-3 active:absolute active:rounded-t-lg active:h-16"
        >
          <i></i>
        </Link>
        <Link
          href={"/biling"}
          className=" active:text-white active:bg-green-600 active:p-3 active:absolute active:rounded-t-lg active:h-16"
        >
          <i></i>
        </Link>
        <Link
          href={"/settings"}
          className=" active:text-white active:bg-green-600 active:p-3 active:absolute active:rounded-t-lg active:h-16"
        >
          <i></i>
        </Link>
      </div>
    );
}