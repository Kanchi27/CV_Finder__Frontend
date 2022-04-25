import { FC, useRef } from "react";
import { Search } from "../icons";
import {RETRIEVE_RESUME} from "../constants";

export interface ISearchInput {
    placeholder: string;
    type: string;
    onSubmit: (input: string | number) => void;
}
export const SearchInput: FC<ISearchInput> = ({ placeholder, type, onSubmit }: ISearchInput) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const saveInput = () => {
        const value = inputRef.current?.value;
        value && onSubmit(type === "number" ? parseInt(value) : value);
        setTimeout(() => {
            if(inputRef.current?.value){
                inputRef.current.value = ''
            }
        },1000)
    }
    return (
        <div className="mb-3 xl:w-96 max-w-xs">
            <div className="input-group relative flex items-stretch w-full mb-4">
                <input type={type}
                    ref={inputRef}
                    className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder={placeholder} aria-label="Search" aria-describedby="button-addon2" />
                <button
                    onClick={saveInput}
                    title={RETRIEVE_RESUME}
                    className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                    type="button"   >
                    <Search />
                </button>
            </div>
        </div>
    )
}