import React from 'react'
import "./Feed.css"
import Stories from '../Stories/Stories';
import Share from '../share/Share';
import { Posts } from '../../data';
import Post from '../Post/Post';


const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Stories />
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p}/>
        ))}
      </div>
    </div>
  );
};


export default Feed;