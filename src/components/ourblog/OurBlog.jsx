import React from "react";
import "./Blog.css";
import firstblogimg from "../../assets/img/blog-1.jpg";
import secondblogimg from "../../assets/img/blog-2.jpg";
import thirdblogimg from "../../assets/img/blog-3.jpg";

function OurBlog() {
  return (
    <div className="blog">
      <h2 className="section-title">Our Blog</h2>
      <h2 className="mainsection-header">Be first who reads our news</h2>
      <div className="blog-row">
        <div className="blog-col">
          <div className="img-box">
            <img src={firstblogimg} alt="" />
          </div>
          <div className="blog-news">
            <div className="date">
              <p>16</p> <p>sep</p>
            </div>
            <p className="topic">How to get more taste from your food</p>
          </div>
        </div>
        <div className="blog-col">
          <div className="img-box">
            <img src={secondblogimg} alt="" />
          </div>
          <div className="blog-news">
            <div className="date">
              <p>16</p> <p>sep</p>
            </div>
            <p className="topic">How to get more taste from your food</p>
          </div>
        </div>
        <div className="blog-col">
          <div className="img-box">
            <img src={thirdblogimg} alt="" />
          </div>
          <div className="blog-news">
            <div className="date">
              <p>16</p> <p>sep</p>
            </div>
            <p className="topic">How to get more taste from your food</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurBlog;
