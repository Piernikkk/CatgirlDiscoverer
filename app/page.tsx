"use client";
import Text from "@/lib/components/text/Text";
import Header from "@/lib/items/Header";
import { css } from "@/styled-system/css";
import Link from "next/link";
import { useEffect, useState } from "react";
import classes from "./page.module.css";

type DataType = {
  url: string;
  artist_name: string;
  artist_href: string;
  source_url: string;
};

export default function Home() {
  const [image, setImage] = useState<DataType>();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Refresh();
  }, []);

  async function Refresh() {
    setLoading(true);
    const res = await fetch("https://nekos.best/api/v2/neko");

    const data = await res.json();
    console.log(data);

    setImage(data.results[0]);
  }

  return (
    <main className={mainWrapper}>
      <Header onButtonClick={Refresh} />
      <div className={idk}>
        <div className={helper}>
          {image?.url && (
            <>
              <img
                onLoad={() => setLoading(false)}
                className={imageBackground}
                src={image.url}></img>
              <img className={imageFrame} src={image.url}></img>
            </>
          )}
          {loading && (
            <div className={loaderContainer}>
              <div className={classes.loader}></div>
            </div>
          )}
        </div>
        <div className={description}>
          {image?.artist_name && (
            <Text size="mega">
              Artist:{" "}
              <Link
                href={
                  image?.artist_href ||
                  "https://www.pixiv.net/en/users/30925042"
                }>
                {image?.artist_name || "冰茶"}
              </Link>
            </Text>
          )}
        </div>
      </div>
    </main>
  );
}

const mainWrapper = css({
  height: "100dvh",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
});

const idk = css({
  padding: "10px",
  display: "flex",
  flex: 1,
  minHeight: 0,
  minWidth: 0,
  maxHeight: "100%",
  borderRadius: "30px",
  flexDirection: "column-reverse",
  gap: "10px",
  md: {
    gap: "100px",
    padding: "50px",
    flexDirection: "row",
    justifyContent: "center",
    // alignItems: "center",
  },
});

const loaderContainer = css({
  position: "absolute",
  zIndex: 100,
  top: "0px",
  bottom: "0px",
  right: "0px",
  left: "0px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxHeight: "100%",
  overflow: "hidden",
  backgroundColor: "#00000050",
  borderRadius: "30px",
});

const description = css({
  gap: "50px",
  alignItems: "center",
  display: "flex",
  zIndex: 100,
  flexDirection: "column",
  md: {
    paddingTop: "10rem",
  },
});

const helper = css({
  alignSelf: "center",
  position: "relative",
  borderRadius: "30px",
  display: "flex",
  // justifyContent: "center",
  maxHeight: "100%",
  height: "100%",
  minHeight: 0,
  minWidth: 0,
  maxWidth: "fit-content",
});

const imageFrame = css({
  position: "relative",
  borderRadius: "30px",
  height: "100%",
  zIndex: 50,
  maxHeight: "100%",
  maxWidth: "100%",
  objectFit: "cover",
});
const imageBackground = css({
  position: "absolute",
  top: "0px",
  bottom: "0px",
  right: "0px",
  left: "0px",
  zIndex: 10,
  filter: "blur(200px) brightness(0.7)",
  borderRadius: "30px",
  maxHeight: "100%",

  // maxHeight: '800px',

  // height: "85%",
});
