"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Cennik from "./cennik";
import { Key, useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://despensapolaca.eu/wp-json/wp/v2/cenniki";

export default function Home() {
  const [post, setPost] = useState<any>([]);

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

  const listItems = post.map(
    (product: { id: Key | null | undefined; acf: any }) => (
      <li key={product.id}>{<p>{product?.acf.cena_netto_agrosik}</p>}</li>
    )
  );
  if (!post) return null;

  return (
    <main className={styles.main}>
      <Cennik number={post[0]?.acf.cena_netto_agrosik} />
      <ul>{listItems}</ul>
    </main>
  );
}
