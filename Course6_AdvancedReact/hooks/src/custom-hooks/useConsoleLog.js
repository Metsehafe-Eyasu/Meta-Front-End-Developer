import { useEffect } from "react";

const useConsoleLog = (varName) => {
    useEffect(() => {
        console.log(varName);
    }, [varName])
}

export default useConsoleLog