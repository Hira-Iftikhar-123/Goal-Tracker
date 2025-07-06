import {useRef} from "react";

const GoalInput = ({onAddGoal}) => {
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddGoal(inputRef.current.value);
        inputRef.current.value = "";
        inputRef.current.focus();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" placeholder="Enter your goal"/>
            <button type="submit">Add to List</button>
        </form>
    );
};
export default GoalInput;