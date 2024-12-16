'use client'
import Text from "@/lib/components/text/Text";
import Header from "@/lib/items/Header";
import { css } from "@/styled-system/css";
import Link from "next/link";
import { useEffect, useState } from "react";
import classes from './page.module.css';

type DataType = {
  url: string;
  artist_name: string;
  artist_href: string;
  source_url: string;
}

export default function Home() {

  const [image, setImage] = useState<DataType>();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Refresh();
  }, [])

  async function Refresh() {
    setLoading(true);
    const res = await fetch('https://nekos.best/api/v2/neko')

    const data = await res.json();
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setImage(data.results[0])
  }


  return (
    <>
      <Header onButtonClick={Refresh} />
      <div className={container}>
        <div className={items}>

          <div className={idk}>
            <div className={helper}>
              {image?.url && <><img onLoad={() => setLoading(false)} className={imageBackground} src={image.url}></img>
                <img className={imageFrame} src={image.url}></img></>}
              {loading && <div className={loaderContainer}>
                <div className={classes.loader}></div>
              </div>}


            </div>
            <div className={description}>
              {image?.artist_name && <Text size="mega">Artist: <Link href={image?.artist_href || 'https://www.pixiv.net/en/users/30925042'}>{image?.artist_name || '冰茶'}</Link></Text>}
              {/* <Button onClick={onButtonClick}>Give me another one</Button> */}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}



const idk = css({
  display: 'flex',
  gap: '100px',
  // height: '100%',
})

const loaderContainer = css({
  position: 'absolute',
  zIndex: 100,
  top: '0px',
  bottom: '0px',
  right: '0px',
  left: '0px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#00000030',
})

const description = css({
  gap: '50px',
  alignItems: 'center',
  paddingTop: '50px',
  display: 'flex',
  flexDirection: 'column',
})

const container = css({
  padding: '20px',
  height: '100%',
})

const helper = css({
  position: 'relative',
  // height: '100%',
  minWidth: '100px',

})

const items = css({
  display: 'flex',
  gap: '30px',
  paddingTop: '10px',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
})

const imageFrame = css({
  position: 'absolute',
  top: '0px',
  bottom: '0px',
  right: '0px',
  left: '0px',
  borderRadius: '30px',
  zIndex: 50,
});
const imageBackground = css({

  zIndex: 0,
  filter: 'blur(100px) brightness(0.7)',
  borderRadius: '30px',
  maxHeight: '800px'
});
