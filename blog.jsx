function Blog(){
    return(
        <>
        <h6 style={{color: 'aqua',textAlign:'left',marginLeft:'200px'}}>
        Blog :-
        </h6>
        <div style={{textAlign:'left',marginLeft:'200px'}}>
            <h1>React Blog</h1><br />
            <div style={{fontSize:'20px',width:'1000px'}}>This blog is the official source for the updates from the React team. Anything important, including release notes or deprecation notices, will be posted here first. You can also follow the <span style={{color:'aqua'}}>@reactjs</span>  account on Twitter, but you won’t miss anything essential if you only read this blog.
            <br />
            <br />
            <div style={{border:'1px solid grey',borderRadius:'10px'}}><br/>
                <h2 style={{margin:'15px'}}>React Canaries: Incremental Feature Rollout Outside Meta</h2>
                <div style={{color:'grey',margin:'15px'}}>May 3, 2023</div><br />
                <div style={{fontSize:'17px',margin:'15px'}}>Traditionally, new React features used to only be available at Meta first, and land in the open source releases later. We’d like to offer the React community an option to adopt individual new features as soon as their design is close to final—similar to how Meta uses React internally. We are introducing a new officially supported Canary release channel. It lets curated setups like frameworks decouple adoption of individual React features from the React release schedule.</div><br />
            </div>
        </div>

        </div>
        
        </>
    )
}
export default Blog;