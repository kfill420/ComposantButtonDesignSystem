import { ButtonHTMLAttributes, ReactNode } from "react"
import style from "./groupButton.module.scss"
import clsx from "clsx"

interface GroupButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    size: "m" | "s" | "xs",
    variant: "primary" | "secondary" | "destructive",
    leadingIcon?: ReactNode,
    trailingIcon?: ReactNode,
    badge?: string,
    secondButtonIcon: ReactNode,
    disabled?: boolean
}

export default function GroupButton({ children, size, variant, leadingIcon, trailingIcon, badge, secondButtonIcon, disabled, ...props }: GroupButtonProps) {
    return (
        <div className={clsx(
            style.groupButton,
            size && style[size],
            variant && style[variant],
            disabled && style['disabled']
        )}>
            <button className={style['primaryButton']}
            {...props}>
                {leadingIcon && <span className={style['leadingIcon']}>{leadingIcon}</span>}
                <span className={style['text']}>{children}</span>
                {trailingIcon && <span className={style['trailingIcon']}>{trailingIcon}</span>}
                {badge && <span className={style['badge']}>{badge}</span>}
            </button>
            <button className={style['secondaryButton']}>{secondButtonIcon}</button>
        </div>
    )
}