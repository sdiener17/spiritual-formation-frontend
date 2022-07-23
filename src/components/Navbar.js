import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  //var to get the current page the user is on for highlighting that page
  //on the navbar
  let pageName = location.pathname.replaceAll("/", "");
  const [homeLit, setHomeLit] = useState(false);
  const [registerLit, setRegisterLit] = useState(false);
  //the current page the user is on. If they're on the homepage, replace
  //the empty string with "home", otherwise use 'pageName'
  const [currentPage, setCurrentPage] = useState(
    pageName === "" ? "home" : pageName
  );
  return (
    <SideWrapper>
      <ul>
        <li key={1}>
          <Link
            to="/"
            className={
              "sidebar-link " + (currentPage === "home" ? "lit" : "unlit")
            }
            id="homeLink"
            onClick={() => setCurrentPage("home")}
          >
            Home
          </Link>

          <Link
            to="/quiettime"
            className={
              "sidebar-link " + (currentPage === "quiettime" ? "lit" : "unlit")
            }
            id="quiettimeLink"
            onClick={() => setCurrentPage("quiettime")}
          >
            Quiet Time
          </Link>

          <Link
            to="/scripmem"
            className={
              "sidebar-link " + (currentPage === "scripmem" ? "lit" : "unlit")
            }
            id="scripmem"
            onClick={() => setCurrentPage("scripmem")}
          >
            Scrip Mem
          </Link>

          <Link
            to="/scripwriting"
            className={
              "sidebar-link " + (currentPage === "scripwriting" ? "lit" : "unlit")
            }
            id="scripwriting"
            onClick={() => setCurrentPage("scripwriting")}
          >
            Scrip Writing
          </Link>
          <Link
            to="/insights"
            className={
              "sidebar-link " + (currentPage === "insights" ? "lit" : "unlit")
            }
            id="insights"
            onClick={() => setCurrentPage("insights")}
          >
            Insights
          </Link>

          <Link
            to="/studies"
            className={
              "sidebar-link " + (currentPage === "studies" ? "lit" : "unlit")
            }
            id="studies"
            onClick={() => setCurrentPage("studies")}
          >
            Studies
          </Link>


        </li>
      </ul>
    </SideWrapper>
  );
}

const SideWrapper = styled.div`
  display: flex;
  transition: var(--mainTransition);
  font-size: 20px !important;

  margin: 10px;
  ul {
    list-style-type: none;
    padding: 0 !important;
  }
  .sidebar-link {
    //display: block;
    text-transform: capitalize;
    padding: 0.5rem 1rem;
    font-size: 20px;
    //transition: var(--mainTransition);
    text-decoration: none;
    border-radius:10px;
    margin-right:5px;
    //width: 80%;
  }
  .sidebar-link:hover {
    background: none;
    color: var(--lightGrey);
    //padding: 0.5rem 1.5rem 0.5rem 1.5rem;
    text-decoration: none;
  }
  .lit {
    border-radius: 10px;
    color: var(--lightGrey);
    background: var(--siteColor3);
  }
  .unlit {
    color: var(--lightGrey);
    background: var(--siteColor2);
  }
`;
