import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userInputValue } from "../../redux/user-value-action";
import { addUserAction } from "../../redux/add-user-action";

import "./AddUser.scss"

const AddUser = (props) => {

  const [user, setUser] = useState({
    name: useSelector((state) => state.addUserReducer.user.name),
    username: useSelector((state) => state.addUserReducer.user.username),
    avatar: useSelector((state) => state.addUserReducer.user.avatar)
  })

   const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userInputValue());
    dispatch(addUserAction());
  }, [dispatch]);

  const handleChange = event => {
    setUser({...user, [event.target.name]: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUserAction(user));
    event.target.reset();
}

    return (
      <div className="wrapper">
      <form className="user-form" onSubmit={handleSubmit}>
        <h2>Please enter values to create a new user </h2>
        <input className="user-form__avatar" type="url" name="avatar" id="avatar" size="50" placeholder="Add a link to the user avatar" 
          pattern="https?://.+" title="Link must includes http://" onChange={handleChange} />
        <input className="user-form__name" type="text" name="name" id="name" size="50" placeholder="Enter the user name" 
          onChange={handleChange} />
        <input className="user-form__username" type="text" name="username" id="username" size="50" placeholder="Enter the username" 
          pattern="^@\w+$" title="Username must starts from @" onChange={handleChange} />
        <button className="user-form__button-confirm" type="submit" value="Submit">Confirm</button> 
        </form>
      </div>
    )
}

export default AddUser;