import React, {useState} from 'react'

function ShowHide() {
    const [show, setShow] = useState(false);
    const handleClick = (event) => {
        setShow(!show)
    }
    return (
        <div>
            <button onClick={handleClick}>{ show ? "Hide " : "show "} text</button>
            {show && <h2>HIDE ME!</h2>}
        </div>
    )
}

export default ShowHide;