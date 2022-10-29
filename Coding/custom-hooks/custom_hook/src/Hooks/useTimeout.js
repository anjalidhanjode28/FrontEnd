import {useState, useEffect} from "react";

const useTimeout = () => {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
       let timer = setTimeout(() => {
           setShowText(true);
       }, 3000);

       return () =>{
        clearTimeout(timer);
       }
    }, []);

    return showText;
}

export default useTimeout;