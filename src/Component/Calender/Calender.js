import React, { useState ,useEffect} from "react";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import "./Calender.css";

function Calender() {
  const [value, setValue] = useState(new Date());
  const [date, setdate] = useState("");
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");
  const [from1, setfrom1] = useState("");
  const [to1, setto1] = useState("");
  const [start, setstart] = useState("");
  const [end, setend] = useState("");
  const [add, setadd] = useState(false);
  const [data, setdata] = useState([]);
 

  const addtodata = async () => {
    const data = {
      date: date,
      start: start,
      end:end,
      from:from,
      to:to,
      from1:from1,
      to1:to1,
    };
    fetch(`${process.env.REACT_APP_API_URL}/addlist`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      if (res.status === 201) {
        console.log(data);
        alert("sucessfully added in");
      } else {
        window.alert("Incorrect");
        console.log(res.status);
      }
    });
  };


  return (
    <>
      <div className="calender-wrap-container">
        <div className="cal-head">Date Selection</div>
        
        <div className="calender-container">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
              value={date}
              onChange={(e) => setdate(e)}
              orientation="portroit"
            />
          </LocalizationProvider>
          <div className="input-wrap">
            <div className="time-heading">Time Selection</div>
            <div className="input-box">
              <div>
                <label>Start : </label>
                <input
                  type="time"
                  value={start}
                  onChange={(e) => setstart(e.target.value)}
                />
              </div>
              <div>
                {" "}
                <label>End : </label>
                <input
                  type="time"
                  value={end}
                  onChange={(e) => setend(e.target.value)}
                />
              </div>
            </div>
            <div id="row2" className="time-heading">
              Unavailable Selection
            </div>
            <div className="input-box">
              <div>
                <label>From : </label>
                <input
                  type="time"
                  value={from}
                  onChange={(e) => setfrom(e.target.value)}
                />
              </div>
              <div>
                {" "}
                <label>To : </label>
                <input
                  type="time"
                  value={to}
                  onChange={(e) => setto(e.target.value)}
                />
              </div>
              <div onClick={() => setadd(!add)} className="more">
                {!add ? "More" : "Less"}
              </div>
            </div>

            {add ? (
              <div id="avai-add" className="input-box">
                <div>
                  <label>From : </label>
                  <input
                    type="time"
                    value={from1}
                    onChange={(e) => setfrom1(e.target.value)}
                  />
                </div>
                <div>
                  {" "}
                  <label>To : </label>
                  <input
                    type="time"
                    value={to1}
                    onChange={(e) => setto1(e.target.value)}
                  />
                </div>
              </div>
            ) : (
              ""
            )}

            <button
              className="save"
              onClick={() => addtodata()}
            >
              save
            </button>
          </div>
        </div>
     
      </div>
    </>
  );
}

export default Calender;
