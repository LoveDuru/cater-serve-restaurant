import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

function BreadCrumbs() {
  // const []= useState()
  let currentLink = "";
  const location = useLocation();
  console.log(location.pathname);
  console.log(location.pathname.split("/"));
  const crumbs = location.pathname.split("/");
  console.log(crumbs);
  const filteredCrumbs = crumbs.filter((crumb) => crumb != "");
  const BreadCrumbs = filteredCrumbs.map((crumb) => {
    currentLink += `/${crumb}`;
    return (
      <div className="crumb" key={crumbs}>
        <Link to={currentLink}>{crumb}</Link>
      </div>
    );
  });
  // console.log(filteredCrumbs);
  return <div className="breadcrumbs">{BreadCrumbs}</div>;
}

export default BreadCrumbs;
