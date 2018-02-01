import React from "react";
import ReactDOM from "react-dom";

const Layout = props => {
  return (
    <div>
      <p>header</p>
      {props.children}
      <p>footer</p>
    </div>
  );
};

ReactDOM.render(
  <Layout>
    <div>
      <h1>Page Title</h1>
      <p>This is my page</p>
    </div>
  </Layout>,
  document.getElementById("app")
);
