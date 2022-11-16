import React from "react";
import Buttons from "./Buttons";
import FarmersMarketList from "./FarmersMarketList";
import MonthlyProduceList from "./MonthlyProduceList";
import "./Buttons.css";

class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      marketVisible: "sunday",
      produceVisible: "january"
    };
  }
	
	render(){
		const bodyrow = {
			display: "flex",
			flexDirection: "row"
		}
		return (
			<React.Fragment>
        <Buttons />
        <div style={bodyrow}>
          <FarmersMarketList />
          <MonthlyProduceList />
        </div>
      </React.Fragment>
    )
  }
}

export default Body;