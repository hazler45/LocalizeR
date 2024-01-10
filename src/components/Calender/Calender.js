import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = ({ onChange })  => {
	const [selectedDateTime, setSelectedDateTime] = useState(null);
    
	return (
	  <div className="datetime-input-container">
		<DatePicker
		className=' p-2'
		  selected={selectedDateTime}
		  onChange={(date) =>
			{ setSelectedDateTime(date);
				onChange(date);}}
		  showTimeSelect
		  timeFormat="HH:mm"
		  timeIntervals={15}
		  dateFormat="MM/dd/yyyy h:mm aa"
		  placeholderText="Select date and time"
		  popperPlacement="bottom-end"
		  popperModifiers={{
			offset: {
			  enabled: true,
			  offset: '5px, 10px',
			},
			preventOverflow: {
			  enabled: true,
			  escapeWithReference: false,
			  boundariesElement: 'viewport',
			},
		  }}
		/>
		
	  </div>
	);
  };
  
  export default Calendar;
  
  