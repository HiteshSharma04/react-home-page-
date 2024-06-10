import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';
import 'C:/Users/hp/Desktop/React_project/hit/src/component/css/new.css';
// import { useEffect } from 'react';
// import { Dropdown } from 'react-bootstrap';
// import 'C:/Users/hp/Desktop/React_project/hit/node_modules/bootstrap/dist/css/bootstrap.min.css';

function Learn(){ 
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);

    const toggleDropdown1 = () => {
        setIsDropdownOpen1(!isDropdownOpen1);
    };
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

    const toggleDropdown2 = () => {
        setIsDropdownOpen2(!isDropdownOpen2);
    };
    const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);

    const toggleDropdown3 = () => {
        setIsDropdownOpen3(!isDropdownOpen3);
    };
    const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);

    const toggleDropdown4 = () => {
        setIsDropdownOpen4(!isDropdownOpen4);
    };
    const [isDropdownOpen5, setIsDropdownOpen5] = useState(false);

    const toggleDropdown5 = () => {
        setIsDropdownOpen5(!isDropdownOpen5);
    };
    return(
        
        <>
        <div className="container" > 
            
            <div className="row">
                <div className="col-3" style={{textAlign:'centre', marginLeft:'-110px'}}> 
                    <h5 style={{color:'grey'}}>Get Started</h5>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                        onClick={toggleDropdown}
                        style={{width:'270px'}}>
                            Quick Start
                        </button>
                        <div className={`dropdown-menu ${isDropdownOpen ? ' show' : ''}`}
                        style={{backgroundColor:'gray',width:'270px',textAlign:'center'}} aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >Tutorial: Tic-Tac-Toe</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>Thinking in React</a>
                            
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                        onClick={toggleDropdown1}
                        style={{width:'270px'}}>
                           Installation
                        </button>
                        <div className={`dropdown-menu ${isDropdownOpen1 ? ' show' : ''}`}
                        style={{backgroundColor:'gray',width:'270px',textAlign:'center'}} aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >Start a New React Project</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>Add React to an Existing Project</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >Editor Setup</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>Using TypeScript</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>React Developer Tools</a>
                        </div>
                    </div><hr/>
                    <div>
                        <h5 style={{color:'grey'}}>Learn React</h5></div>
                        <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                        onClick={toggleDropdown2}
                        style={{width:'270px'}}>
                           Discribing the UI
                        </button>
                        <div className={`dropdown-menu ${isDropdownOpen2 ? ' show' : ''}`}
                        style={{backgroundColor:'gray',width:'270px',textAlign:'center'}} aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >Your First Component</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>Importing and Exporting Components</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >Writing Markups with JSX</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>Javascript in JSX with Curly Braces</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>Passing Props to a Component</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>Conditional Rendering</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >Rendering Lists</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>Keeping Components Pure</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >Your UI as a Tree</a>
                            
                           
                    </div>
                    </div>
                   
                        <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                        onClick={toggleDropdown3}
                        style={{width:'270px'}}>
                           Adding Interactivity
                        </button>
                        <div className={`dropdown-menu ${isDropdownOpen3 ? ' show' : ''}`}
                        style={{backgroundColor:'gray',width:'270px',textAlign:'center'}} aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >Responding to events</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>State:A Component's Memory</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >Render and Commit</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>State as a Snapshot</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>Queueing a Series of State Update </a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>Updating Objects in State</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >Updating Arrays in State</a>
                        
                    </div>
                    </div>
                    
                       
                        <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                        onClick={toggleDropdown4}
                        style={{width:'270px'}}>
                           Managing State
                        </button>
                        <div className={`dropdown-menu ${isDropdownOpen4 ? ' show' : ''}`}
                        style={{backgroundColor:'gray',width:'270px',textAlign:'center'}} aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >Reacting to Input with State</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>Choosing the State Structure</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >Sharing State Between Components</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>Preserving and Resetting State</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>Extracting State Logic into a Reducer</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>Passing Data Deeply with Context</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >Scaling Up with Reducer and Context</a>
                        
                        
                    </div>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                        onClick={toggleDropdown5}
                        style={{width:'270px'}}>
                           Escape Hatches
                        </button>
                        <div className={`dropdown-menu ${isDropdownOpen5 ? ' show' : ''}`}
                        style={{backgroundColor:'gray',width:'270px',textAlign:'center'}} aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >Referencing Values with Refs</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>Manipulating the DOM with Refs</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >Synchronizing with Effects</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>You Might Not Need an Effect</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>Lifecycle of Reactive Effects</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>Separating Events from Effects</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >Removing Effect Dependencies</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >Reusing Logic with Custom Hooks</a>
                        
                        
                    </div>
                    </div>
                    </div>
                
                <div className="col-9" style={{textAlign:'left'}}> 
                    <h6 style={{color:'aqua'}}>Learn React :-</h6>
                    <h1>Quick Start</h1>
                    <div style={{fontSize:"20px"}}>Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.</div><br/>
                    <div style={{backgroundColor:'grey',borderRadius:'20px'}}><br/>
                        <div style={{fontSize:'25px',marginLeft:'20px'}}><b>You will learn</b></div>
                        <div>
                            <ul>
                                <li>How to create and nest components</li>
                            <li>How to add markup and styles</li>
                            <li>How to display data</li>
                            <li>How to render conditions and lists</li>
                            <li>How to respond to events and update the screen</li>
                            <li>How to share data between components</li>
                            </ul>
                            <br/>
                            

                        </div>
                    </div><br/>
                    <h2>Creating and nesting components </h2>
                    <br/>
                    <div style={{fontSize:"17px"}}>React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.<br/><br/>
                    React components are JavaScript functions that return markup:</div>
                    <div><br/>
                        <img src="https://s3-us-west-2.amazonaws.com/images-devcamp/Comprehensive+React+Development/React+Project+Two:+Build+a+Birthday+Countdown+Application/How+to+Create+a+Functional+Button+Component+in+React+%23+1928/Image11.png" alt="" style={{height:'200px',borderRadius:'20px',width:'1000px'}}/><br/><br/>
                        <div style={{fontSize:'17px'}}>
                        Now that you’ve declared <span style={{backgroundColor:'grey',borderRadius:'5px'}}>MyButton</span>, you can nest it into another component:
                        </div><br/>
                        <div>
                            <img src="https://miro.medium.com/max/1400/1*43_JeA6OHii1W4Hp54JI7w.png" alt="" style={{height:'300px',borderRadius:'20px',width:'1000px'}}/><br/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    
        </>
    )
}
export default Learn;