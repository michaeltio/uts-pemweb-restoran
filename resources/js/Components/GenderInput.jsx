import { forwardRef, useEffect, useRef, useState } from "react";

export default forwardRef(function GenderInput(
    { className = "", isFocused = false, value, onChange, ...props },
    ref,
) {
    const input = ref ? ref : useRef();
    const [selectedValue, setSelectedValue] = useState(value || ""); // Initialize with the provided value

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    const handleChange = (e) => {
        const selectedOption = e.target.value;
        setSelectedValue(selectedOption);
        onChange(e);
    };

    return (
        <select
            {...props}
            className={
                "border-gray-300 focus-border-indigo-500 focus-ring-indigo-500 rounded-md shadow-sm " +
                className
            }
            ref={input}
            value={selectedValue}
            onChange={handleChange}
        >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
    );
});
