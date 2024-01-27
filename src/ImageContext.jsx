import React from "react";
import Icon from "./Icon";
const ImageContext = React.createContext();
export function ShowImage(props) {
  const [open, toggle] = React.useState(false);
  return (
    <div className={`show-image`}>
      <ImageContext.Provider value={{ open, toggle }}>
        {props.children}
      </ImageContext.Provider>
    </div>
  );
}
function Toggle() {
  const { open, toggle } = React.useContext(ImageContext);
  return (<div className="image-btn" onClick={() => toggle(!open)}>
    <Icon />
  </div>);
}

function List({ children }) {
  const { open } = React.useContext(ImageContext);
  return open && <ul className="image-list">{children}</ul>;
}

function Item({ children }) {
  return <li className="item">{children}</li>;
}

ShowImage.Toggle = Toggle
ShowImage.List = List
ShowImage.Item = Item
