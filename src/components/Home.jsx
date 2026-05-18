import React from "react";
import "../scss/home.scss";
import {
  FaRegComment,
  FaRetweet,
  FaRegHeart,
  FaUpload,
} from "react-icons/fa";

export default function Home() {
  const Posts = [
    {
      id: 1,
      likedBy: "Kieron Dotson and Zack John liked",
      name: "Martha Craig",
      handle: "@craig_love",
      time: "12h",
      content:
        "UXR/UX: You can only bring one item to a remote island...\nWhat do you bring? #TellMeAboutYou",
      comments: 28,
      retweets: 5,
      likes: 21,
      thread: true,
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
      id: 2,
      likedBy: "Zack John liked",
      name: "Maximmilian",
      handle: "@maxjacobson",
      time: "3h",
      content: "Y'all ready for this next post?",
      comments: 46,
      retweets: 18,
      likes: 363,
      avatar: "https://i.pravatar.cc/40?img=2",
    },
  ];

  return (
    <div className="home">
      {Posts.map((post) => (
        <div className="post" key={post.id}>
          
          {/* Avatar */}
          <div className="avatar">
            <img src={post.avatar} alt="avatar" />
          </div>

          {/* Right Side */}
          <div className="post-body">
            
            {post.likedBy && (
              <div className="meta">{post.likedBy}</div>
            )}

            <div className="post-header">
              <span className="name">{post.name}</span>
              <span className="handle">{post.handle}</span>
              <span className="time">· {post.time}</span>
            </div>

            <div className="content">
              {post.content.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>

            <div className="actions">
              <span><FaRegComment /> {post.comments}</span>
              <span><FaRetweet /> {post.retweets}</span>
              <span><FaRegHeart /> {post.likes}</span>
              <span><FaUpload /></span>
            </div>

            {post.thread && (
              <div className="thread">Show this thread</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}