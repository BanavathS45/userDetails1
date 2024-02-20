import React, { useState } from "react";

const UseState = () => {
  const Userdata = [
    { id: 1, name: "Prashanth", age: 25 },
    { id: 2, name: "Nadhiya", age: 27 },
    { id: 3, name: "Spandana", age: 28 },
    { id: 4, name: "Anil", age: 24 },
  ];
  const [data, setData] = useState(Userdata);
  const [show, setShow] = useState(false);
  const removeperson = (parseInt) => {
    const deleteperson = data.filter((val) => {
      return val.id !== parseInt;
    });
    setData(deleteperson);
    // console.log(...deleteperson);

    console.log(parseInt);
  };

  console.log(data);
  const hideshow = () => {
    setShow(!show);
  };
  return (
    <>
      <div>
        {data.map((eachPerson) => {
          return (
            <div className="details" key={eachPerson.id}>
              <p>
                Name : <strong>{eachPerson.name}</strong>
              </p>
              <p>Age :{eachPerson.age}</p>
              <button onClick={() => removeperson(eachPerson.id)}>
                Remove
              </button>
            </div>
          );
        })}
      </div>
      <div className="show">
        <button onClick={hideshow}>{ show ? "hide":"show"}</button>
        {show && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint natus
            nam reiciendis eum eligendi, molestiae illum molestias voluptates
            similique, magnam ratione deleniti quisquam ducimus qui accusantium
            corrupti quasi in vero. Corporis iste rerum hic accusantium possimus
            omnis ea dolorem, voluptatibus quasi blanditiis? Qui, enim?
            Inventore, praesentium quia? Assumenda, dolorum dignissimos!
          </p>
        )}
      </div>
    </>
  );
};

export default UseState;
