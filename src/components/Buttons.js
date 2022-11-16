import React from "react";
import "./Buttons.css";

const Buttons = () => {
  const [openDay, setOpenDay] = React.useState(false);
  const [openMonth, setOpenMonth] = React.useState(false);

  const handleOpenDay = () => {
    setOpenDay(!openDay);
  };

  const handleOpenMonth = () => {
    setOpenMonth(!openMonth);
  };
  const handleClickDay = (day) => {
    this.setState({marketVisible: day});
  }
  return (
    <React.Fragment>
		<div>
			<div className='dropdownday'>
				<button onClick={handleOpenDay}>Weekday</button>
				{openDay ? (
					<ul className='day'>
						<li className='sunday'>
							<button onClick={handleClickDay("Sunday")}>Sunday</button>
						</li>
						<li className='monday'>
							<button onClick={handleClickDay("Monday")}>Monday</button>
						</li>
						<li className='tuesday'>
							<button>Tuesday</button>
						</li>
						<li className='wednesday'>
							<button>Wednesday</button>
						</li>
						<li className='thursday'>
							<button>Thursday</button>
						</li>
						<li className='Friday'>
							<button>Friday</button>
						</li>
						<li className='saturday'>
							<button>Saturday</button>
						</li>
					</ul>
				) : null}
			</div>
			<div className="dropdownmonth">
        <button onClick={handleOpenMonth}>Monthly Produce</button>
        {openMonth ? (
          <ul className='month'>
            <li className='january'>
              <button>January</button>
            </li>
            <li className='february'>
              <button>February</button>
            </li>
            <li className='march'>
              <button>March</button>
            </li>
            <li className='april'>
              <button>April</button>
            </li>
            <li className='may'>
              <button>Thursday</button>
            </li>
            <li className='May'>
              <button>Friday</button>
            </li>
            <li className='june'>
              <button>June</button>
            </li>
            <li className='july'>
              <button>July</button>
            </li>
            <li className='august'>
              <button>August</button>
            </li>
            <li className='september'>
              <button>September</button>
            </li>
            <li className='october'>
              <button>October</button>
            </li>
            <li className='november'>
              <button>November</button>
            </li>
            <li className='december'>
              <button>December</button>
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  </React.Fragment>
  );
};

export default Buttons;