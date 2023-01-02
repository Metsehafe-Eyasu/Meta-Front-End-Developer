import { useRef, useEffect } from "react";

const usePrevious = (val) => {
    const ref = useRef()
    useEffect(()=>{
        ref.current = val
    }, [val])
    return ref.current
}

export default usePrevious