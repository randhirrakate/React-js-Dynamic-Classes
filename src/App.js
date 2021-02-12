import React,{useState} from 'react';
import './Randhir.css';

function App()
{
  const [myCondition, changeMyCondition] = useState(false);

  let myDesign = '';

  let style = {
    backgroundColor: 'red',
    color: 'white',
    margin: '50px'
  };

  const showMyDivFunction = () =>
  {
    changeMyCondition(true);
  }

  const hideMyDivFunction = () =>
  {
    changeMyCondition(false);
  }

  const ToggleMyDivFunction = () =>
  {
    let myCondition2 = myCondition;
    changeMyCondition(!myCondition);
  }

  if(myCondition)
  {
    myDesign = (
      <div className="main_div">
      <h1>This is Div</h1>
      </div>
    );

    style.backgroundColor="green";
  }
  else
  {
    style.backgroundColor="red";
  }



  return(
      <div>
      {/* <button className="showButton" onClick={showMyDivFunction}>Show Div</button>

         <button className="hideButton" onClick={hideMyDivFunction}>Hide Div</button> */}

       {/* <button className="hideButton" onClick={ToggleMyDivFunction}>Toggle Div</button> */}

        <button style={style} onClick={ToggleMyDivFunction}>Toggle Div</button>

        {myDesign}

      </div>
  );
}

export default App;