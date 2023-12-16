import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {

    const inputStyle = 'border border-neutral-200 w-full p-1';
    const labelStyle = 'uppercase font-medium text-stone-400 block text-sm text-left'

    return (
        <div className="inputBox mb-2 ">
            <label className={labelStyle}>{label}</label>
            {textarea ? <textarea ref={ref} className={inputStyle} {...props} /> : <input ref={ref} className={inputStyle} {...props} />}
        </div>
    )
});

export default Input;