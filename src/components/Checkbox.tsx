import { useState } from "react";

interface Props {
    category: string;
}

export default function Checkbox({ category }: Props) {

    const [isChecked, setIsChecked] = useState(true);
    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    let categoryDiv = document.getElementById(category + "Container") as HTMLDivElement;

    if (categoryDiv) {
        if (!isChecked) {
            categoryDiv.style.display = "none"
        } else {
            categoryDiv.style.display = "block"
        }
    }

    return (
        <>
            <label htmlFor={category}>
                <input type="checkbox"
                    name="filterElements"
                    id={'checkbox_' + category}
                    checked={isChecked}
                    onChange={handleOnChange}
                />
                {category}
            </label>
        </>
    );
}