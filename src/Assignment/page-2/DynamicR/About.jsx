import React, { useState } from "react";

const About = () => {
  const [fetchData1, setFetchData1] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);
  const fetchData = () => {
    if (!isDataFetched) {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setFetchData1(data);
          setIsDataFetched(true);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  };
  const [currentPage, setCurrentPage] = useState(1);
  const recrodsPage = 16;
  const lastIndex = currentPage * recrodsPage;
  const firstIndex = lastIndex - recrodsPage;
  const recrods = fetchData1.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(fetchData1.length / recrodsPage);
  const numbers = [...Array(5)];
  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  function changeCpage(id) {
    setCurrentPage(id);
  }
  const nextPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="mt-2">
      <h1 className="text-center">Users Posts</h1>

      <button onClick={fetchData}>Fetch Data</button>
      <div className="Tcard mt-5">
        {recrods.map((item) => (
          <div key={item.id} className="card">
            {item.title}
          </div>
        ))}
      </div>
      <nav>
        <ul className="pagination mt-5 mb-5">
          <li className="page-item  ">
            <a className="page-link" href="#" onClick={prePage}>
              Previous
            </a>
          </li>

          {
            // numbers.map((n,i)=>{
            <a className="page-link" href="">
              {currentPage}
            </a>
            //  <li className={`page-item ${currentPage === n ? 'active':" "}`} key={i}>  <a href="#" className='page-link' onClick={()=>changeCpage(n)}>{n}</a>

            //   </li>
            //  })
          }

          <li className="page-item">
            <a className="page-link" href="#" onClick={nextPage}>
              Next
            </a>
   </li>
   </ul>
   </nav>
   </div>
   );
   };
export default About;
