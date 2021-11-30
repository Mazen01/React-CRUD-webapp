import React, { Component } from "react";
import {
  createData,
  deleteData,
  getSingledata,
  updateData,
} from "../../api/PostsListApi";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      userId: "",
      body: "",
      title: "",
      modal: true,
    };
  }

  componentDidMount = () => {
    // console.log(this.props);
    getSingledata(this.props.match.params.id).then((res) => {
      this.setState({
        id: res.data.id,
        name: res.data.name,
        title: res.data.title,
        body: res.data.body,
       
      });
      // console.log({ getoneDataonly: res.data });
    });
  };

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value,
    });
  };
  handleTitle = (e) => {
    const value = e.target.value; 
    this.setState({ title: value });
  };

  handleBody = (e) => {
    const value = e.target.value;
    this.setState({ Body: value });
  };
  handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    console.log(this.state);
     updateData(this.state).then((res) => {
      console.log(res);
      this.props.history.push("/PostsList");
      this.setState({
        id: "",
        userId: "",
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

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  handleDelete = () => {
    deleteData(this.props.match.params.id).then((res) => {
      console.log(res);
      if (res) {
        this.props.history.push("/PostsList");
      } else {
        console.log("not able to delete the data");
      }
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />
        <center>
          <h3>Edit Post</h3>
        </center>
        <div
          className="row d-flex justify-content-center"
          style={{ marginLeft: "450px" }}
        >
          {this.state.modal ? (
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="card p-2">
                <div className="card-body d-flex flex-column">
                  <p className="card-title">Id:{this.state.id}</p>
                  <p className="card-title">Title:{this.state.title}</p>
                  <p className="card-text">Body:{this.state.body}</p>
                  
                  <button
                    className="btn btn-warning mb-1"
                    onClick={this.toggle}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={this.handleDelete}
                  >
                    Del
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="card  d-flex" style={{ marginRight: "300px" }}>
              <form onSubmit={this.handleSubmit}>
                

                <div class="form-group">
                  <label for="exampleInputBody">Title</label>
                  <input
                    type="title"
                    class="form-control"
                    id="title"
                    name="title"
                    placeholder="Enter title"
                    value={this.state.title}
                    onChange={this.handleChange}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputBody">Body</label>
                  <input
                    type="body"
                    class="form-control"
                    id="body"
                    name="body"
                    placeholder="Enter body"
                    value={this.state.body}
                    onChange={this.handleChange}
                  />
                </div>

                

                
                <button type="submit" class="btn btn-danger">
                  update
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default EditPost;
