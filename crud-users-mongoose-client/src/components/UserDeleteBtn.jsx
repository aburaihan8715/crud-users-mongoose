import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const buttonStyle = {
  border: "none",
  background: "none",
  color: "brown",
  fontSize: "2.5rem",
  cursor: "pointer",
};
const UserDeleteBtn = () => {
  const [deleteLoading, setDeleteLoading] = useState(false);

  const userDeleteHandler = () => {
    setDeleteLoading(true);
    // const agree = confirm("Are you sure!");
    // if (agree) {
    //   fetch(`http://localhost:5000/users/${id}`, {
    //     method: "DELETE",
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setDeleteLoading(false);
    //       if (data.deletedCount > 0) {
    //         const afterDeletingUsers = users.filter((user) => user._id !== id);
    //         setUsers(afterDeletingUsers);
    //         alert("Deletion success!");
    //       }
    //     })
    //     .catch((error) => {
    //       console.log(error.message);
    //     });
    // } else {
    //   setDeleteLoading(false);
    // }
  };

  return (
    <button onClick={userDeleteHandler} style={buttonStyle}>
      {deleteLoading && <img src="/spinner.gif" alt="spinner" />}
      {!deleteLoading && <FaTrashAlt></FaTrashAlt>}
    </button>
  );
};

export default UserDeleteBtn;
