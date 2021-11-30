import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Pagination from 'rc-pagination';
import UserList from "./admin/components/UserList";
import AddUser from "./admin/components/AddUser";
import PostsList from "./admin/components/PostsList";
import EditPost from "./admin/components/EditPost";
import UpdateData from "./admin/components/UpdateData";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route path="/" exact component={UserList} />
        <Route path="/UserList" exact component={UserList} />
       <Route path="/PostsList" exact component={PostsList} />
       <Route path="/EditPost/:id" exact component={EditPost} />
       <Route path="/UpdateData/:id" exact component={UpdateData} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
