export default function Input({type,handleChange,placeholder,value}){
    return (
        <input  type={type} onChange={handleChange} placeholder={placeholder} value={value} />
    )
}