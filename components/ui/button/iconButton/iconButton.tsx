import { ButtonHTMLAttributes, ReactNode } from "react"
import style from "./iconButton.module.scss"
import clsx from "clsx"

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "secondary" | "alpha-light" | "alpha-dark",
    icon: ReactNode
}

export default function IconButton({ variant, icon, ...props }: IconButtonProps) {
    return (
        <button className={clsx(
            style.iconButton,
            variant && style[variant]
        )}
        {...props}>{icon}</button>
    )
}