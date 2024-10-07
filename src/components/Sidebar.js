import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  console.log("isMenuOpen", isMenuOpen);
  // Early Return
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48">
      <div className="border-b-4 shadow-lg">
        <ul>
          <Link to = "/"><li>Home</li></Link>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>
      </div>
      <div className="border-b-4 shadow-lg">
        <h2 className="font-bold">Subscriptions</h2>
        <ul>
          <li>Movies</li>
          <li>Sports</li>
          <li>Devotees</li>
          <li>Gaming</li>
        </ul>
      </div>
      <div className="border-b-4 shadow-lg">
        <h2 className="font-bold">Watch Later</h2>
        <ul>
          <li>Movies</li>
          <li>Sports</li>
          <li>Devotees</li>
          <li>Gaming</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
