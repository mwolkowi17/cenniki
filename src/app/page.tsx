"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Cennik from "./cennik";
import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://despensapolaca.eu/wp-json/wp/v2/cenniki";

export default function Home() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function getInfo() {
      await axios
        .get(baseURL)
        .then((response) => {
          setPost(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }
    getInfo();
  }, []);
  console.log(post);
  return (
    <main className={styles.main}>
      <Cennik />
    </main>
  );
}
