import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import fiveStars from './assets/images/illustration-five-stars.webp';
import multiplePlatforms from './assets/images/illustration-multiple-platforms.webp';
import consistentSchedule from './assets/images/illustration-consistent-schedule.webp';
import schedulePosts from './assets/images/illustration-schedule-posts.webp';
import growFollowers from './assets/images/illustration-grow-followers.webp';
import audienceGrowth from './assets/images/illustration-audience-growth.webp';
import createPost from './assets/images/illustration-create-post.webp';
import aiContent from './assets/images/illustration-ai-content.webp';


const Headline = () => (
  <div id="headline">
    <h1>
      Social Media <span style={{color: 'var(--Y_500)'}}>10x</span> <em>Faster</em> with AI
    </h1>
    <img src={fiveStars} alt="five stars"  />
    <p > Over 4,000 5-star reviews</p>
  </div>
);


const Accounts = () => (
  <div id="accounts">
    <img src={multiplePlatforms} alt="multiple platforms" />
    <h3 >Manage multiple accounts and platforms.</h3>
  </div>
);




const Consistent = () => (
  <div id="consistent" >
    <h3 >Maintain a consistent posting schedule.</h3>
    <img src={consistentSchedule} alt="consistent schedule"  />
  </div>
)

const Schedule = () => (
  <div id="schedule">
    <h3 >Schedule to social media.</h3>
    <img src={schedulePosts} alt="schedule posts" />
    <p>Optimize post timings to publish content at the perfect time for your audience.</p>
  </div>
);

const Content = () => (
  <div id="content">
    <img src={growFollowers} alt="grow followers" />
    <h2>Grow followers with non-stop content.</h2>
  </div>
);


const Audience = () => (
  <div id="audience" >
    <h1 >&gt;56%</h1>
    <p >faster audience growth</p>
    <img src={audienceGrowth} alt="audience growth"/>
  </div>
);


const Create = () => (
  <div id="create">
    <h3>
      Create and schedule content <em style= {{color: 'var(--P_500)'}}>quicker</em>.
    </h3>
    <img src={createPost} alt="create post" />
  </div>
);


const Write = () => (
  <div id="write" >
    <h2>Write your content using AI.</h2>
    <img src={aiContent} alt="schedule posts"/>
  </div>
);

const App = () => (
  <div className="container" >
    <Headline />
    <Accounts />
    <Consistent />
    <Schedule />
    <Content />
    <Audience />
    <Create />
    <Write />
  </div>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
