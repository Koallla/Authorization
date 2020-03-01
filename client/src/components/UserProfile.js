import React from "react";
import Button from "../components/shared/Button";

const UserProfile = ({ user, onLogOut }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <Button label="Log Out" onClick={onLogOut} />
    </div>
  );
};

export default UserProfile;
