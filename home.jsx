import logo from './logo.svg';
import {Link} from 'react-router-dom';
import  { useEffect, useRef } from 'react'
function Home(){
  const marqueeContainerRef = useRef(null);

  useEffect(() => {
    const marqueeContainer = marqueeContainerRef.current;
    const cloneItems = marqueeContainer.innerHTML;
    marqueeContainer.innerHTML += cloneItems;
  }, []);

return(
    <>
    <div className='text'>
        <img src={logo} className='App1-logo' alt='logo' />
        <h1 style={{fontSize:'60px'}}>React</h1>
        <h5 style={{fontSize:'36px'}}>The library for web and native user interfaces</h5>
        </div>
        <Link to={'/learn'}><button className='btn btn-primary' style={{borderRadius:'40px', margin:'20px'}}><h4>Learn React</h4></button></Link>
        <Link to={'/reference'}><button className='btn btn-dark' style={{borderRadius:'40px', border:'1px solid gray'}}><h4>Api Reference</h4></button></Link><br />
        <br /><br /><br /><br /><hr style={{color:'gray'}} /><br /><br /><br /><br />
        <div className='text'>
        <h1 style={{fontSize:'60px'}}>Create user interfaces <br />from components</h1><br />
        <h6 style={{fontSize:'20px'}}>React lets you build user interfaces out of individual pieces called components.<br /> Create your own React components like <span style={{backgroundColor:'gray', borderRadius:'5px'}}>Thumbnail </span>, <span style={{backgroundColor:'gray', borderRadius:'5px'}}>LikeButton </span>, and <span style={{backgroundColor:'gray', borderRadius:'5px'}}>Video </span>.<br /> Then combine them into entire screens, pages, and apps.</h6>
          </div>
          <div className='container' style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="card" style={{ width: "38rem",marginLeft:'3rem',borderRadius:'20px',background:'black',textAlign:'left',height:'23rem' }}>
  <div className="card-body" >
 
     <div style={{background:'grey',padding:'10px',borderRadius:'10px'}}>video.js</div><hr />
    <div style={{background:'black'}}> <img src='https://www.codegrepper.com/codeimages/template-functional-component-react.png' style={{width:'31rem',height:'15rem'}} alt='' /></div>
  </div>
</div>
<div className="card" style={{ width: "38rem",borderRadius:'20px',background:'darkblue',textAlign:'left',height:'20rem',marginTop:'1.5rem' }}>
  <div className="card-body" >
 <br /><br /><br />
     <div style={{background:'white',padding:'50px',borderRadius:'10px',display: 'flex'}}> <input type='text' style={{padding:'20px',width:'150px',borderRadius:'5px',backgroundColor:'darkblue',border:'1px solid white'}}/><div style={{marginLeft:'10px'}}><b>My Video</b><br/>Video Description</div> </div> <br/>
   
  </div>
</div>
</div><br /><br />
          <div className='text'>
          <h6 style={{fontSize:'20px'}}>Whether you work on your own or with thousands of other developers, using<br /> React feels the same. It is designed to let you seamlessly combine components<br /> written by independent people, teams, and organizations.</h6> 
          </div><br /><br /><br /><br /><hr style={{color:'gray'}} /><br /><br /><br /><br />

          <div className='text'>
          <h1 style={{fontSize:'60px'}}>Write components <br />with code and markup</h1>
          <h6 style={{fontSize:'20px'}}>React components are JavaScript functions. Want to show some content <br />conditionally? Use an <span style={{backgroundColor:'gray', borderRadius:'5px'}}>if</span> statement. Displaying a list? Try array <span style={{backgroundColor:'gray', borderRadius:'5px'}}>map()</span>. Learning<br/> React is learning programming.</h6>
          </div><br/>

          <div className='container' style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="card" style={{ width: "38rem",marginLeft:'2rem',borderRadius:'20px',background:'black',textAlign:'left',height:'38rem' }}>
  <div className="card-body" >
 
     <div style={{background:'grey',padding:'10px',borderRadius:'10px'}}>videoList.js</div><hr />
    <div style={{background:'black'}}> <img src='https://www.codegrepper.com/codeimages/template-functional-component-react.png' style={{width:'31rem',height:'28rem'}} alt='' /></div>
  </div>
</div>
<div className="card" style={{ width: "38rem",borderRadius:'20px',background:'darkblue',textAlign:'left',height:'34rem',marginTop:'1.5rem' }}>
  <div className="card-body" >
 <br />
     <div style={{background:'white',borderRadius:'10px'}}><div><h5 style={{marginLeft:'10px'}}>3 Videos</h5><div style={{padding:'50px',borderRadius:'10px',display: 'flex'}}><input type='text' style={{padding:'10px',width:'150px',borderRadius:'5px',backgroundColor:'darkblue',border:'1px solid white'}}/><div style={{marginLeft:'10px'}}><b>First Video</b><br/>Video Description</div> </div></div> 
     <div style={{padding:'50px',borderRadius:'10px',display: 'flex'}}><input type='text' style={{padding:'10px',width:'150px',borderRadius:'5px',backgroundColor:'darkblue',border:'1px solid white'}}/><div style={{marginLeft:'10px'}}><b>Second Video</b><br/>Video Description</div> </div>
     <div style={{padding:'50px',borderRadius:'10px',display: 'flex'}}><input type='text' style={{padding:'10px',width:'150px',borderRadius:'5px',backgroundColor:'darkblue',border:'1px solid white'}}/><div style={{marginLeft:'10px'}}><b>Third Video</b><br/>Video Description</div> </div></div>
  </div>
</div>
</div><br /><br />
<div className='text'>
<h6 style={{fontSize:'20px'}}>React components are JavaScript functions. Want to show some content <br />conditionally? Use an <span style={{backgroundColor:'gray', borderRadius:'5px'}}>if</span> statement. Displaying a list? Try array <span style={{backgroundColor:'gray', borderRadius:'5px'}}>map()</span>. Learning<br/> React is learning programming.</h6>
</div><br/><br/><hr style={{color:'gray'}}/><br/><br/>

<div className='text'>
<h1 style={{fontSize:'60px'}}>Add interactivity <br />wherever you need it</h1>
<h6 style={{fontSize:'20px'}}>React components receive data and return what should appear on the screen.<br />You can pass them new data in response to an interaction, like when the user<br/>types into an input. React will then update the screen to match the new data.</h6>
    </div> <br />
    <div className='container' style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="card" style={{ width: "38rem",marginLeft:'2rem',borderRadius:'20px',background:'black',textAlign:'left',height:'38rem' }}>
  <div className="card-body" >
 
     <div style={{background:'grey',padding:'10px',borderRadius:'10px'}}>SearchablevideoList.js</div><hr />
    <div style={{background:'black'}}> <img src='https://www.quikieapps.com/blog/wp-content/uploads/2020/10/React-Component.png' style={{width:'31rem',height:'28rem'}} alt='' /></div>
  </div>
</div>
<div className="card" style={{ width: "38rem",borderRadius:'20px',background:'darkblue',textAlign:'left',height:'34rem',marginTop:'1.5rem' }}>
  <div className="card-body" >
 <br />
     <div style={{background:'white',borderRadius:'10px'}}><div><h5 style={{marginLeft:'10px'}}>3 Videos</h5><div style={{padding:'50px',borderRadius:'10px',display: 'flex'}}><input type='text' style={{padding:'10px',width:'150px',borderRadius:'5px',backgroundColor:'darkblue',border:'1px solid white'}}/><div style={{marginLeft:'10px'}}><b>First Video</b><br/>Video Description</div> </div></div> 
     <div style={{padding:'50px',borderRadius:'10px',display: 'flex'}}><input type='text' style={{padding:'10px',width:'150px',borderRadius:'5px',backgroundColor:'darkblue',border:'1px solid white'}}/><div style={{marginLeft:'10px'}}><b>Second Video</b><br/>Video Description</div> </div>
     <div style={{padding:'50px',borderRadius:'10px',display: 'flex'}}><input type='text' style={{padding:'10px',width:'150px',borderRadius:'5px',backgroundColor:'darkblue',border:'1px solid white'}}/><div style={{marginLeft:'10px'}}><b>Third Video</b><br/>Video Description</div> </div></div>
  </div>
</div>
</div><br /><br />
<div className='text'>
<h6 style={{fontSize:'20px'}}>You don’t have to build your whole page in React. Add React to your existing <br /> HTML page, and render interactive React components anywhere on it.</h6><br />
<button style={{width:'250px',borderRadius:'20px',padding:'5px',backgroundColor:'transparent',border:'1px solid grey',color:'white',fontSize:'17px'}}>Add React to Your Page :-</button>
</div><br /><br /><br /><hr style={{color:'grey'}} /> <br /><br /><br />
<div className='text'>
<h1 style={{fontSize:'60px'}}>Go full-stack <br />
with a framework</h1>
<h6 style={{fontSize:'20px'}}>
React is a library. It lets you put components together, but it doesn’t prescribe <br /> how to do routing and data fetching. To build an entire app with React, we <br /> recommend a full-stack React framework like <span style={{color:'aqua'}}>Next.js</span>  or <span style={{color:'aqua'}}>Remix.</span>
</h6>
</div><br />
<div className='container' style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="card" style={{ width: "38rem",marginLeft:'2rem',borderRadius:'20px',background:'black',textAlign:'left',height:'38rem' }}>
  <div className="card-body" >
 
     <div style={{background:'grey',padding:'10px',borderRadius:'10px'}}>confs/[slug].js</div><hr />
    <div style={{background:'black'}}> <img src='https://preview.redd.it/qoya77fzhu171.png?width=905&format=png&auto=webp&s=441f503a2ca3ecd613ce178fe557b581c9b57a04' style={{width:'31rem',height:'28rem'}} alt='' /></div>
  </div>
</div>
<div className="card" style={{ width: "38rem",borderRadius:'20px',background:'darkblue',textAlign:'left',height:'34rem',marginTop:'1.5rem' }}>
  <div className="card-body" >
 <br />
     <div style={{background:'white',borderRadius:'10px'}}><div><h5 style={{marginLeft:'10px'}}>3 Videos</h5><div style={{padding:'50px',borderRadius:'10px',display: 'flex'}}><input type='text' style={{padding:'10px',width:'150px',borderRadius:'5px',backgroundColor:'darkblue',border:'1px solid white'}}/><div style={{marginLeft:'10px'}}><b>First Video</b><br/>Video Description</div> </div></div> 
     <div style={{padding:'50px',borderRadius:'10px',display: 'flex'}}><input type='text' style={{padding:'10px',width:'150px',borderRadius:'5px',backgroundColor:'darkblue',border:'1px solid white'}}/><div style={{marginLeft:'10px'}}><b>Second Video</b><br/>Video Description</div> </div>
     <div style={{padding:'50px',borderRadius:'10px',display: 'flex'}}><input type='text' style={{padding:'10px',width:'150px',borderRadius:'5px',backgroundColor:'darkblue',border:'1px solid white'}}/><div style={{marginLeft:'10px'}}><b>Third Video</b><br/>Video Description</div> </div></div>
  </div>
</div>
</div><br /><br />
<div className='text'>
<h6 style={{fontSize:'20px'}}>React is also an architecture. Frameworks that implement it let you fetch data in <br />asynchronous components that run on the server or even during the build. Read <br /> data from a file or a database, and pass it down to your interactive components.</h6><br />
<button style={{width:'250px',borderRadius:'20px',padding:'5px',backgroundColor:'transparent',border:'1px solid grey',color:'white',fontSize:'17px'}}>Get started with a framework :-</button>
</div><br /><br /><br /><hr style={{color:'grey'}} /><br/><br /><br />
<div className='text'>
<h1 style={{fontSize:'60px'}}>Use the best from <br /> every platform</h1>
<h6 style={{fontSize:'20px'}}>People love web and native apps for different reasons. React lets you build both <br /> web apps and native apps using the same skills. It leans upon each platform’s <br /> unique strengths to let your interfaces feel just right on every platform.</h6>
</div>
<div className="marquee-container" ref={marqueeContainerRef}>
  <div className="marquee-items">
    <img src="https://th.bing.com/th/id/OIP.OF59vsDmwxPP1tw7b_8clQHaE8?rs=1&pid=ImgDetMain" alt="" className="marquee-item" style={{width:'180px',height:'120px',margin:'10px',borderRadius:'20px'}}/>
    <img src="https://images.wondershare.com/filmora/article-images/panoramic-beach.jpg" alt=""   className="marquee-item" style={{width:'180px',height:'120px',margin:'10px',borderRadius:'20px'}}/>
    <img src="https://lightforge.co.nz/wp-content/uploads/2018/03/landscape-photography-new-brighton-norwesterly-arch.jpg" alt="" className="marquee-item" style={{width:'180px',height:'120px',margin:'10px',borderRadius:'20px'}}/>
    <img src="https://th.bing.com/th/id/OIP.5wWdl_XZCBVIhrBOTNd6-QHaE8?w=1240&h=828&rs=1&pid=ImgDetMain" alt="" className="marquee-item" style={{width:'180px',height:'120px',margin:'10px',borderRadius:'20px'}}/>
    <img src="https://thumbs.dreamstime.com/b/windermere-largest-natural-lake-england-district-161978574.jpg" alt="" className="marquee-item" style={{width:'180px',height:'120px',margin:'10px',borderRadius:'20px'}}/>
    <img src="https://th.bing.com/th/id/OIP.sq-B4J5It2dm1PinMWRR7AHaJ4?w=768&h=1024&rs=1&pid=ImgDetMain" alt="" className="marquee-item" style={{width:'180px',height:'120px',margin:'10px',borderRadius:'20px'}}/>
    <img src="https://4.bp.blogspot.com/-HJwLMBcs7b4/TvZU11ejNDI/AAAAAAAAHn4/1alvjuEbi1s/s1600/299_03_Spirit+of+Tasmania_Tasmania+in+sight.jpg" alt="" className="marquee-item" style={{width:'180px',height:'120px',margin:'10px',borderRadius:'20px'}}/>
    <img src="https://live.staticflickr.com/2496/3780513557_4338428187.jpg" alt="" className="marquee-item" style={{width:'180px',height:'120px',margin:'10px',borderRadius:'20px'}}/>
    <img src="https://live.staticflickr.com/8381/29683766982_21177716b0_b.jpg" alt="" className="marquee-item" style={{width:'180px',height:'120px',margin:'10px',borderRadius:'20px'}}/>
  </div>
  
  {/* Add more images as needed */}
</div>

    </>
)
}
export default Home;