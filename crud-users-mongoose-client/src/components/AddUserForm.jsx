import styles from "./AddUserForm.module.css";

const AddUserForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const email = event.target[1].value;
    const age = event.target[2].value;
    const user = {
      name,
      email,
      age,
    };

    if (!name || !email || !age) {
      return alert("name, email and age can not be empty!");
    }
    console.log(user);

    // fetch("http://localhost:5000/users", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(user),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.insertedId) {
    //       alert("User added successfully!");
    //       event.target.reset();
    //       navigate("/");
    //       // console.log(data);
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
        <input type="submit" value="Submit user" />
      </div>
    </form>
  );
};

export default AddUserForm;
