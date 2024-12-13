import { ReactNode } from "react";
import { text } from "./styles";

type TextVariants = Exclude<Parameters<typeof text>[0], undefined>;

interface TextProps extends TextVariants {
    children: ReactNode;
}

export default function Text({ size, weight, color, children }: TextProps) {
    return (
        <div className={text({ size, weight, color })}>{children}</div>
    )
}