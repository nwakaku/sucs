import React from "react";
import "./UserProfile.css";

const UserProfileNav = ({ activeUserTab, setActiveUserTab }) => {
  return (
    <div className="flex w-full justify-between text-center bg-lightBlue/20 rounded-lg mt-8 text-textColor">
      <button
        onClick={() => setActiveUserTab("exclusiveFeed")}
        className={`w-full min-w-max p-3 rounded-lg text-sm uppercase tracking-widest hover:text-sucsBlue hover:underline hover:underline-offset-8 ease-in-out duration-300 ${
          activeUserTab === "exclusiveFeed" ? "text-sucsBlue" : ""
        }`}
      >
        Member Posts
      </button>
      <button
        onClick={() => setActiveUserTab("publicFeed")}
        className={`w-full min-w-max p-3 rounded-lg text-sm uppercase tracking-widest hover:text-sucsBlue hover:underline hover:underline-offset-8 ease-in-out duration-300 ${
          activeUserTab === "publicFeed" ? "text-sucsBlue" : ""
        }`}
      >
        Public Feed
      </button>
      <button
        onClick={() => setActiveUserTab("tweetFeed")}
        className={`w-full min-w-max p-3 rounded-lg text-sm uppercase tracking-widest hover:text-sucsBlue hover:underline hover:underline-offset-8 ease-in-out duration-300 ${
          activeUserTab === "tweetFeed" ? "text-sucsBlue" : ""
        }`}
      >
        Tweets
      </button>
    </div>
  );
};

export default UserProfileNav;
