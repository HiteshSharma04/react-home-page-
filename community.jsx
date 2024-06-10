import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';
import 'C:/Users/hp/Desktop/React_project/hit/src/component/css/new.css';
function Community(){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return(
        <>
        <div className="container" > 
        <div className="row">
        <div className="col-3" style={{textAlign:'centre', marginLeft:'-110px'}}> 
        <div>
                        <h6 style={{color:'grey'}}>Legacy APIs</h6></div>
                        <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                        onClick={toggleDropdown}
                        style={{width:'270px'}}>
                            Community
                        </button>
                    <div className={`dropdown-menu ${isDropdownOpen ? ' show' : ''}`}
                        style={{backgroundColor:'gray',width:'270px',textAlign:'center'}} aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}>
                            React Confrences</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>React Meetups</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >React Videos</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>Meet the Team</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >Docs Contributors</a>
                            <a className="dropdown-item" href="#" style={{backgroundColor:'gray'}}>Acknowledgements</a>
                            <a className="dropdown-item" href="#" style={{backgroundColorcolor:'gray'}}
                            >Versioning Policy</a></div>
                    
                    </div>
                    </div>
                    <div className='col m9' style={{textAlign:'left'}}>
                        <h6 style={{color:'aqua'}}>Community :-</h6><br />
                        <h1>React Community</h1><br />
                        <div style={{fontSize:'20px'}}>React has a community of millions of developers. On this page we’ve listed some React-related communities that you can be a part of; see the other pages in this section for additional online and in-person learning materials.</div><br/>
                        <h2>Code of Conduct</h2><br />
                        <div style={{fontSize:'17px'}}>Before participating in React’s communities,<span style={{color:'aqua'}}>please read our Code of Conduct.</span> We have adopted the <span style={{color:'aqua'}}>Contributor Covenant</span>  and we expect that all community members adhere to the guidelines within.</div><br />
                        <h2>Stack Overflow</h2><br />
                        <div style={{fontSize:'17px'}}>Stack Overflow is a popular forum to ask code-level questions or if you’re stuck with a specific error. Read through the <span  style={{color:'aqua'}}>existing questions</span>  tagged with reactjs or <span  style={{color:'aqua'}}>ask your own</span> !</div><br />
                        <h2>Popular Discussion Forums </h2><br />
                        <div style={{fontSize:'17px'}}>
                            <div>There are many online forums which are a great place for discussion about best practices and application architecture as well as the future of React. If you have an answerable code-level question, Stack Overflow is usually a better fit. <br /><br />
                        Each community consists of many thousands of React users.</div><br />
                        <ul>
                            <li style={{color:'aqua'}}>DEV’s React community</li>
                            <li style={{color:'aqua'}}>Hashnode’s React community</li>
                            <li style={{color:'aqua'}}>Reactiflux online chat</li>
                            <li style={{color:'aqua'}}>Reddit’s React community</li>
                            </ul></div><br />
                            <h2>News</h2><br />
                            <div style={{fontSize:'17px'}}>For the latest news about React,<span style={{color:'aqua'}}>follow @reactjs on Twitter</span>  and the <span style={{color:'aqua'}}>official React blog</span>  on this website.

</div>

                    </div>
        </div>
        </div>
        </>
    )
}
export default Community;