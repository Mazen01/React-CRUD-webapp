import React, { Component } from "react";
import { deleteData, getSingledata } from "../../api/PostsListApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

class UpdateData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getoneDataonly: [],
    };
  }

  componentDidMount = () => {
    // console.log(this.props);
    getSingledata(this.props.match.params.id).then((res) => {
      this.setState({
        getoneDataonly: res.data,
      });
      console.log({ getoneDataonly: res.data });
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
          <h3>UpdateProfile</h3>
        </center>
        <div
          className="row d-flex justify-content-center"
          style={{ marginLeft: "450px" }}
        >
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="card p-2">
              <div className="card-body d-flex flex-column">
                <p className="card-title">Id:{this.state.getoneDataonly.id}</p>
                <p className="card-title">
                  Id:{this.state.getoneDataonly.id}
                </p>
                <p className="card-text">
                  Title:{this.state.getoneDataonly.title}
                </p>
                <p className="card-text">
                  Body:{this.state.getoneDataonly.body}
                </p>
                
                <button className="btn btn-danger" onClick={this.handleDelete}>
                  update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateData;
