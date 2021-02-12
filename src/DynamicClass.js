
import React,{useState} from 'react';
import './MyToggle.css';
function DynamicClass()
{
const [myCondition, changeMyCondition] = useState(false);

let myScreen = '';

let myClasses = [];


if(myCondition)
{
    myScreen = (
        <div> 
            <h1>This Is My Div</h1> 
        </div>
    );
    myClasses.push('green');
    myClasses.push('my_align');
}
else
{
    myClasses.push('red');
    myClasses.push('my_align');
}


    const myToggleFunction = () =>
    {
        changeMyCondition(!myCondition);
    }

    return(
        <div>
            <button className={myClasses.join(' ')} onClick={myToggleFunction}>Toggle</button>

            {myScreen}
        </div>
    );
}

export default DynamicClass;