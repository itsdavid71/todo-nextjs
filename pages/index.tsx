import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ToDo</title>
        <meta name="description" content="ToDo List Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Hello</h1>
        <Link href="/tasks">Перейти к задачам</Link>
      </div>
    </div>
  );
};

export default Home;
