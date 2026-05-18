import { useState } from "react";
import Footer from "../html/footer";
import Header from "../html/header";

export default function Notifications() {
  const [activeTab, setActiveTab] = useState("all");

  const notifications = [
    {
      id: 1,
      type: "mention",
      user: "Mariane",
      handle: "@marianeee",
      content:
        "Check out our new article “Top Icons Packs and Resources for Web”. You are in!",
      time: "Jan 21",
      tab: "mentions",
    },
    {
      id: 2,
      type: "post",
      user: "UX Upper",
      handle: "@uxupper",
      content:
        "Creating meaningful experiences: Introduction to UX design",
      time: "5h",
      tab: "all",
    },
    {
      id: 3,
      type: "like",
      user: "Zack John",
      handle: "@zackjohn",
      content: "liked your post",
      time: "3h",
      tab: "all",
    },
  ];

  const filtered =
    activeTab === "all"
      ? notifications
      : notifications.filter((n) => n.tab === "mentions");

  return (
    <>
      <Header />

      <div className="notifications-container">

        {/* Title */}
        <div className="notifications-header">
          <h2>Notifications</h2>
        </div>

        {/* Tabs */}
        <div className="notifications-tabs">
          <button
            className={activeTab === "all" ? "active" : ""}
            onClick={() => setActiveTab("all")}
          >
            All
          </button>
          <button
            className={activeTab === "mentions" ? "active" : ""}
            onClick={() => setActiveTab("mentions")}
          >
            Mentions
          </button>
        </div>

        {/* List */}
        <div className="notifications-list">
          {filtered.map((item) => (
            <div key={item.id} className="notification-item">
              
              <div className="notification-content">
                <div className="notification-user">
                  <strong>{item.user}</strong>{" "}
                  <span className="handle">{item.handle}</span>
                </div>

                <div className="notification-text">
                  {item.content}
                </div>

                <div className="notification-time">
                  {item.time}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      <Footer />
    </>
  );
}