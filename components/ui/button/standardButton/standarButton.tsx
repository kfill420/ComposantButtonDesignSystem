import { ButtonHTMLAttributes, ReactNode } from "react"
import style from "./standarButton.module.scss"
import clsx from "clsx"

interface StandardButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    size: "m" | "s" | "xs",
    variant: "primary" | "secondary" | "ghost" | "destructive",
    leadingIcon?: ReactNode,
    trailingIcon?: ReactNode,
    badge?: string,
}

export default function StandardButton({ children, size, variant, leadingIcon, trailingIcon, badge, ...props }: StandardButtonProps) {
    return (
        <button className={clsx(
            style.standardButton,
            size && style[size],
            variant && style[variant],
        )}
        {...props}>
            {leadingIcon && <span className={style['leadingIcon']}>{leadingIcon}</span>}
            <span className={style['text']}>{children}</span>
            {trailingIcon && <span className={style['trailingIcon']}>{trailingIcon}</span>}
            {badge && <span className={style['badge']}>{badge}</span>}
        </button>
    )
}