import React from "react";
import "../css/home.css";

// const Home_blob1 = () => (
//   <svg
//     width="458"
//     height="359"
//     viewBox="0 0 458 359"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       id="home_blob_1"
//       d="M356.128 2.02416C399.428 -7.97584 440.928 20.3242 453.328 59.4242C465.728 98.5242 449.128 148.524 433.428 189.424C417.628 230.324 402.828 262.224 370.928 267.624C339.028 273.024 290.128 252.024 262.628 268.924C235.028 285.824 228.828 340.724 214.328 354.924C199.828 369.124 177.228 342.724 166.228 316.224C155.228 289.724 156.028 263.124 126.028 243.524C96.0285 223.824 35.2285 211.224 11.8285 185.024C-11.4715 158.824 2.42846 119.224 29.4285 94.3242C56.4285 69.5242 96.5285 59.5242 130.828 64.4242C165.228 69.2242 193.828 88.8242 230.728 74.6242C267.728 60.3242 312.828 12.0242 356.128 2.02416Z"
//       fill="#0086AC"
//     />
//   </svg>
// );

const Home = ({ details }) => {
  return (
    <>
      <section id="home__page">
        {/* <Home_blob1 /> */}
        <p className="home__page-welcome">Welcome</p>
        <h1 className="home__page-userName">
          {details.name || "You are not Logged in"}
        </h1>
        <p className="home__page-welcome">
          {details.name ? "Happy to see you!" : "Please Login or register"}
        </p>
        <div className="testing"></div>
      </section>
    </>
  );
};

export default Home;
