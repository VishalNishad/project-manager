import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../features/userSlice";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button } from "@mui/material";


const ProfileHeader = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <HeaderContainer>
      <div className="">
        <p className="username">
          Welcome, <b>{user.username}</b>
        </p>
      </div>
      <div className="">
        <Button
          variant="outlined"
          startIcon={<LogoutIcon />}
          color="error"
          onClick={logoutHandler}
        >
          Log Out
        </Button>
      </div>
    </HeaderContainer>
  );
};

export default ProfileHeader;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .username {
    font-size: 1.6rem;
    font-family: sans-serif;
  }

  .btnLogout {
    display: flex;
    align-items: center;
    gap: 0 5px;
    font-size: 16px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:hover {
      color: tomato;
    }
  }
`;
