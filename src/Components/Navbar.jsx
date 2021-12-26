import { Link } from "react-router-dom";

const obj = [
  {
    to: "/",
    title: "Home"
  },
  {
    to: "/products",
    title: "All Products"
  }
  // {
  //   to:"/products/:id",
  //   title: "product"
  // }
];

function Navbar() {
  return (
    <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
      {obj.map((item) => (
        <Link key={item.title} to={item.to}>
          {item.title}
        </Link>
      ))}
    </div>
  );
}

export default Navbar;
