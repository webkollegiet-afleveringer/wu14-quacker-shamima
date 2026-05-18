import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../scss/profile.scss";

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("quacks");

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    navigate("/login");
  };
  return (
    <div className="profile">
      <div className="profile__header">
        <button className="profile__header__back" onClick={() => navigate("/")}>&lt;</button>
        <h2 className="profile__header__title">Digital Goodies Team</h2>
        <button className="profile__header__edit">Edit profile</button>
      </div>

      <div className="profile__banner" />

      <div className="profile__info">
        <div className="profile__avatar">
          <img src="../svg/profile.svg" alt="Profile" />
        </div>

        <div className="profile__details">
          <h3 className="profile__name">Pixsellz</h3>
          <span className="profile__handle">@pixsellz</span>

          <p className="profile__bio">
            Digital Goodies Team - Web & Mobile UI/UX development; Graphics;
            Illustrations
          </p>

          <div className="profile__meta">
            <span>🔗 pixsellz.io</span>
            <span>📅 Joined September 2018</span>
          </div>

          <div className="profile__stats">
            <div className="profile__stat">
              <span className="profile__stat__number">217</span>
              <span className="profile__stat__label">Following</span>
            </div>
            <div className="profile__stat">
              <span className="profile__stat__number">118</span>
              <span className="profile__stat__label">Followers</span>
            </div>
          </div>
        </div>
      </div>

      <div className="profile__tabs">
        <button
          className={`profile__tab ${activeTab === "quacks" ? "active" : ""}`}
          onClick={() => setActiveTab("quacks")}
        >
          Quacks
        </button>
        <button
          className={`profile__tab ${activeTab === "replies" ? "active" : ""}`}
          onClick={() => setActiveTab("replies")}
        >
          Quacks & replies
        </button>
        <button
          className={`profile__tab ${activeTab === "media" ? "active" : ""}`}
          onClick={() => setActiveTab("media")}
        >
          Media
        </button>
        <button
          className={`profile__tab ${activeTab === "likes" ? "active" : ""}`}
          onClick={() => setActiveTab("likes")}
        >
          Likes
        </button>
      </div>

      <div className="profile__post">
        <div className="profile__pinned">📌 Pinned Quack</div>

        <div className="profile__item">
          <div className="profile__item__avatar">
            <img src="../svg/profile.svg" alt="Profile" />
          </div>

          <div className="profile__item__content">
            <div className="profile__item__header">
              <strong>Pixsellz</strong>
              <span>@pixsellz · 7/31/19</span>
            </div>

            <p>
              Scheme Constructor - your ultimate prototyping kit for all UX web
              and mobileapp design!
            </p>

            <a href="#">constructor.pixsellz.io</a>

            <div className="profile__item__hashtags">
              #prototyping #wireframe #uiux #ux
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;