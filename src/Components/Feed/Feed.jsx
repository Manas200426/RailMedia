import React, { useEffect, useState } from 'react'
import "./Feed.css"
import Stories from '../Stories/Stories';
import Share from '../share/Share';
import { Posts } from '../../data';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import Post from '../Post/Post';


const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unSub = onSnapshot(collection(db, "posts"), (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
    return () => {
      unSub();
    };
  }, []);
  // console.log(posts);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Stories/>
        <Share />
        {posts
          .sort((a, b) => b.data.timestamp - a.data.timestamp)
          .map((p) => (
            <Post key={p.id} post={p} />
          ))}
      </div>
    </div>
  );
};

export default Feed;