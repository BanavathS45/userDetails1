import React, { useState } from "react";
//
import { useParams } from "react-router-dom";
import Details from "./Details";
import { data } from "./CommentData";
const ListItem = ({ eachComment, addtoData }) => {
  return (
    <div className="comment">
      {eachComment.map((pro) => {
        return (
          
            <li className="comment-container" key={pro.id}>
              <div className="comment-header">
                <h3 className="email">{pro.email}</h3>
                <h3 className="name">{pro.name}</h3>
              </div>
              <div className="message">
                <p className="body">{pro.body}</p>
              </div>
            <button onClick={() => addtoData(pro)}>add</button>
            </li>
          
        );
      })}
    </div>
  );
};

export default ListItem;
