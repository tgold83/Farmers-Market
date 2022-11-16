import React from "react";

const farmersMarketList = [  
  {  
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
  },
  {  
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
  },
  {  
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
  },
  {  
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
  },
  {  
		day: "Thursday",
		location: "Northwest Portland",
		hours: "2:00pm - 6:00pm",
		booth: "6D"
  },
  {  
		day: "Saturday",
		location: "Beaverton",
		hours: "10:00am - 1:30pm",
		booth: "9G"
  }
];

function FarmersMarketList(){
	const marketstyle = {
		width: "50%",
		padding: "30px",
		borderRight: "3px solid grey"
	}
  return (
    <React.Fragment>
			<div style={marketstyle}>
				<h3>{farmersMarketList[0].day}</h3>
				<h3>{farmersMarketList[0].location}</h3>
				<h3>{farmersMarketList[0].hours}</h3>
				<h3>{farmersMarketList[0].booth}</h3>
			</div>
    </React.Fragment>
  );
}

export default FarmersMarketList;