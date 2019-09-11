import React from "react";

function Heading(props) {
  return (
    <h3 className={"Heading Heading--h3 Heading--background " + props.className}>
      {props.title}
    </h3>
  );
}

export default Heading;
