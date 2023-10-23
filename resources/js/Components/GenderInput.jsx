import { forwardRef, useEffect, useRef, useState } from 'react';

export default forwardRef(function GenderInput({ className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();
    const [selectedValue, setSelectedValue] = useState('');

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    const handleChange = (e) => {
        const selectedOption = e.target.value;
        if (selectedOption !== '') {
            setSelectedValue(selectedOption);
        }
        props.onChange(e);
    };

    return (
        <select
            {...props}
            className={
                'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
                className
            }
            ref={input}
            value={selectedValue}
            onChange={handleChange}
        >
            <option>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
    );
});