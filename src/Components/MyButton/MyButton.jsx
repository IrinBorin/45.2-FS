import MyInput from "../MyInput/MyInput"

export default function MyButton({type="button", func, text}){
    return (
    <button type={type} onClick={func}>{text}</button>
)
}