import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import './Notification.css';

const Notifications = () => {
  const { currentUser } = useContext(AuthContext);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Set up a Firestore query to listen for status updates
    const postsCollection = collection(db, 'posts');
    const q = query(postsCollection, orderBy('timestamp', 'desc')); // Assuming 'timestamp' field for sorting
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const updatedNotifications = [];
      querySnapshot.forEach((doc) => {
        const postData = doc.data();
        if (postData.uid === currentUser.uid) {
          updatedNotifications.push({
            id: doc.id,
            message: `Your post ${postData.title} has been ${postData.status}`, // Customize the message based on your data structure
            time: new Date(postData.timestamp.toMillis()).toLocaleString(),
          });
        }
      });
      setNotifications(updatedNotifications);
    });

    return () => unsubscribe(); // Clean up the listener on component unmount
  }, [currentUser.uid]);

  return (
    <div className="notificationContainer">
      <h1 className="notificationTitle">Notifications Page</h1>
      <div className="notificationList">
        {notifications.map((notification) => (
          <div key={notification.id} className="notificationItem">
            <div className="notificationText">{notification.message}</div>
            <div className="notificationTime">{notification.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
