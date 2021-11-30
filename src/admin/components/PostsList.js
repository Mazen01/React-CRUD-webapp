import axios from "axios";
import React, { useState, useEffect, Component } from "react";
import { Link } from "react-router-dom";
import { createData } from "../../api/PostsListApi";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";




class PostsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allList: [],
      id: "",
      title: "",
      body: "",

    };
  }



  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.id]: value,
    });
  };
 

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    createData(this.state).then((res) => {
      console.log(res);
      this.setState({
        id: "",
      title: "",
      body: "",
      });
      if (res && res.success) {
        console.log("working");
      } else {
        console.log("something wrong");
      }
    });
  };






  componentDidMount() {
    axios.get("https://gorest.co.in/public/v1/posts").then((res) => {
      console.log(res);
      this.setState({
        allList: res.data,
        pageno: res.page,
      });
      console.log({ allList: res.data });
    });
  }
 

  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />
        <div className="content-wrapper">
          <div className="container">
            <div className="row pt-3 mb-2">
              <div className="col-md-9">
                {" "}
                <h1 className="text-left">List of Posts</h1>
              </div>
              <div className="col-md-3">
                <form class="">
                  {" "}
                  <div className="input-group input-group-sm">
                    <input
                      className="form-control form-control-navbar"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-navbar" type="submit">
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Link to="/PostsList">
                  <button
                    type="button"
                    className="btn btn-success float-right mb-2"
                    data-toggle="modal"
                    data-target="#myModal"
                  >
                    Add New Post
                  </button>
                </Link>
              </div>
            </div>

            <div className="row">
              {this.state.allList.data &&
                this.state.allList.data.length > 0 &&
                this.state.allList.data.map((ele, index) => (
                  <div
                    className="col-md-3 d-flex align-items-stretch"
                    key={index}
                  >
                    <div className="card" style={{ width: "100%" }}>
                      <div className="card-body d-flex flex-column">
                        <p className="card-title">Id:{ele.id}</p>
                        <p className="card-text">Title:{ele.title}</p>
                        <p className="card-text">Body:{ele.body}</p>
                        
                        <Link
                          to={`/EditPost/${ele.id}`}
                          className="btn btn-danger align-self-center"
                          onClick={this.handleEditPost}
                          style={{ marginTop: "auto" }}
                        >
                          Edit/Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        
        <div class="modal" id="myModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Add User</h4>
                <button type="button" class="close" data-dismiss="modal">
                  
                </button>
              </div>

              <div class="modal-body">
                <div class="container">
                  <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                      <label for="id">id:</label>
                      <input
                        type="id"
                        class="form-control"
                        id="id"
                        placeholder="Enter post Id"
                        name="id"
                        value={this.state.id}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div class="form-group">
                      <label for="title">Title:</label>
                      <input
                        type="title"
                        class="form-control"
                        id="title"
                        placeholder="Enter Post Title"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div class="form-group">
                      <label for="body">Body:</label>
                      <input
                        type="body"
                        class="form-control"
                        id="body"
                        placeholder="Enter Post Body"
                        name="body"
                        value={this.state.body}
                        onChange={this.handleChange}
                      />
                    </div>
                   
                 
                    <button type="submit" class="btn btn-dark">
                      Submit
                    </button>
                  </form>
                </div>
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default PostsList;
