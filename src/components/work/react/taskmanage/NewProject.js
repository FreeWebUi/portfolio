import { useRef, useState } from "react";
import Button from "../../../common/ui/button/Button";
import Input from "./Input";

export default function NewProject({ onAdd }) {

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    const [message, setMessage] = useState('')

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDuedate = dueDate.current.value;




        if (
            enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDuedate.trim() === ''
        ) {
            setMessage('Error Message! please enter  correct info')
        } else {
            onAdd({
                title: enteredTitle,
                description: enteredDescription,
                dueDate: enteredDuedate
            })
        }
    }

    return (
        <div className="newProject">

            <div>
                <Input type="text" ref={title} label="Title" />
                <Input ref={description} label="Description" textarea />
                <Input type="date" ref={dueDate} label="Due Date" />
            </div>

            <div>{message}</div>

            <ul className="flex items-center gap-4">
                <li><Button>Cancel</Button></li>
                <li><Button onClick={handleSave}>Save</Button></li>
            </ul>
        </div>
    )
}