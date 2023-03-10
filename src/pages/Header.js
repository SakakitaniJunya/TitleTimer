import Head from "next/head";
import Timer from "./Timer";

export default function Header(props) {
  return (
    <>
      <Head>
        <title>時間{props.strSeconds}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Timer />
        <p>{props.strSeconds}</p>
      </main>
    </>
  );
}
