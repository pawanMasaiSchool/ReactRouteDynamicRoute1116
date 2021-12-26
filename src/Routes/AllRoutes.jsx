import { Switch } from "react-router-dom";
import ALlProducts from "../Pages/AllProducts";
import ProductCard from "../Pages/Card";

const { Route } = require("react-router-dom");

function ALlRoutes() {
  return (
    <Switch>
      <Route path="/" exact>
        <h1>Home</h1>
      </Route>
      <Route exact path="/products">
        <ALlProducts />
      </Route>
      <Route path="/products/:id">
        <ProductCard />
      </Route>
    </Switch>
  );
}

export default ALlRoutes;
