/* eslint-disable react/prop-types */
// eslint-disable

import React from "react";

import reactImage from "../../assets/react-image.png";
import { AiFillFacebook } from "react-icons/ai";

import "./card.css";

const BlogCard = (props) => {
  // eslint-disable-next-line react/prop-types
  console.log(props.post.image);
  return (
    <div className="card">
      {/* <img
        src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1279225/retina_1708x683_0521-react-redux-and-immutablejs-Waldek_Newsletter-993b50f4ae56e9ee6e024a309c23a6c4.png"
        alt="React image"
      /> */}

      {/* <img src="/react-image.png" alt="React" /> */}
      <img src={reactImage} alt="React" />

      <h1>{props.post.title}</h1>

      <p>{props.post.content}</p>
      <button>Read more</button>
      {/* <AiFillFacebook className="icon" /> */}
    </div>
  );
};

export default BlogCard;
