import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(prorps){
    const onClickButton = () => {
        prorps.setOpenModal(prevState => !prevState);
    };

    return (
        <button 
        className="CreateTodoButton"
        onClick={onClickButton}
        >
            +
        </button>
    );
}

export { CreateTodoButton };
