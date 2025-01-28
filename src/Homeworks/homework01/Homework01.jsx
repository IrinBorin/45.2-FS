import MyPhoto from "../../assets/profilepicjpg.jpg"
import MyPhoto2 from "../../assets/OBLtW0CBryg.jpg"
import MyPhoto3 from "../../assets/20231001_143653.jpg"
import "./Homework.css"
export default function Homework01(){
    return(
        <div>
          <h1>Hi! My name is Ira.</h1>
          <img width = "200 px"src={MyPhoto} alt="nothing" />
          <p>I'm into travelling</p>
          <img width = "200 px" src={MyPhoto3} alt="nothing" />
          <p>I fancy reading </p>
          <img width = "200 px"src={MyPhoto2} alt="nothing" />
          
        </div>
    )
}