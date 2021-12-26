import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ALlProducts() {
  const [myData, setMyData] = useState([]);

  const FetchingProucts = () => {
    return axios.get("http://localhost:3000/products");
  };
  useEffect(() => {
    FetchingProucts().then((res) => setMyData(res.data));
  }, []);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <td style={{ border: "2px solid black", padding: "10px" }}>
        <tr>Product Name</tr>
        <hr />
        {myData.map((item) => {
          return <tr>{item.name}</tr>;
        })}
      </td>
      <td style={{ border: "2px solid black", padding: "10px" }}>
        <tr>Price</tr>
        <hr />
        {myData.map((item) => {
          return <tr>{item.price}</tr>;
        })}
      </td>
      <td style={{ border: "2px solid black", padding: "10px" }}>
        <tr>Full Information</tr>
        <hr />
        {myData.map((item) => {
          return (
            <tr>
              <Link key={item.id} to={"/products/" + item.id}>
                More Details
              </Link>
            </tr>
          );
        })}
      </td>
    </div>
  );
}

export default ALlProducts;
