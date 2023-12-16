import style from './inputBox.module.css'
export default function InputBox({ label, textarea, ...props }) {
    return (
        <div className="inputBox mb-2">
            <label className={style.inputLabel}>{label}</label>
            {textarea ? <textarea className={style.inpuText} {...props} /> : <input className={style.inpuText} {...props} />}
        </div>
    )
}