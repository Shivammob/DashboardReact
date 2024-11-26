import React from "react";
import back from "@/assets/images/back.svg";
import refresh from "@/assets/images/refresh.svg";
import { NavLink } from "react-router-dom";

function ArticleEditorsTab() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
        <h1 className="mb-0">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="d-flex align-items-center text-reset"
          >
            <img src={back} alt="back" className="img-fluid pe-2" />
            Article Editor Page
          </a>
        </h1>
        <a href="#" onClick={(e) => e.preventDefault()} className="me-2">
          <img src={refresh} alt="refresh" className="img-fluid" />
        </a>
      </div>
      <div className="nav-lists bg-grey mb-4 p-3 p-md-4">
        <ul className="bg-white d-flex align-items-center p-0 mb-0">
          <li>
            <NavLink to="/article-editors">
              Articles
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories">
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink to="/author">
              Author
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-new-article">
              Add New Article
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ArticleEditorsTab;
