// "use client"
// // import React from 'react'
// // import styles from "./message.module.css"
// // import Image from 'next/image'
// // import { useRouter } from 'next/navigation';
// // import { useState, useEffect } from 'react';


// // const fetchUserMessages = async (userId) => {
// //   try{
// //     const res = await fetch(`/api/messages?userId=${userId}`, {
// //       method: "GET",
// //       headers:{
// //        'Content-Type': 'application/json',
// //        // Add authentication header if needed
// //        // 'Authorization': `Bearer ${token}`
// //       }
// //     })
// //     if(!res.ok){
// //       throw new Error(`HTTP error! status: ${res.status}`); 
// //     }

// //     const messages = await res.json();
// //     return messages;
// //   } catch(error){
// //     // Handle error (e.g., show error message to user)
// //     console.error('Failed to fetch messages:', error);
// //     return [];
// //   }
// // };


// // const UserMessages = ({userId}) => {
// //   const router = useRouter(); 
// //   const [messages, setMessages] = useState([]);
// //   const [loading, setLoading] = useState(false);

// //   // Fetch initial messages
// //   useEffect(() => {
// //     const loadMessages = async () => {
// //       setLoading(true);
// //       const data = await fetchUserMessages(userId);
// //       setMessages(data);
// //       setLoading(false);
// //     };
    
// //     loadMessages();
// //   }, [userId]);

// //   // Handle opening individual message thread
// //   const openMessageThread = (friendId) => {
// //     router.push(`/messages/${friendId}`)
// //   };

// //   if (loading) return <div className={styles.loading}>Loading messages...</div>;
// //   if (error) return <div className={styles.error}>{error}</div>;



// //   return (
// //     <div className={styles.container}>
// //       <h1 className={styles.title}>Your Conversations</h1>
      
// //       {messages.map(message => (
// //         <div 
// //           key={message.friendId}
// //           className={styles.messageItem} 
// //           onClick={() => openMessageThread(message.friendId)}
// //         >
// //           <div className={styles.userInfo}>
// //             <Image 
// //               src={message.friend.profilePicture || '/default-user.webp'} 
// //               alt={message.friend.name} 
// //               width={50} 
// //               height={50}
// //               className={styles.userImage}
// //             />
// //             <div className={styles.textContainer}>
// //               <h3 className={styles.username}>{message.friend.name}</h3>
// //               <p className={styles.preview}>{message.latestMessage}</p>
// //             </div>
// //           </div>
// //           <span className={styles.timestamp}>
// //             {new Date(message.timestamp).toLocaleTimeString()}
// //           </span>
// //         </div>
// //       ))}
// //     </div>
// //   )
// // }

// // export default UserMessages