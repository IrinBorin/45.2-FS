
export default function MyInput({name, type, placeholder, label}){
    return (
    <>
         <label >{label}</label>
         <input name={name} type={type} placeholder={placeholder}/>
    </>
    );
}