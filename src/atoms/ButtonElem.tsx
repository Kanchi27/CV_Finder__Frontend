import { FC } from "react";
import { IBtnProps } from "../interfaces/resume";

export const ButtonElem: FC<IBtnProps> = ({ label, styles, onClick }: IBtnProps) => {
    const classes = `px-6
          py-2.5
          text-white
          font-medium
          text-xs
          rounded
          shadow-md
          transition
          duration-150
          ease-in-out ${styles}`
    return (
        <button type="button" onClick={onClick} className={classes} data-bs-dismiss="modal">{label}
        </button>
    )
}
export default ButtonElem;