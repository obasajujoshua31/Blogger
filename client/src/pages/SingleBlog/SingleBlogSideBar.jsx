import React from "react";
import ProfileCard from "./ProfileCard";
import RecentPostCard from "./RecentPostCard";

function SingleBlogSideBar(props) {
  return (
    <div>
      <ProfileCard />
      <RecentPostCard articles={props.articles} />
    </div>
  );
}

export default SingleBlogSideBar;
