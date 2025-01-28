import {fellowship} from './fellowship';
import './lesson05.css'

function Lesson05(){
    console.log(fellowship);
    return (
        <div>
            <h2>React map() components</h2>
            {fellowship.map((hero, index ) => (
                <div className="heroCard" key={index}>
                    <p>Hero:{hero.name}</p>
                    <img height={150} src={hero.image} alt="" />
                    <p>{hero.isDark ? 'Villain' : 'Hero'}</p>
                    <p>{hero.age} years old</p>
                    
                </div>

            ))}
        </div>
    );
}
export default Lesson05;