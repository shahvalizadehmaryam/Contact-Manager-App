import { Link } from "react-router-dom";
import style from "./header.module.css";
const HeaderComp = () => {
  return (
    <div className={style.header}>
      <h3> Contact Manager</h3>
      <Link to="/add">
        <button>add</button>
      </Link>
    </div>
  );
};

export default HeaderComp;
