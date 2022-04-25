import {ChangeEvent, FC} from "react";
import {IFormElement} from "../interfaces/resume";

const InputText  : FC<IFormElement> = ({name, value,placeholder,onChange}:IFormElement) => {
    return (
            <input type="text"
            name={name}
            value={value}
           onChange={(e:ChangeEvent<HTMLInputElement>) => onChange(e.target.value,name)} className="
        block
        w-11/12
        p-3
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-4
        focus:text-gray-700  focus:border-blue-600 focus:outline-none" placeholder={placeholder}/>
     

    )
}
export default InputText