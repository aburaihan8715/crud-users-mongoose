import UserItem from "./UserItem";

const listStyle = {
  marginTop: "10px",
};

// const getUsers = async () => {
//   try {
//     const res = await fetch("http://localhost:5000/users");
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// console.log(await getUsers());

const UserList = () => {
  // const [deleteLoading, setDeleteLoading] = useState(false);
  // const [deleteError, setDeleteError] = useState(false);

  // useEffect(() => {
  //   fetch("http://localhost:5000/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUsers(data);
  //       setUserLoading(false);
  //     })
  //     .catch((error) => {
  //       setUserError(error.message);
  //       setUserLoading(false);
  //     });
  // }, []);

  // if (userLoading) return <h3 style={{ color: "red", textAlign: "center", marginTop: "20px" }}>loading............</h3>;

  // if (userError) return <h3 style={{ color: "red", textAlign: "center", marginTop: "20px" }}>something wrong......{userError}</h3>;

  return (
    <ul style={listStyle}>
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
    </ul>
  );
};

export default UserList;
