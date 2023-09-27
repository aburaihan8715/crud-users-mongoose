import { FaEdit } from "react-icons/fa";
import styles from "./UserItem.module.css";
import { Link } from "react-router-dom";
import UserDeleteBtn from "./UserDeleteBtn";

const UserItem = () => {
  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <h2>Name: </h2>
        <p>Email: </p>
        <p>Age: </p>
      </div>
      <div className={styles.action}>
        <Link to={`/update-user/123`} className={styles.editBtn}>
          <FaEdit />
        </Link>
        <UserDeleteBtn></UserDeleteBtn>
      </div>
    </li>
  );
};

export default UserItem;
