import React from "react";
import Farmlogo from "./../img/Farmlogo.jpg";

function Header(){
	const headstyle = {
    marginTop: "0px",
    borderBottom: "2px solid grey",
    marginBottom: "5px",
    paddingTop: "15px",
    paddingBottom: "35px",
    paddingLeft: "5px",
    paddingRight: "5px"
	};
  return (
		<React.Fragment>
			<div style={headstyle}>
    		<h1>Welcome to O'Avery's Outstanding Optimal Organics</h1>
        <img src={Farmlogo} alt="farm logo" width='15%' />
			</div>
		</React.Fragment>
  );
}

export default Header;