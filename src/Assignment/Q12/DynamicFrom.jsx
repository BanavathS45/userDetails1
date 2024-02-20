import React, { useState } from "react";
// import {formVaild} from './Vaildation'
const DynamicFrom = ({ propFrom }) => {
  const [formData, setFormData] = useState({});
  const [userTouch, setuserTouch] = useState(false);
  // const[emailTouch,setemailTouch]=useState(false)
  // const[passwordTouch,setpasswordTouch]=useState(false)
  const handleinputchange = (dataName, value) => {
    const newFormData = { ...formData, [dataName]: value };
    setFormData(newFormData);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  // console.log(propFrom);
  return (
    <div className="Dynamic From ">
      {/* <Button>Hello</Button> */}
      <form onSubmit={handleSubmit}>
        <h2>DynamicFrom</h2>
        {propFrom.map((item, index) => {
          const { id, label, type, validation } = item;
          return (
            <div key={id} className="col-6">
              <label htmlFor={id} className="lebal-control">
                {label}:{" "}
              </label>
              <input
                type={type}
                className="form-control "
                id={id}
                onBlur={() => setuserTouch(true)}
                value={formData[id] || ""}
                onChange={(e) => handleinputchange(id, e.target.value)}
              />
              {userTouch && validation && !validation.isVaild(formData[id]) ? (
                <p style={{ color: "red" }}>{validation.massage}</p>
              ) : (
                userTouch && <p>{validation.success}</p>
              )}
            </div>
          );
        })}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DynamicFrom;
