import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <a href="https://www.vimigoapp.com/" className="brand-link">
            <img
              src="/logo-horizontal.png"
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">Vimigo.com</span>
          </a>

          <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
               
              </div>
              <div className="info">
                <a href="#" className="d-block">
                  CRUD App by Mazen ツ
                </a>
              </div>
            </div>

            <div className="form-inline">
              <div className="input-group" data-widget="sidebar-search">
                <input
                  className="form-control form-control-sidebar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <button className="btn btn-sidebar">
                    <i className="fas fa-search fa-fw" />
                  </button>
                </div>
              </div>
            </div>

            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li className="nav-item menu-open">
                  <a href="#" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                      Dashboard
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                </li>
                <li className="nav-item">
                <Link to="/UserList" className="nav-link">
                    <i className="nav-icon fas fa-chart-pie" />
                    <p>
                     UserList
                      <i className="right fas fa-angle-left" />
                    </p>
                  </Link>
                  </li>

                <li className="nav-item">
                  <Link to="/PostsList" className="nav-link">
                    <i className="nav-icon fas fa-chart-pie" />
                    <p>
                    Posts List
                      <i className="right fas fa-angle-left" />
                    </p>
                  </Link>
                  
                </li>
                

                <li className="nav-item">
                  <a href="https://adminlte.io/docs/3.1/" className="nav-link">
                    <i className="nav-icon fas fa-file" />
                    <p>Documentation</p>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    );
  }
}

export default Sidebar;
