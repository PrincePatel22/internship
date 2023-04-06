import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Authentication App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h1>Home Page</h1>
          <div>
            <Link
              href="/Register"
              style={{
                textDecoration: "none",
                borderRadius: "5px",
                border: "1px solid black",
                color: "white",
                backgroundColor: "black",
                padding: "10px",
              }}
            >
              Register
            </Link>{" "}
            &nbsp;
            <Link
              href="/Login"
              style={{
                textDecoration: "none",
                borderRadius: "5px",
                border: "1px solid black",
                color: "white",
                backgroundColor: "black",
                padding: "10px",
              }}
            >
              Login
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
