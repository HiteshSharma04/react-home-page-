import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';
import 'C:/Users/hp/Desktop/React_project/hit/src/component/css/new.css';
function Reference(){
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
    const [isDropdownOpen6, setIsDropdownOpen6] = useState(false);

    const toggleDropdown6 = () => {
        setIsDropdownOpen6(!isDropdownOpen6);
    };
    const [isDropdownOpen7, setIsDropdownOpen7] = useState(false);

    const toggleDropdown7 = () => {
        setIsDropdownOpen7(!isDropdownOpen7);
    };
    const [isDropdownOpen8, setIsDropdownOpen8] = useState(false);

    const toggleDropdown8 = () => {
        setIsDropdownOpen8(!isDropdownOpen8);
    };
    const [isDropdownOpen9, setIsDropdownOpen9] = useState(false);

    const toggleDropdown9 = () => {
        setIsDropdownOpen9(!isDropdownOpen9);
    };
    return(
        <>
        <div className="container"> 
            
            <div className="row">
                <div className="col-3" style={{textAlign:'centre', marginLeft:'-110px'}}> 
                    <button className="btn btn-secondary" style={{color:'grey',width:'270px',background:'transparent',padding:'5px'}}><b> Overview</b></button>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                        onClick={toggleDropdown}
                        style={{width:'270px'}}>
                            Hooks
                        </button>
                        <div className={`dropdown-menu ${isDropdownOpen ? ' show' : ''}`}
                        style={{backgroundColor:'gray',width:'270px',textAlign:'center'}} aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >use</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>useCallback</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >useContext</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>useDebugvalue</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >useDeferredvalue</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>useEffect</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >useid</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>useImperativeHandle</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >useInsertionEffect</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>useLayoutEffect</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >useMemo</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>useOptimistic</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >useReducer</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>useRef</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>useState</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>useSyncExternalStore</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>useTransition</a>
                            
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                        onClick={toggleDropdown1}
                        style={{width:'270px'}}>
                           Components
                        </button>
                        <div className={`dropdown-menu ${isDropdownOpen1 ? ' show' : ''}`}
                        style={{backgroundColor:'gray',width:'270px',textAlign:'center'}} aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >Fragment</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>Profiler</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >StrictMode</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>Suspense</a>
                            </div></div>
                    
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                        onClick={toggleDropdown2}
                        style={{width:'270px'}}>
                           APIs
                        </button>
                        <div className={`dropdown-menu ${isDropdownOpen2 ? ' show' : ''}`}
                        style={{backgroundColor:'gray',width:'270px',textAlign:'center'}} aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >cache</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>createContext</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >ForwardRef</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>lazy</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >memo</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>startTransition</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >experimental_taintObjectReference</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>experimental_taintUniqueValue</a>
                            
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                        onClick={toggleDropdown3}
                        style={{width:'270px'}}>
                           Directives
                        </button>
                        <div className={`dropdown-menu ${isDropdownOpen3 ? ' show' : ''}`}
                        style={{backgroundColor:'gray',width:'270px',textAlign:'center'}} aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >'use client'</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>'use server'</a>
                            </div></div>
                            <hr/>
                    <div>
                        <h6 style={{color:'grey'}}>react-dom@18.2.0</h6></div>
                        <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                        onClick={toggleDropdown4}
                        style={{width:'270px'}}>
                           Hooks
                        </button>
                        <div className={`dropdown-menu ${isDropdownOpen4 ? ' show' : ''}`}
                        style={{backgroundColor:'gray',width:'270px',textAlign:'center'}} aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >useFormState</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>useFormStatus</a>
                            
                           
                    </div>
                    </div>
                   
                        <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                        onClick={toggleDropdown5}
                        style={{width:'270px'}}>
                           Components
                        </button>
                        <div className={`dropdown-menu ${isDropdownOpen5 ? ' show' : ''}`}
                        style={{backgroundColor:'gray',width:'270px',textAlign:'center'}} aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >Common(e.g. div)</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>form</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >input</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>option</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>progress </a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>select</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >textarea</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >link</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>meta</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >script</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>style</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>title</a>
                        
                    </div>
                    </div>
                    
                       
                        <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                        onClick={toggleDropdown6}
                        style={{width:'270px'}}>
                           APIs
                        </button>
                        <div className={`dropdown-menu ${isDropdownOpen6 ? ' show' : ''}`}
                        style={{backgroundColor:'gray',width:'270px',textAlign:'center'}} aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >createPortal</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>flushSync</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >findDOMNode</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>hydrate</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>Preconnect</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>PrefetchDNS</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >Preinit</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >PreinitModule</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>Preload</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >PreloadModule</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>Render</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>unmountComponentAtNode</a>
                    </div>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                        onClick={toggleDropdown7}
                        style={{width:'270px'}}>
                           Client APIs
                        </button>
                        <div className={`dropdown-menu ${isDropdownOpen7 ? ' show' : ''}`}
                        style={{backgroundColor:'gray',width:'270px',textAlign:'center'}} aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >createroot</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>hydrateroot</a>   
                    </div>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                        onClick={toggleDropdown8}
                        style={{width:'270px'}}>
                           Server APIs
                        </button>
                        <div className={`dropdown-menu ${isDropdownOpen8 ? ' show' : ''}`}
                        style={{backgroundColor:'gray',width:'270px',textAlign:'center'}} aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >renderToNodeStream</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>renderToPipeableStream</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >renderToReadableStream</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>renderToStaticMarkup</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >renderToStaticNodeStream</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>renderToStream</a>   
                    </div>
                    </div><hr/>
                    <div>
                        <h6 style={{color:'grey'}}>Legacy APIs</h6></div>
                        <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                        onClick={toggleDropdown9}
                        style={{width:'270px'}}>
                           Legacy React APIs
                        </button>
                        <div className={`dropdown-menu ${isDropdownOpen9 ? ' show' : ''}`}
                        style={{backgroundColor:'gray',width:'270px',textAlign:'center'}} aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >children</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>cloneElement</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >Component</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>createElement</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >createFactory</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>createRef</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >isValidElement</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>PureComponent</a>
                            
                           
                    </div>
                    </div>
                    </div>
                
                <div className="col-9" style={{textAlign:'left'}}> 
                    <h6 style={{color:'aqua'}}>API REFERENCE :-</h6>
                    <h1>React Reference Overview</h1>
                    <div style={{fontSize:'20px'}}>This section provides detailed reference documentation for working with React. For an introduction to React, please visit the Learn section.</div><br/>
                    <div style={{fontSize:'17px'}}>The React reference documentation is broken down into functional subsections:</div><br />
                    <h2>React</h2><br/>
                    <div style={{fontSize:'17px'}}>
                    <div>Programmatic React features:</div> 
                    <br/>
                    <ul>
                        <li><span style={{color:'aqua'}}>Hooks</span>-Use different React features from your components.</li>
                        <li><span style={{color:'aqua'}}>Components</span>-Documents built-in components that you can use in your JSX.</li>
                        <li><span style={{color:'aqua'}}>APIs</span>-APIs that are useful for defining components.</li>
                        <li><span style={{color:'aqua'}}>Directives</span>-Provide instructions to bundlers compatible with React Server Components.</li>
                    </ul>
                    </div><br />
                    <h2>React DOM</h2><br/>
                    <div style={{fontSize:'17px'}}><div>React-dom contains features that are only supported for web applications (which run in the browser DOM environment). This section is broken into the following:</div><br />
                    <ul>
                        <li><span style={{color:'aqua'}}>Hooks</span>-Hooks for web applications which run in the browser DOM environment.</li>
                        <li><span style={{color:'aqua'}}>Components</span>-React supports all of the browser built-in HTML and SVG components.</li>
                        <li><span style={{color:'aqua'}}>APIs</span>- The <span style={{backgroundColor:'grey',borderRadius:"5px"}}>react-dom</span> package contains methods supported only in web applications.</li>
                        <li><span style={{color:'aqua'}}>Client APIs</span>-The <span style={{backgroundColor:'grey',borderRadius:"5px"}}>react-dom/client</span> APIs let you render React components on the client (in the browser).</li>
                        <li><span style={{color:'aqua'}}>Server APIs</span>-The <span style={{backgroundColor:'grey',borderRadius:"5px"}}>react-dom/server</span> APIs let you render React components to HTML on the server.</li>
                    </ul><br />
                </div>
                <h2>Legacy APIs</h2><br />
                <ul>
                    <li><span style={{color:'aqua'}}>Legacy APIs</span>- Exported from the <span style={{backgroundColor:'grey',borderRadius:"5px"}}>react</span> package, but not recommended for use in newly written code.</li>
                </ul>
                </div>
            </div>
            </div>
        </>
    )
}
export default Reference;