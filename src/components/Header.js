import React from "react";
// import HighlightIcon from "@material-ui/icons/Highlight";
import HighlightIcon from "@mui/icons-material/Highlight";

function Header() {
  return (
    <header>
      <h1>
        <a href="/keeper-app">
        <HighlightIcon />
        Keeper</a>
      </h1>
    </header>
  );
}

export default Header;
