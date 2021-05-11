// import React, { Component } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/get-users-action";
import "./Users.scss"

const Users = () => {

  const users = useSelector((state) => state.getUsersReducer.users);
  const loading = useSelector((state) => state.getUsersReducer.loading);
  const error = useSelector((state) => state.getUsersReducer.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

    return (
      <div className="wrapper">
        {loading && <div>Please wait. Loading carries on...</div>}
        {!loading && error && <div>Oops! Something went wrong...</div>}
          {users.map(user => {
            return(
              <div className="user-card" key = {user.id}>
                <div className="user-card__avatar"><img src={user.avatar} alt="avatar" /></div>
                <div className="user-card__name">Name: {user.name}</div>
                <div className="user-card__username">Username: {user.username}</div>
              </div>
            )
          })}
      </div>
    )
}

export default Users;