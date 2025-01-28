


import './LoginForm.css'; 
import MyInput from '../MyInput/MyInput';
import MyButton from '../MyButton/MyButton';

export default function LoginForm() {
  return (
    <div>
       <form>
      <MyInput name="login" type="text" placeholder="enter your login" label="Login" />
      <MyInput name="email" type="text" placeholder="enter your email" label="Email" />
      <MyInput name="password" type="text" placeholder="enter your password" label="Password" />
      <MyButton type="submit" text="enter"/>
     </form>
    </div>
  )
}
