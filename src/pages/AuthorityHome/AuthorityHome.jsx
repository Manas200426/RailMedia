import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { RiStickyNoteLine } from 'react-icons/ri';
import TextareaAutosize from 'react-textarea-autosize';
import { ToastContainer, toast } from 'react-toastify';
import './AuthorityHome.css';
import Chart from '../../Components/chart/Chart';

const AuthorityHome = () => {
  const [posts, setPosts] = useState([]);
  const [showChart, setShowChart] = useState(false); 
  const [postStatuses, setPostStatuses] = useState({});
  const [showNoteInput, setShowNoteInput] = useState(false);
  const [noteInput, setNoteInput] = useState('');
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [selectedPostNote, setSelectedPostNote] = useState('');
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('All'); // Default category filter

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = collection(db, 'posts');
      const snapshot = await getDocs(postsCollection);
      const postsData = snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
      }));
      setPosts(postsData);
      const initialStatuses = {};
      postsData.forEach(post => {
        initialStatuses[post.id] = post.data.status || 'Incomplete';
      });
      setPostStatuses(initialStatuses);
    };

    fetchPosts();
  }, []);

  const handleStatusChange = async (postId, e) => {
    const newStatus = e.target.value;
    setSelectedPostId(postId); // Set the selected post id for adding notes
    setPostStatuses(prevStatuses => ({
      ...prevStatuses,
      [postId]: newStatus,
    }));

    if (newStatus !== 'Incomplete') {
      setShowNoteInput(true); // Show the note input when status is changed to in progress or completed
    } else {
      setShowNoteInput(false);
      setNoteInput('');
    }

    const postRef = doc(db, 'posts', postId);
    await updateDoc(postRef, { status: newStatus });

    // Show toast only if note is not empty
    if (newStatus !== 'Incomplete' && noteInput.trim() !== '') {
      toast.success(`Status updated to ${newStatus}`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleNoteChange = (e) => {
    setNoteInput(e.target.value);
  };

  const saveNote = async () => {
    setShowNoteInput(false); // Hide the note input after saving
    const postRef = doc(db, 'posts', selectedPostId);
    await updateDoc(postRef, { note: noteInput });
    setSelectedPostNote(noteInput.trim()); // Set the note for the selected post
  };

  const handleNotePopup = async (postId) => {
    setSelectedPostId(postId); // Set the selected post id for viewing the note
    const postSnapshot = await getDoc(doc(db, 'posts', postId));
    setSelectedPostNote(postSnapshot.data().note || ''); // Set the note for the selected post
  };

  const handleCategoryFilterChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const filteredPosts = categoryFilter === 'All' ? posts : posts.filter(post => post.data.category === categoryFilter);
  
  // Calculate category counts for the chart
  const categoryCounts = posts.reduce((acc, post) => {
    const category = post.data.category || 'Uncategorized';
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  // Convert category counts to chart data format
  const chartData = Object.keys(categoryCounts).map(category => ({
    category,
    count: categoryCounts[category],
  }));
  return (
    <div className='authority-home'>
      {/* Navbar */}
      <nav className='navbar'>
        <div className='navbar-brand'>RAILMEDIA (Authority Version)</div>
        <div>
          <label>
            Filter by Category:
            <select value={categoryFilter} onChange={handleCategoryFilterChange}>
              <option value='All'>All</option>
              <option value='Safety'>Safety</option>
              <option value='Cleanliness'>Cleanliness</option>
              {/* Add more categories as needed */}
            </select>
          </label>
        </div>
      </nav>

      {/* Main Content */}
      <div className='posts-list'>
        <h3 className='posts-list-title'>All Posts</h3>
        <div className='posts-table-container'>
          <table className='posts-table'>
            <thead>
              <tr>
                <th>Post ID</th>
                <th>Title</th>
                <th>User Name</th>
                <th>Image</th>
                <th>Status</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.map(post => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.data.input}</td>
                  <td>{post.data.displayName}</td>
                  <td>
                    {post.data.img && <img src={post.data.img} alt='Post Image' className='post-image' />}
                  </td>
                  <td>
                    <select
                      className={`post-status-dropdown ${postStatuses[post.id].toLowerCase()}`}
                      value={postStatuses[post.id] || 'Incomplete'}
                      onChange={(e) => handleStatusChange(post.id, e)}
                    >
                      <option value='Incomplete'>Incomplete</option>
                      <option value='In Progress'>In Progress</option>
                      <option value='Completed'>Completed</option>
                    </select>
                  </td>
                  <td>
                    <button onClick={() => handleNotePopup(post.id)} className='note-btn'>
                      <RiStickyNoteLine />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <h3>Category Distribution Chart</h3>
      <button onClick={() => setShowChart(!showChart)} className="view-analytics-btn"> 
        {showChart ? 'Hide Analytics' : 'View Analytics'}
      </button>
      {showChart && <Chart data={chartData} />}

      {/* Note Popup */}
      {showNoteInput && (
        <div className='note-input-container'>
          <TextareaAutosize
            className='note-input'
            placeholder='Add note...'
            value={noteInput}
            onChange={handleNoteChange}
          />
          <button onClick={saveNote} className='save-note-btn'>Save</button>
        </div>
      )}

      {selectedPostNote !== '' && (
        <div className='note-popup'>
          <div className='note-popup-content'>
            <span className='close-note' onClick={() => setSelectedPostNote('')}>&times;</span>
            <h3>Note</h3>
            <p>{selectedPostNote}</p>
          </div>
        </div>
      )}
      
      <ToastContainer />
    </div>
  );
};

export default AuthorityHome;
