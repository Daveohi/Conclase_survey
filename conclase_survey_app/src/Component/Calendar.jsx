import { useState } from "react";
import "../Styles/Modals/Calendar.css";
// import { useNavigate } from "react-router-dom";
import PublishFormModal from "./PublishFormModal";

function DEADLINE({ className = "" }) {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [showPublishFormModal, setShowPublishFormModal] = useState(false);

  const handleYearSelect = (year) => {
    setSelectedYear(year);
  };

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
  };

  const handleDaySelect = (day) => {
    setSelectedDay(day);
  };

  const handleSetDeadline = () => {
    //   setShowPublishFormModal(true);

    // Apply the selected values to the calendar

    if (selectedYear && selectedMonth && selectedDay) {
      console.log("Selected Year:", selectedYear);
      console.log("Selected Month:", selectedMonth);
      console.log("Selected Day:", selectedDay);
      setShowPublishFormModal(true);
    } else {
      alert("Please select year, month, and day before publishing.");
    }
  };

  return (
    <>
      {!showPublishFormModal && (
        <div className={`deadline ${className}`}>
          {/* <div className="deadline-item" /> */}
          <div className="calender">
            <div className="calendar">
              <div className="calendar-child" />
              <div className="days">
                <b className="month">
                  {selectedMonth} {selectedYear}
                </b>
                <div className="mon">Mon</div>
                <div className="wed">Wed</div>
                <div className="tue">Tue</div>
                <div className="thu">Thu</div>
                <div className="fri">Fri</div>
                <div className="sat">Sat</div>
                <div className="sun">Sun</div>
                {/* <div className="div13" onClick={() => handleDaySelect(28)}>
                28
              </div>
              <div
                className={`suns div14 ${selectedDay === 29 ? "selected" : ""}`}
                onClick={() => handleDaySelect(29)}
              >
                29
              </div>
              <div
                className={`suns div15 ${selectedDay === 30 ? "selected" : ""}`}
                onClick={() => handleDaySelect(30)}
              >
                30
              </div>
              <div
                className={`suns div16 ${selectedDay === 31 ? "selected" : ""}`}
                onClick={() => handleDaySelect(31)}
              >
                31
              </div> */}
                <div
                  className={`suns div17 ${
                    selectedDay === 1 ? "selected" : ""
                  }`}
                  onClick={() => handleDaySelect(1)}
                >
                  1
                </div>
                <div
                  className={`suns div18 ${
                    selectedDay === 2 ? "selected" : ""
                  }`}
                  onClick={() => handleDaySelect(2)}
                >
                  2
                </div>
                <div
                  className={`suns div19 ${
                    selectedDay === 3 ? "selected" : ""
                  }`}
                  onClick={() => handleDaySelect(3)}
                >
                  3
                </div>
                <div
                  className={`suns div20 ${
                    selectedDay === 4 ? "selected" : ""
                  }`}
                  onClick={() => handleDaySelect(4)}
                >
                  4
                </div>
                <div
                  className={`suns div21 ${
                    selectedDay === 5 ? "selected" : ""
                  }`}
                  onClick={() => handleDaySelect(5)}
                >
                  5
                </div>
                <div
                  className={`suns div22 ${
                    selectedDay === 6 ? "selected" : ""
                  }`}
                  onClick={() => handleDaySelect(6)}
                >
                  6
                </div>
                <div
                  className={`suns div23 ${
                    selectedDay === 7 ? "selected" : ""
                  }`}
                  onClick={() => handleDaySelect(7)}
                >
                  7
                </div>
                <div
                  className={`suns div24 ${
                    selectedDay === 8 ? "selected" : ""
                  }`}
                  onClick={() => handleDaySelect(8)}
                >
                  8
                </div>
                <div
                  className={`suns div25 ${
                    selectedDay === 9 ? "selected" : ""
                  }`}
                  onClick={() => handleDaySelect(9)}
                >
                  9
                </div>
                <div
                  className={`suns div26 ${
                    selectedDay === 10 ? "selected" : ""
                  }`}
                  onClick={() => handleDaySelect(10)}
                >
                  10
                </div>
                <div
                  className={`suns div27 ${
                    selectedDay === 11 ? "selected" : ""
                  }`}
                  onClick={() => handleDaySelect(11)}
                >
                  11
                </div>
                <div
                  className={`suns div28 ${
                    selectedDay === 12 ? "selected" : ""
                  }`}
                  onClick={() => handleDaySelect(12)}
                >
                  12
                </div>
                <div
                  className={`suns div29 ${
                    selectedDay === 13 ? "selected" : ""
                  }`}
                  onClick={() => handleDaySelect(13)}
                >
                  13
                </div>
                <div
                  className={`suns div30 ${
                    selectedDay === 14 ? "selected" : ""
                  }`}
                  onClick={() => handleDaySelect(14)}
                >
                  14
                </div>
                <div
                  className={`suns div31 ${
                    selectedDay === 17 ? "selected" : ""
                  }`}
                  onClick={() => handleDaySelect(17)}
                >
                  17
                </div>
                <div
                  className={`suns div32 ${
                    selectedDay === 18 ? "selected" : ""
                  }`}
                  onClick={() => handleDaySelect(18)}
                >
                  18
                </div>
                <div
                  className={`suns div33 ${
                    selectedDay === 19 ? "selected" : ""
                  }`}
                  onClick={() => handleDaySelect(19)}
                >
                  19
                </div>
                <div
                  className={`suns div34 ${
                    selectedDay === 20 ? "selected" : ""
                  }`}
                  onClick={() => handleDaySelect(20)}
                >
                  20
                </div>
                <div
                  className={`suns div35 ${
                    selectedDay === 21 ? "selected" : ""
                  }`}
                  onClick={() => handleDaySelect(21)}
                >
                  21
                </div>
                <div
                  className={`suns div36 ${
                    selectedDay === 22 ? "selected" : ""
                  }`}
                  onClick={() => handleDaySelect(22)}
                >
                  22
                </div>
                <div
                  className={`suns div37 ${
                    selectedDay === 23 ? "selected" : ""
                  }`}
                  onClick={() => handleDaySelect(23)}
                >
                  23
                </div>
                <div
                  className={`suns div38 ${
                    selectedDay === 24 ? "selected" : ""
                  }`}
                  onClick={() => handleDaySelect(24)}
                >
                  24
                </div>
                <div
                  className={`suns div39 ${
                    selectedDay === 25 ? "selected" : ""
                  }`}
                  onClick={() => handleDaySelect(25)}
                >
                  25
                </div>
                <div
                  className={`suns div40 ${
                    selectedDay === 26 ? "selected" : ""
                  }`}
                  onClick={() => handleDaySelect(26)}
                >
                  26
                </div>
                <div
                  className={`suns div41 ${
                    selectedDay === 27 ? "selected" : ""
                  }`}
                  onClick={() => handleDaySelect(27)}
                >
                  27
                </div>
                <div
                  className={`suns div42 ${
                    selectedDay === 28 ? "selected" : ""
                  }`}
                  onClick={() => handleDaySelect(28)}
                >
                  28
                </div>
                <div
                  className={`suns div43 ${
                    selectedDay === 29 ? "selected" : ""
                  }`}
                  onClick={() => handleDaySelect(29)}
                >
                  29
                </div>
                <div
                  className={`suns div44 ${
                    selectedDay === 30 ? "selected" : ""
                  }`}
                  onClick={() => handleDaySelect(30)}
                >
                  30
                </div>
                <div
                  className={`suns div45 ${
                    selectedDay === 31 ? "selected" : ""
                  }`}
                  onClick={() => handleDaySelect(31)}
                >
                  31
                </div>
                {/* <div
                className={`suns div46 ${selectedDay === 1 ? "selected" : ""}`}
                onClick={() => handleDaySelect(1)}
              >
                1
              </div>
              <div
                className={`suns div47 ${selectedDay === 2 ? "selected" : ""}`}
                onClick={() => handleDaySelect(2)}
              >
                2
              </div>
              <div
                className={`suns div48 ${selectedDay === 3 ? "selected" : ""}`}
                onClick={() => handleDaySelect(3)}
              >
                3
              </div>
              <div
                className={`suns div49 ${selectedDay === 4 ? "selected" : ""}`}
                onClick={() => handleDaySelect(4)}
              >
                4
              </div>
              <div
                className={`suns div50 ${selectedDay === 5 ? "selected" : ""}`}
                onClick={() => handleDaySelect(5)}
              >
                5
              </div>
              <div
                className={`suns div51 ${selectedDay === 6 ? "selected" : ""}`}
                onClick={() => handleDaySelect(6)}
              >
                6
              </div>
              <div
                className={`suns div52 ${selectedDay === 7 ? "selected" : ""}`}
                onClick={() => handleDaySelect(7)}
              >
                7
              </div> */}
              </div>
              <div className="frame-parent11">
                <div className="vector-wrapper">
                  <img className="frame-child11" alt="" src="/vector-1.svg" />
                </div>
                <div className="vector-parent5">
                  <img className="frame-child12" alt="" src="/vector-1.svg" />
                  <img className="frame-child13" alt="" src="/vector-3.svg" />
                </div>
              </div>
              <div
                className={`suns div53 ${selectedDay === 16 ? "selected" : ""}`}
                onClick={() => handleDaySelect(16)}
              >
                16
              </div>
              <div
                className={`suns div54 ${selectedDay === 15 ? "selected" : ""}`}
                onClick={() => handleDaySelect(15)}
              >
                15
              </div>
            </div>
            <div className="month-selection">
              <div className="menu-item">
                <div
                  className={`menu-item2 ${
                    selectedYear === 2021 ? "selected" : ""
                  }`}
                  onClick={() => handleYearSelect(2021)}
                >
                  2021
                </div>
              </div>
              <div className="menu-item1">
                <div
                  className={`menu-item2 ${
                    selectedYear === 2022 ? "selected" : ""
                  }`}
                  onClick={() => handleYearSelect(2022)}
                >
                  2022
                </div>
              </div>
              <div className="menu-item3">
                <div
                  className={`menu-item2 ${
                    selectedYear === 2023 ? "selected" : ""
                  }`}
                  onClick={() => handleYearSelect(2023)}
                >
                  2023
                </div>
              </div>
              <div className="menu-item5">
                <div
                  className={`menu-item2 ${
                    selectedYear === 2024 ? "selected" : ""
                  }`}
                  onClick={() => handleYearSelect(2024)}
                >
                  2024
                </div>
              </div>
              <div className="menu-item6">
                <div
                  className={`menu-item2 ${
                    selectedYear === 2025 ? "selected" : ""
                  }`}
                  onClick={() => handleYearSelect(2025)}
                >
                  2025
                </div>
              </div>
              <div className="menu-item8">
                <div
                  className={`menu-item2 ${
                    selectedYear === 2026 ? "selected" : ""
                  }`}
                  onClick={() => handleYearSelect(2026)}
                >
                  2026
                </div>
              </div>
              <div className="menu-item10">
                <div
                  className={`menu-item2 ${
                    selectedYear === 2027 ? "select" : ""
                  }`}
                  onClick={() => handleYearSelect(2027)}
                >
                  2027
                </div>
              </div>
              <div className="menu-item11">
                <div
                  className={`menu-item2 ${
                    selectedYear === 2028 ? "selected" : ""
                  }`}
                  onClick={() => handleYearSelect(2028)}
                >
                  2028
                </div>
              </div>
              <div className="menu-item13">
                <div
                  className={`menu-item2 ${
                    selectedYear === 2029 ? "selected" : ""
                  }`}
                  onClick={() => handleYearSelect(2029)}
                >
                  2029
                </div>
              </div>
              <div className="menu-item15">
                <div
                  className={`menu-item2 ${
                    selectedYear === 2030 ? "selected" : ""
                  }`}
                  onClick={() => handleYearSelect(2030)}
                >
                  2030
                </div>
              </div>
              <div className="menu-item17">
                <div
                  className={`menu-item2 ${
                    selectedYear === 2031 ? "selected" : ""
                  }`}
                  onClick={() => handleYearSelect(2031)}
                >
                  2031
                </div>
              </div>
              <div className="menu-item19">
                <div
                  className={`menu-item2 ${
                    selectedYear === 2032 ? "selected" : ""
                  }`}
                  onClick={() => handleYearSelect(2032)}
                >
                  2032
                </div>
              </div>
            </div>
            <div className="year-selection">
              <div className="menu-item21">
                <div
                  className={`menu-item2 ${
                    selectedMonth === "January" ? "selected" : ""
                  }`}
                  onClick={() => handleMonthSelect("January")}
                >
                  January
                </div>
              </div>
              <div className="menu-item21">
                <div
                  className={`menu-item2 ${
                    selectedMonth === "February" ? "selected" : ""
                  }`}
                  onClick={() => handleMonthSelect("February")}
                >
                  February
                </div>
              </div>
              <div className="menu-item21">
                <div
                  className={`menu-item2 ${
                    selectedMonth === "March" ? "selected" : ""
                  }`}
                  onClick={() => handleMonthSelect("March")}
                >
                  March
                </div>
              </div>
              <div className="menu-item27">
                <div
                  className={`menu-item2 ${
                    selectedMonth === "April" ? "selected" : ""
                  }`}
                  onClick={() => handleMonthSelect("April")}
                >
                  April
                </div>
              </div>
              <div className="menu-item21">
                <div
                  className={`menu-item2 ${
                    selectedMonth === "May" ? "selected" : ""
                  }`}
                  onClick={() => handleMonthSelect("May")}
                >
                  May
                </div>
              </div>
              <div className="menu-item21">
                <div
                  className={`menu-item2 ${
                    selectedMonth === "June" ? "selected" : ""
                  }`}
                  onClick={() => handleMonthSelect("June")}
                >
                  June
                </div>
              </div>
              <div className="menu-item21">
                <div
                  className={`menu-item2 ${
                    selectedMonth === "July" ? "selected" : ""
                  }`}
                  onClick={() => handleMonthSelect("July")}
                >
                  July
                </div>
              </div>
              <div className="menu-item21">
                <div
                  className={`menu-item2 ${
                    selectedMonth === "August" ? "selected" : ""
                  }`}
                  onClick={() => handleMonthSelect("August")}
                >
                  August
                </div>
              </div>
              <div className="menu-item21">
                <div
                  className={`menu-item2 ${
                    selectedMonth === "September" ? "selected" : ""
                  }`}
                  onClick={() => handleMonthSelect("September")}
                >
                  September
                </div>
              </div>
              <div className="menu-item39">
                <div
                  className={`menu-item2 ${
                    selectedMonth === "October" ? "selected" : ""
                  }`}
                  onClick={() => handleMonthSelect("October")}
                >
                  October
                </div>
              </div>
              <div className="menu-item21">
                <div
                  className={`menu-item2 ${
                    selectedMonth === "November" ? "selected" : ""
                  }`}
                  onClick={() => handleMonthSelect("November")}
                >
                  November
                </div>
              </div>
              <div className="menu-item21">
                <div
                  className={`menu-item2 ${
                    selectedMonth === "December" ? "selected" : ""
                  }`}
                  onClick={() => handleMonthSelect("December")}
                >
                  December
                </div>
              </div>
            </div>
          </div>
          <div className="login9" onClick={handleSetDeadline}>
            <div className="set-deadline">Set Deadline</div>
          </div>
        </div>
      )}
      {showPublishFormModal && <PublishFormModal />}
    </>
  );
}

export default DEADLINE;