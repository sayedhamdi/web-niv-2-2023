export default function Input({textArea,type,value,placeholder}){
    if(textArea){
        return (
        <textarea>
            {value}
        </textarea>)
    }
    return (
        <input type="text"  value={value} placeholder={placeholder}/>
    )
}