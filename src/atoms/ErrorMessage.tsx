import { FC, useEffect, useState } from "react";

const ErrorMessage: FC<{ error: string }> = ({ error }) => {
    const [isError, showError] = useState<boolean>(true);
    useEffect(() => {
        let timer = setTimeout(() => showError(!isError), 2000);
        return () => {
            clearTimeout(timer);
        };
    }, [])
    return (
        <>
            {isError && <div className="text-red-600 flex justify-center font-bold">{error}</div>}
        </>
    )
}

export default ErrorMessage