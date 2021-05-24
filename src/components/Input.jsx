import React, {useState} from 'react';
import Button from './Button';
import "./../assets/css/style.css";

const Input = (props) => {
    const [value, setValue] = useState(props.value);

    const setStorageCount = () => {
        localStorage.setItem('storageCount', value);
    }

    return (
        <div className="input_wrapper">
            <input className="input" type="number" value={value} onChange={(e) => setValue(e.target.value)}/>
            <Button action={setStorageCount} title={"Применить"} />
        </div>
    )
};

export default Input;