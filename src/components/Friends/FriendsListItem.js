import React from "react";
import PropTypes from "prop-types";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="friends-item">
      <span
        className={`friends-status ${isOnline ? "online" : "offline"}`}
      ></span>
      <img
        className="friends-avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="friends-name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
