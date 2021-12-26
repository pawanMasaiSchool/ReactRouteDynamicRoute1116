import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

function ProductCard() {
  const param = useParams();

  const [productDetails, setProductDetails] = useState({});

  const [isMounted, setIsMounted] = useState(false);

  const ref = useRef(null);

  const FetchingProuct = () => {
    return axios.get(`http://localhost:3000/products/${param.id}`);
  };

  const handleFetching = async () => {
    try {
      await FetchingProuct().then((res) => {
        setProductDetails(res.data);
        ref.current = null;
      });
    } catch (err) {
      console.log("you got an error", err);
    }
  };
  // console.log("this",productDetails);
  useEffect(() => {
    handleFetching();

    return () => {
      if (!isMounted) {
        ref.current = true;
      }
    };
  });

  return (
    <>
      <div>This is of id {param.id}</div>
      <br />
      <div
        style={{
          border: "5px solid green",
          display: "flex",
          flexDirection: "column",
          width: "200px",
          margin: "auto"
        }}
      >
        <div>
          <h2>Name: {productDetails.name}</h2>
        </div>
        <div>
          <h2>Price: ₹{productDetails.price}</h2>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
