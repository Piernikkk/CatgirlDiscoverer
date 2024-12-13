'use client'
import Text from "@/lib/components/text/Text";
import Header from "@/lib/items/Header";
import { css } from "@/styled-system/css";
import Link from "next/link";
import { useState } from "react";

type DataType = {
  url: string;
  artist_name: string;
  artist_href: string;
  source_url: string;
}

export default function Home() {

  const [image, setImage] = useState<DataType>();

  async function onButtonClick() {
    const res = await fetch('https://nekos.best/api/v2/neko')

    const data = await res.json();
    console.log(data);

    setImage(data.results[0])

  }


  return (
    <div className={container}>
      <Header onButtonClick={onButtonClick} />
      <div className={items}>

        <div className={idk}>
          <div className={helper}>
            <img className={imageBackground} src={image?.url || 'https://nekos.best/api/v2/neko/35d87938-a497-4b28-a1c3-c48625a0a365.png'}></img>
            <img className={imageFrame} src={image?.url || 'https://nekos.best/api/v2/neko/35d87938-a497-4b28-a1c3-c48625a0a365.png'}></img>

          </div>
          <div className={description}>
            <Text size="mega">Artist: <Link href={image?.artist_href || 'https://www.pixiv.net/en/users/30925042'}>{image?.artist_name || '冰茶'}</Link></Text>
            {/* <Button onClick={onButtonClick}>Give me another one</Button> */}
          </div>
        </div>

      </div>
    </div>
  );
}

const idk = css({
  display: 'flex',
  gap: '100px'
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
})

const helper = css({
  position: 'relative',
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
  maxHeight: '800px',
  zIndex: 100,
});
const imageBackground = css({

  zIndex: 0,
  filter: 'blur(100px) brightness(0.7)',
  borderRadius: '30px',
  maxHeight: '800px'
});
