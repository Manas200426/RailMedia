import React, { useContext, useEffect, useState } from 'react';
import { IconButton , MenuItem , Select} from '@mui/material';
import { ChatBubbleOutline, Favorite, MoreVert, ThumbUp, ThumbUpAltOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Timeago from 'react-timeago';
import { AuthContext } from '../../Context/AuthContext';
import { addDoc, collection, deleteDoc, doc, onSnapshot, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import TimeAgo from 'react-timeago';
import './Post.css';

const Post = ({ post }) => {
  const [likes, setLikes] = useState([]);
  const [liked, setLiked] = useState(false);
  const [input, setInput] = useState('');
  const [comments, setComments] = useState([]);
  const [commentOpen, setCommentOpen] = useState(false);
  const [commentBoxVisible, setCommentBoxVisible] = useState(false);
  const [status, setStatus] = useState('Incomplete'); // Default status
  const [category, setCategory] = useState('Uncategorized');
  const [station, setStation] = useState('Kalyan'); // Default station

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const unSubLikes = onSnapshot(collection(db, 'posts', post.id, 'likes'), snapshot => setLikes(snapshot.docs));
    const unSubComments = onSnapshot(collection(db, 'posts', post.id, 'comments'), snapshot => {
      setComments(
        snapshot.docs.map(snapshot => ({
          id: snapshot.id,
          data: snapshot.data(),
        }))
      );
    });

    const unSubStatus = onSnapshot(doc(db, 'posts', post.id), snapshot => {
      setStatus(snapshot.data()?.status || 'Incomplete');
      setCategory(snapshot.data()?.category || 'Uncategorized');
      setStation(snapshot.data()?.station || 'Kalyan'); // Set station from Firestore
    });

    return () => {
      unSubLikes();
      unSubComments();
      unSubStatus();
    };
  }, [post.id]);

  useEffect(() => {
    setLiked(likes.findIndex(like => like.id === currentUser?.uid) !== -1);
  }, [likes, currentUser.uid]);

  const handleComment = async e => {
    e.preventDefault();

    await addDoc(collection(db, 'posts', post.id, 'comments'), {
      comment: input,
      displayName: currentUser.displayName,
      photoURL: currentUser.photoURL,
      uid: currentUser.uid,
      timestamp: serverTimestamp(),
    });
    setCommentBoxVisible(false);
    setInput('');
  };

  const likePost = async () => {
    if (liked) {
      await deleteDoc(doc(db, 'posts', post.id, 'likes', currentUser.uid));
    } else {
      await setDoc(doc(db, 'posts', post.id, 'likes', currentUser.uid), {
        userId: currentUser.uid,
      });
    }
  };

  const updateStatus = async newStatus => {
    await updateDoc(doc(db, 'posts', post.id), {
      status: newStatus,
    });
  };

  const handleCategoryChange = e => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    // Update the category in Firestore
    updateDoc(doc(db, 'posts', post.id), {
      category: newCategory,
    });
  };

  const handleStationChange = e => {
    const newStation = e.target.value;
    setStation(newStation);
    // Update the station in Firestore
    updateDoc(doc(db, 'posts', post.id), {
      station: newStation,
    });
  };

  const handlePost = async () => {
    // Add the station tag to the post input
    const postInputWithStation = `${input} #${station}`;
    await addDoc(collection(db, 'posts'), {
      input: postInputWithStation,
      station: station,
      category: category,
      photoURL: currentUser.photoURL,
      timestamp: serverTimestamp(),
    });
    setInput('');
  };

  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <Link to='/profile/userId'>
              <img src={post.data.photoURL} alt='' className='postProfileImg' />
            </Link>
            <span className='postUsername'>@{post.data.displayName.replace(/\s+/g, '').toLowerCase()}</span>
            <span className='postDate'>
              <TimeAgo date={new Date(post.data?.timestamp?.toDate()).toLocaleString()} />
            </span>
            <select className='postCategory' value={category} onChange={handleCategoryChange}>
              <option value='Uncategorized'>Uncategorized</option>
              <option value='Cleanliness'>Cleanliness</option>
              <option value='Safety'>Safety</option>
              <option value='Infrastructure'>Infrastructure</option>
              {/* Add more options as needed */}
            </select>
            <select className='postStation' value={station} onChange={handleStationChange}>
              <option value='Kalyan'>Kalyan</option>
              <option value='Thane'>Thane</option>
              <option value='Mumbai'>Mumbai</option>
              {/* Add more station options as needed */}
            </select>
          </div>
          
        </div>
        <div className='postCenter'>
          <span className='postText'>{post.data.input}</span>
          <img src={post.data.img} alt='' className='postImg' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <Favorite className='bottomLeftIcon' style={{ color: 'red' }} />
            <ThumbUp
              onClick={likePost}
              className='bottomLeftIcon'
              style={{ color: '#011631' }}
            />
            {likes.length > 0 && <span className='postLikeCounter'>{likes.length}</span>}
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText' onClick={() => setCommentOpen(!commentOpen)}>
              {comments.length} · comments · share
            </span>
          </div>
        </div>

        <hr className='footerHr' />
        <div className='postBottomFooter'>
          <div className='postBottomFooterItem' onClick={likePost}>
            {liked ? (
              <ThumbUp style={{ color: '#011631' }} className='footerIcon' />
            ) : (
              <ThumbUpAltOutlined className='footerIcon' />
            )}
            <span className='footerText'>Like</span>
          </div>
          <div className='postBottomFooterItem' onClick={() => setCommentBoxVisible(!commentBoxVisible)}>
            <ChatBubbleOutline className='footerIcon' />
            <span className='footerText'>Comment</span>
          </div>
          {/* Display status */}
          <div className='postBottomFooterItem'>
            <span className='footerText'>Status: {status}</span>
          </div>
        </div>
      </div>
      {commentBoxVisible && (
        <form onSubmit={handleComment} className='commentBox'>
          <textarea
            type='text'
            placeholder='Write a comment ...'
            className='commentInput'
            rows={1}
            style={{ resize: 'none' }}
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button type='submit' disabled={!input} className='commentPost'>
            Comment
          </button>
        </form>
      )}
      {commentOpen && (
        <div className='comment'>
          {comments
            .sort((a, b) => b.data.timestamp - a.data.timestamp)
            .map(c => (
              <div key={c.id} className='commentWrapper'>
                <img className='commentProfileImg' src={c.data.photoURL} alt='' />
                <div className='commentInfo'>
                  <span className='commentUsername'>@{c.data.displayName.replace(/\s+/g, '').toLowerCase()}</span>
                  <p className='commentText'>{c.data.comment}</p>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Post;