import { HTMLAttributes, ReactNode } from "react";
import { button } from "./styles";
import { Icon } from "@tabler/icons-react";

type ButtonVariants = Exclude<Parameters<typeof button>[0], undefined>;

interface ButtonProps extends ButtonVariants, HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    fullWidth?: boolean;
    icon?: Icon;
    onlyIcon?: boolean;
    noPadding?: boolean;
}

export default function Button({ children, fullWidth, icon: Icon, theme, small, onlyIcon, noPadding, ...props }: ButtonProps) {
    return (
        <div className={button({ padding: !noPadding, small, theme, width: fullWidth ? 'full' : undefined })} {...props}>
            {Icon && <Icon size={24} />}
            {!onlyIcon && children}
        </div>
    )
}
