import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu);
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg ">
      <div className="flex col-span-1 ">
        <img
          onClick={()=>toggleMenuHandler()}
          className="h-10 cursor-pointer"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJMAAACgCAMAAAA/1a4kAAAAXVBMVEX///8AAAD19fVDQ0Pv7+8bGxvo6OhJSUn5+fmpqallZWX8/Py6urptbW3l5eWEhITIyMhWVlYiIiJ4eHiysrI5OTnAwMAqKiqLi4vd3d1OTk5fX1+SkpIQEBCZmZkzEtLxAAABdklEQVR4nO3bW5KCMBCFYQTBiCgy6IzoOPtfplyUcPGBF6vPVP3fCk5VqKTTdIIAAAAAAADgn3GhGbd7m+j4V3zFVqIyS2aJknJlLDpNImXWiRp7N1o36zid/SDS4Wyd5mnrM+XWWV7Ohz6TdRSv/84lPvBO6tSWbrWK189MqXWSAeVMimv3bZ3E67fynXUSz2+aMos32DMTwbNF8QyuP/Mf6zy1y6hWCYLKfJO6n+b1b5UXm8jK9Za5WaJWuLby/ooAAAAAfEiYmFm/T3T8Ta8bK0W5nd8Rqpv1XSqe9cdj60i1PByt2906T0u9P36xzvJy7n8EKfbEFHuHMm06+uOL0R9fRLs/LrhnSp4timewZK0iWdMFirVvQ++OAAAAAHyI3GyI3gyN4KyR4EyW4Oya4oyfTKPOz0I66yge/fFl6I8vpNwfV3wjofiWRGfxBvPjmv1x6zCdyfy4dZzGflLWCb4JDBTfTrb1gdwbUwAAAAAAAFkPnMBBuFM9QlgAAAAASUVORK5CYII="
        ></img>
        <a href="/">
        <img
          className="h-12 mx-2 cursor-pointer"
          alt="youtube-logo"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
        ></img>
        </a>
      </div>
      <div className="col-span-10 px-20">
        <input
          type="text"
          placeholder="   Search"
          className="w-1/2 border border-gray-400 py-3 rounded-l-full"
        />
        <button className="border border-gray-400 py-3 px-3 rounded-r-full bg-gray-100">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-10"
          alt="user-logo"
          src="data:image/png;base64,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"
        />
      </div>
    </div>
  );
};

export default Head;
