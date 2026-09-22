import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - logo
 *  - Nav bar
 *
 * Body
 *  - Search
 *  - RestaurantCainer
 *      - RestaurantCard
 *
 * Footer
 *  - Copywrite
 *  - Links
 *  - Contact
 *  - address
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png"
        ></img>
      </div>

      <div className="nav-items">
        <ul>
          <li> Home</li>
          <li> About us</li>
          <li> Contact us</li>
          <li> Cart</li>
          <li> Help</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card" style={{ backgroundColor: "#DEDEDE" }}>
      <h3>Roast CCx</h3>
      <h4>4.0 Stars</h4>
      <h4>40 Mins</h4>
      <h4>Cafe, Desserts, South Indian</h4>
      <h4>Banjara Hills</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />

      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); // object => html element
