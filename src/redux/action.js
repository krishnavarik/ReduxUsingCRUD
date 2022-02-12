import * as types from "./actionType";
import axios from "axios";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

export const deletedUser = () => ({
  type: types.DELETE_USER,
  // payload: id,
});

export const addUser = () => ({
  type: types.ADD_USER,
  // payload: users,
});

export const userUpdated = () => ({
  type: types.UPDATE_USER,
});

export const editedUser = (user) => ({
  type: types.EDIT_USER,
  payload: user,
});

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:5000/user")
      .then((res) => {
        console.log("res", res.data);
        dispatch(getUsers(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default getUsers;

export const deleteUsers = (id) => {
  return function (dispatch) {
    axios
      .delete(`http://localhost:5000/user/${id}`)
      .then((res) => {
        console.log("res", res.data);
        dispatch(deletedUser());
        dispatch(loadUsers());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addUsers = (users) => {
  return function (dispatch) {
    axios
      .post(`http://localhost:5000/user`, users)
      .then((res) => {
        console.log("res", res.data);
        dispatch(addUser());
        dispatch(loadUsers(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const editUsers = (id) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:5000/user/${id}`)
      .then((res) => {
        console.log("res", res.data);
        dispatch(editedUser(res.data));
        dispatch(loadUsers(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateUser = (user, id) => {
  return function (dispatch) {
    axios
      .put(`http://localhost:5000/user/${id}`, user)
      .then((res) => {
        console.log("res", res.data);
        dispatch(userUpdated(res.data));
        dispatch(loadUsers(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
