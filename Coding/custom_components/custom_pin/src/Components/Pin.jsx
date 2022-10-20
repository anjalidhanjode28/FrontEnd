import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import PinInput from "./PinInput";

const Pin = ({length, maxLength, setPinInput}) => {

    const [inputBoxLength] = useState(new Array(length).fill(""));
    const [singleInputBoxValue] = useState(new Array(length).fill(""));
    const inputRef = useRef([]);

    const onChangeHandler = (e,index) => {
        singleInputBoxValue[index] = e.target.value;
        if(e.target.value.length > 0 && index < length-1){
           inputRef.current[index + 1].focus();
        }
        setPinInput(singleInputBoxValue.join(""));
    }

    const backSpaceHandler = (e,index) => {
        if(index > 0){
         inputRef.current[index - 1].focus()
        }
        singleInputBoxValue[index] = e.target.value;
        setPinInput(singleInputBoxValue.join(""));
     }

     // how to eccess the data that user has copied , or the data that is pasting
     // we need to get only the first character based on the input length
     // map each input box with those individual character

    const handlePaste = (e) => {
        const data = e.clipboardData
        .getData("text")
        .split("")
        .filter((_,index) => index< length);

        data.forEach((character, index) => {
            singleInputBoxValue[index] = character;
            inputRef.current[index].value = character;

            if(index < length-1){
                inputRef.current[index + 1].focus();
            }
        })
    };


    return (
        <div onPaste={handlePastels
        git}>
            {inputBoxLength.map((_, index) => {
                return (
                    <PinInput
                    ref={(inputElem) => {
                    return (inputRef.current[index] = inputElem);
                    }} 
                    key={index} 
                    maxLength={maxLength}
                    onChangeFunc={(e) => onChangeHandler(e,index)}
                    backSpaceFunc={(e) => backSpaceHandler(e,index)}
                    />
                );
            })}
        </div>
    );
}

export default Pin;

Pin.prototype = {
    length: PropTypes.number.isRequired,
    maxLength: PropTypes.number.isRequired,
}
