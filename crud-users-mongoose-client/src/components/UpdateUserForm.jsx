import styles from "./UpdateUserForm.module.css";

const UpdateUserForm = () => {
  // load user using id
  // useEffect(() => {
  //   fetch(`http://localhost:5000/users/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUser(data);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // }, [id]);

  // send update user to server using submit handler
  const submitHandler = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const age = form.age.value;
    const updateUser = {
      name,
      email,
      age,
    };

    if (!name || !email || !age) {
      return alert("name, email and age can not be empty!");
    }
    console.log(updateUser);

    // fetch(`http://localhost:5000/users/${id}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(updateUser),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.modifiedCount > 0) {
    //       alert("User updated successfully!");
    //       navigate("/");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      {/* user name */}
      <input type="text" name="name" id="name" placeholder="Enter name" />

      {/* user email */}
      <input type="email" name="email" id="email" placeholder="Enter email" />

      {/* user age */}
      <input type="number" name="age" id="age" placeholder="Enter age" />

      {/* button*/}
      <div className={styles.action_box}>
        <input type="submit" value="Update user" />
      </div>
    </form>
  );
};

export default UpdateUserForm;
