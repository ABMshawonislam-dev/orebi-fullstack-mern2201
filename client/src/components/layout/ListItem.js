import React from "react";
import { Link } from "react-router-dom";
const ListItem = ({ itemname, className,href }) => {
  return (
    <li className={className}>
      <Link to={href}>{itemname}</Link>
    </li>
  );
};

export default ListItem;
