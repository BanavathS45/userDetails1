import React from "react";
import { Link } from "react-router-dom";

const Project = () => {
  const data = [
    {
      image: "./P_assets/project1.png",
      title: "title",
      para: "   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis incidunt illum repellat eaque aliquid tenetur, sapiente deserunt ad delectus temporibus!",
      view: "view",
      source: "source",
    },
    {
      image: "./P_assets/project2.png",
      title: "title",
      para: "   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis incidunt illum repellat eaque aliquid tenetur, sapiente deserunt ad delectus temporibus!",
      view: "view",
      source: "source",
    },
    {
      image: "./P_assets/project3.png",
      title: "title",
      para: "   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis incidunt illum repellat eaque aliquid tenetur, sapiente deserunt ad delectus temporibus!",
      view: "view",
      source: "source",
    },
  ];
  return (
    <div>
      <div className="project-title">
        <h1>PROJECTS</h1>
      </div>
      <div id="project">
        {data.map((items) => {
          const { image, title, para, view, source } = items;
          return (
            <>
              <div className="card" style={{ width: "20rem" }}>
                <img src={image} className="card-img-top" alt="project1.png" />
             
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{para}</p>
                  <div className="card-btn">
                    <Link to={view} className="btn btn-primary">
                      View
                    </Link>
                    <Link to={source} className="btn btn-primary">
                      Source
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
