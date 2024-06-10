import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfinity } from '@fortawesome/free-solid-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons';



function Footer() {
    
  return (
    <footer className="bg-dark text-white text-center p-3">
      <div className="container row">
        <div className='col m4'>
            <div style={{fontSize:'16px'}}><b>
            <FontAwesomeIcon icon={faInfinity} style={{color:'blue'}}/>Meta Open Source</b></div><br />
        <p>© 2024 </p>
        </div>
        <div className='col m4'><b><div style={{fontSize:'16px'}}>Learn React</div></b><br />
        <div>Quick Start</div>
        <div>Installation</div>
        <div>Decribing the UI</div>
        <div>Adding the Interactivity</div>
        <div>Managing State</div>
        <div>Escape Hatches</div>
        </div>
        <div className='col m4'><b><div style={{fontSize:'16px'}}>API Reference</div></b><br />
        <div>React APIs</div>
        <div>React DOM APIs</div>
        </div>
        <div className='col m4'><b><div style={{fontSize:'16px'}}>Community</div></b><br />
        <div>Code of Conduct</div>
        <div>Meet the Team</div>
        <div>Docs Contributors</div>
        <div>Acknowledgements</div>
        </div>
        <div className='col m4'><b><div style={{fontSize:'16px'}}>Community</div></b><br />
        <div>Blog</div>
        <div>React Native</div>
        <div>Privacy</div>
        <div>Terms</div>
        <div style={{fontSize:'16px'}}><FontAwesomeIcon icon={faFacebook}/>
        <FontAwesomeIcon icon={faTimes}/>
        <FontAwesomeIcon icon={faGithub}/></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
