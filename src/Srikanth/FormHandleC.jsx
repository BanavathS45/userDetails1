import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeLowVision,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
// import swal from "sweetalert2";

const FormHandleC = () => {
  // =========================Style===================================
  const style = {
    width: "100%",
    border: "1px solid gray",
    fontSize: "12px",
  };
  // ==============Get Data Form Local Stroage=================================
  const getData1 = () => {
    const newProductData = localStorage.getItem("UserData");
    return newProductData ? JSON.parse(newProductData) : [];
  };
  // ==============UseStates=================================
  const [list, setList] = useState(getData1());
  const [edit, setEdit] = useState({ id: "", isEditing: false });
  const [search, setSearch] = useState("");
  const [visable, setVisable] = useState(false);
  const [add, setAdd] = useState(false);
  // const [swall, setswall] = useState(false);
  const [getData, setGetData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  // ==============Functions=================================

  // ==============FormSubmit Function=================================
  const formHandle = (e) => {
    e.preventDefault();
    // =======================get Form Input each time============================

    const userData = {
      id: new Date().getTime().toString(),
      name: getData.name,
      email: getData.email,
      password: getData.password,
      phone: getData.phone,
    };

    setList([...list, userData]);
    setEdit(false);
    setVisable("Added Successfully...!", true);
    setAdd(false);
    setTimeout(() => {
      setVisable(false);
    }, 2000);
    // =======================Reset Form Input============================
    setGetData({
      name: "",
      email: "",
      password: "",
      phone: "",
    });

    console.log(list);
  };
  // ==============Insert Data To Local Storage=================================

  useEffect(() => {
    localStorage.setItem("UserData", JSON.stringify(list));
  }, [list]);

  // ==============Delete Function=================================

  const delHandel = (id) => {
    let removeItem = list.filter((each) => {
      return each.id !== id;
    });

    if (window.confirm("Are you sure?")) {
      setList(removeItem);
    } else {
      return false;
    }
  };
  // ==============Adding Function=================================

  const HandleAdd = () => {
    setAdd(true);
  };

  // ==============Cancel Function=================================

  const formCancel = (e) => {
    e.preventDefault();
    setAdd(false);
  };
  // ==============Reset Function=================================

  const formReset = (e) => {
    e.preventDefault();
    setGetData({
      name: "",
      email: "",
      password: "",
      phone: "",
    });
  };
  // ==============Edit Button Function=================================

  const editUserHandler = (id) => {
    alert(id);
    setEdit({ ...edit, id: id, isEditing: true });
    setAdd(true);
    const editble = list.find((item) => item.id === id);
    setGetData({
      ...editble,
      id: editble.id,
      name: editble.name,
      email: editble.email,
      password: editble.password,
      phone: editble.phone,
    });
  };

  // ============== Form Upadte Function=================================
  const formUpdate = (e) => {
    e.preventDefault();
    const upadteData = list.map((eachItem) => {
      if (eachItem.id === edit.id) {
        return {
          id: edit.id,
          name: getData.name,
          email: getData.email,
          password: getData.password,
          phone: getData.phone,
        };
      } else {
        return eachItem;
      }
    });
    setList(upadteData);
    setAdd(false);
    setVisable("Update Successfully...!", true);
    setTimeout(() => {
      setVisable(false);
    }, 2000);
    setGetData({
      id: "",
      name: "",
      email: "",
      password: "",
      phone: "",
    });
    setEdit({ ...edit, isEditing: false });
  };

  // State to track visibility of passwords for each item
  const [passwordVisibility, setPasswordVisibility] = useState(
    Array(list.length).fill(false)
  );
  // ==============Visalble password Function=================================

  const togglePasswordVisibility = (index, id) => {
    const pass = window.prompt("Enter password");
    console.log(index);
    if (pass === "1") {
      const updatedVisibility = [...passwordVisibility];
      updatedVisibility[index] = !updatedVisibility[index];
      setPasswordVisibility(updatedVisibility);
    }
  };
  // ==============Input Form Start  =================================

  return (
    <div id="registar">
      <h3
        style={{ margin: "20px 0 0 30px", color: "blue", cursor: "pointer" }}
        onClick={HandleAdd}
      >
        {add ? "" : " Add+"}
      </h3>
      <p className="visable">{visable} </p>

      {add ? (
        <form
          style={{ width: "40%", margin: "0 86", border: "none" }}
          onSubmit={formHandle}
        >
          <div className="componyDetails">
            <span>WelCome To </span>
            <h1>CGT</h1>
            <p>User Details </p>
          </div>
          <div className="formHandle">
            <h1 style={{ textAlign: "center" }}>Register Form</h1>
            {/* ============================id input================== */}
            {edit.isEditing ? (
              <div className="form-control1  ">
                <input
                  type="text"
                  style={style}
                  name="id"
                  id="id"
                  placeholder="Enter Name..."
                  value={getData.id}
                  disabled
                />
              </div>
            ) : (
              ""
            )}
            {/* ============================Name input================== */}

            <div className="form-control1 mt-3 w-75">
              <input
                style={style}
                type="text"
                name="userName"
                id="username"
                placeholder="Enter Name..."
                value={getData.name}
                onChange={(e) =>
                  setGetData({ ...getData, name: e.target.value })
                }
                autoFocus
                required
              />
            </div>
            {/* ============================Email input================== */}

            <div className="form-control1 mt-3">
              <input
                type="email"
                name="email"
                id="email"
                style={style}
                placeholder="Enter Email..."
                value={getData.email}
                onChange={(e) =>
                  setGetData({ ...getData, email: e.target.value })
                }
                required
              />
            </div>
            {/* ============================Phone input================== */}

            <div className="form-control1 mt-3">
              <input
                type="tel"
                style={style}
                name="phone"
                id="phone"
                placeholder="Enter Mobile Number..."
                pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                value={getData.phone}
                maxLength={12}
                title="Enter 10 Digits"
                onChange={(e) =>
                  setGetData({ ...getData, phone: e.target.value })
                }
                required
              />
            </div>
            {/* ============================Password input================== */}

            <div className="form-control1 mt-3 mb-3">
              <input
                type="password"
                name="password"
                style={style}
                id="password"
                placeholder="Enter Password..."
                value={getData.password}
                pattern=".{6,}"
                title="Minimum of 6 characters"
                // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$"
                onChange={(e) =>
                  setGetData({ ...getData, password: e.target.value })
                }
                required
              />
            </div>
            {/* ================== Submit/Cancel/Reset Buttons ===============*/}
            <div className="sub-Btn">
              {edit.isEditing ? (
                <button type="submit" onClick={formUpdate}>
                  Update
                </button>
              ) : (
                <>
                  <button type="submit">Submit</button>
                  <button type="submit" onClick={formCancel}>
                    Cancel
                  </button>
                  <button type="submit" onClick={formReset}>
                    Reset
                  </button>
                </>
              )}
            </div>
          </div>
        </form>
      ) : (
        ""
      )}
      {/* =======================Serach Input=============== */}
      <div className="search-box mt-3   ">
        <div className="serAnim">
          <FontAwesomeIcon
            icon={faSearch}
            color="#8c8b8b"
            size="sm"
            className="serIcon"
          />
          <input
            type="text"
            name="search"
            className="border "
            id="search"
            placeholder="Serach..."
            onKeyUp={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </div>
      {/* ===========================Table Start================= */}
      {list.length === 0 ? (
        "Record Found"
      ) : (
        <div id="table" style={{ marginTop: "20px" }}>
          <table
            style={{ width: "95%", border: "1px solid gray", margin: "0 auto" }}
          >
            <tr>
              <th>S.No</th>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Password</th>
            </tr>
            {/* ================Filter Data For Serach===================== */}

            {list.filter((fil) => {
              return (
                fil.name.toLowerCase().includes(search.toLowerCase()) ||
                fil.email.toLowerCase().includes(search.toLowerCase()) ||
                fil.phone.toLowerCase().includes(search.toLowerCase())
              );
            }).length == 0 ? (
              <p style={{ color: "red", textAlign: "center" }}>
                User Not Found
              </p>
            ) : (
              // ================Filter Data  =====================
              list
                .filter((fil) => {
                  return (
                    fil.name.toLowerCase().includes(search.toLowerCase()) ||
                    fil.email.toLowerCase().includes(search.toLowerCase()) ||
                    fil.phone.toLowerCase().includes(search.toLowerCase())
                  );
                })
                // =====================Maping List Here==================
                .map((item, index) => {
                  const { id, name, phone, password, email } = item;
                  const showPassword = passwordVisibility[index];

                  return (
                    <tr key={id}>
                      <td>{index + 1}</td>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>{email}</td>
                      <td>{phone}</td>
                      <td style={{ width: "150px" }}>
                        {showPassword ? password : "********"}{" "}
                      </td>

                      <td>
                        {/* ================Eye Show/Hide Icon================= */}
                        <button
                          onClick={() => togglePasswordVisibility(index, id)}
                          style={{
                            position: "relative",
                            right: "5px",
                            backgroundColor: "transparent",
                            color: "black",
                          }}
                        >
                          {showPassword ? (
                            <FontAwesomeIcon icon={faEye} />
                          ) : (
                            <FontAwesomeIcon icon={faEyeLowVision} />
                          )}
                        </button>
                      </td>
                      <td>
                        {/* ==================Edit/Delete Button============= */}
                        <button
                          className="btn btn-success"
                          onClick={() => editUserHandler(id)}
                        >
                          Edit
                        </button>
                        &nbsp;&nbsp;
                        <button
                          onClick={() => delHandel(id)}
                          className="btn btn-danger"
                        >
                          Del
                        </button>
                      </td>
                    </tr>
                  );
                })
            )}
          </table>
        </div>
      )}
    </div>
  );
};
export default FormHandleC;
