import { Avatar, Button, Heading } from "@chakra-ui/react";
import React from "react";
import videoBg from "../assets/videobg.mp4";
import styles from "../css/style.module.css";
import logo from "../assets/logo.png";
import { useDispatch } from "react-redux";
import { deleteApi, fetchApi, getUserApi } from "../redux/action";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const fetchUserFunc = () => {
    dispatch(fetchApi());
  };

  const deleteUserFunc = () => {
    dispatch(deleteApi());
  };

  const userDetailsFunc = () => {
    dispatch(getUserApi());
  };
  return (
    <div className={styles.home}>
      <div className={styles.overlay}></div>
      <video src={videoBg} autoPlay muted loop />
      <div className={styles.content}>
        <div className={styles.heading}>
          <Avatar size={"md"} name="logo" src={logo} />
          <Heading textAlign={"center"} color="whitesmoke">
            Cointab Software Private Limited
          </Heading>
        </div>
        <div className={styles.flexbox}>
          <Button onClick={fetchUserFunc} variant={"solid"} bg="green.400">
            {" "}
            Fetch Users
          </Button>
          <Button
            onClick={deleteUserFunc}
            variant={"ghost"}
            color="red"
            bg="red.200"
          >
            Delete Users
          </Button>
          <Link to="details">
            <Button
              onClick={userDetailsFunc}
              variant={"outline"}
              color="goldenrod"
            >
              User Details
            </Button>
          </Link>
        </div>{" "}
      </div>
    </div>
  );
};

export default Home;
