
import "./AuthorityHome.css"
import { Posts } from '../../data';
import { collection, doc, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../firebase';


import Feed from '../../Components/Feed/Feed'
import Post from '../../Components/Post/Post';
import { useContext, useEffect, useState} from "react";
import { Email } from "@mui/icons-material";
import { AuthContext } from "../../Context/AuthContext";
import AuthorityPost from "../../Components/AuthorityPost/AuthorityPost";

function AuthorityHome() {
  const [posts, setPosts] = useState([])
  const [station, setStation] =useState(null)
  const { currentUser } = useContext(AuthContext);

  useEffect(()=>{
    const unSub = onSnapshot(collection(db,"posts"), (snapshot)=>{
      setPosts(snapshot.docs.map(doc=>({id: doc.id,data: doc.data()})))
    })
    return ()=> {
      unSub();
    }
  })
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const q = query(collection(db, 'Authority'), where('email', '==',currentUser.email));
        const querySnapshot = await getDocs(q);
        
        querySnapshot.forEach((doc) => {
          // Here, assuming there is only one document with the matching email
         const authorityData= doc.data()
         setStation(authorityData.station)

        });
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    fetchUser(); // Call the function to fetch the document
  }, [currentUser.email]); // Add emailId to the dependency array if you want to fetch when emailId changes

  return (

    <div>
       {posts.filter((post)=>(post.data.station==station)).sort((a,b)=>(b.data.timestamp - a.data.timestamp)).map((p) => (
          <AuthorityPost key={p.id} post={p}/>
        ))}
       
    </div>
  )
}

export default AuthorityHome