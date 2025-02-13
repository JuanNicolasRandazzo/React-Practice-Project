import React from 'react'

export const EventsComponent = () => {


    const youHaveClicked = (e, name) =>{

        alert("Hi, I am an onClick Event. " + name);

        }

    const youHaveDoubleClicked = (e) =>{

        alert("Hi, I am a onDoubleClick Event.");

    }

    const youHaveEntered = (e) =>{

        console.log("You have entered to the box using your mouse.")

    }

    const youHaveLeft = () =>{

        console.log("You have left the box using your mouse.")

    }

    const youreIn = () =>{

        console.log("You are inside the imput. Enter your name.")

    }

    const youreOut = () =>{

        console.log("You are outside the imput.")
    }
  return (
    <div>
        <h1>Events on React</h1>

        <p>
            {/*Click Event */}
            <button onClick={e => youHaveClicked(e,"Kaladin")}>Click me!</button>

        </p>

        <p>
            {/*Double Click Event */}
            <button onDoubleClick={youHaveDoubleClicked}> Double Click me!</button>

        </p>

        <div id='box' 
            onMouseEnter={youHaveEntered}
            onMouseLeave={youHaveLeft}
        >
            {/* onMouseEnter onMouseLeave Events */}
            Pass on top
        </div>

        <p>

            {/* onFocus onBlur Events */}
            <input type='text' 
                    onFocus={e => youreIn(e)} 
                    onBlur={e => youreOut(e)}
                    placeholder='Enter your name'/>
        </p>
        
    </div>
  )
}
