import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo_link}>
        <h1>CrudMongodb</h1>
      </Link>
      <Link className={styles.add_user_link} to="/add-user">
        Add user
      </Link>
    </nav>
  );
};

export default Header;
