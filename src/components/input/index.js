import { useRef, useState, useEffect } from 'react';
import './index.scss';

function Input({ placeholder, getRef, isFilled,  ...rest }){

    let inputRef = useRef(null)
    const [ labelOn, setLabelOn ] = useState(false)
    const labelClass = labelOn ? 'on' : ''


    function keypress(e){

        if(e.target.value){
            if(!labelOn){
                setLabelOn(true)
                isFilled && isFilled(true)
            }
        } else {
            setLabelOn(false)
            isFilled && isFilled(false)
        }

       
    }

    useEffect(()=>{
        getRef && getRef(inputRef)
    })

    return (
        <div className="input-container">
            <label className={labelClass}>{ placeholder }</label>
            <input ref={inputRef} onKeyUp={keypress} {...rest} placeholder={placeholder} />
        </div>
    )
}

export default Input