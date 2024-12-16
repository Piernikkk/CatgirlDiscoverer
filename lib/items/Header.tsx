'use client';
import { css } from "@/styled-system/css"
import Text from "../components/text/Text"
import { IconCat } from "@tabler/icons-react";
import { token } from "@/styled-system/tokens";
import Button from "../components/button";


export default function Header({ onButtonClick }: { onButtonClick: () => void }) {

    return (
        <div className={container}>
            <div className={title} >
                <IconCat color={token('colors.text.0')} size={38} />
                <Text size={'title'}>Catgirl discoverer</Text>
            </div>
            <Button onClick={onButtonClick}>Give me another one</Button>
        </div>
    )
}

const container = css({
    display: 'flex',
    // height: '150px',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '40px',
    padding: '30px 40px',
    position: 'relative',
})

const title = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
})