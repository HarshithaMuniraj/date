import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import "./blog.js";
const App = () => {  
      const [startDate, setStartDate] = useState(new Date());  
      return (      
    <DatePicker         
        selected={startDate}         
        onChange={(date) => setStartDate(date)}        
        dateFormat="Pp"       
        showTimeSelect        
        timeFormat="p"     
    />  
     );
};