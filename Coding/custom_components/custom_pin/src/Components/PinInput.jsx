import React, {forwardRef} from "react";

const PinInput = forwardRef(({maxLength, onChangeFunc, backSpaceFunc}, ref) => {

    const handleKeyUp = (e) => {
        /* if the user has clicked on backspace button then perforn the backspace logic else perform the onchange logic */

        if(e.keycode === 8 && !e.target.value){
            backSpaceFunc(e);
        }else{
            onChangeFunc(e);
        };
    };

    
    return (
        <input
        ref={ref}
        maxLength={maxLength}
        onKeyUp={handleKeyUp}
        />
    );
});

export default PinInput;