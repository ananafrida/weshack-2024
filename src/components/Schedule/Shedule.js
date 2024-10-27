// Schedule.js
import React from "react";
import { schedule } from "../../Module/General.tsx"; // Import the schedule data
import "./style.css";

const Schedule = () => {
  return (
    <div className="schedule">
      <div className="day-schedules">
        {schedule.map((daySchedule, index) => (
          <div key={index} className="day-schedule">
            <h2 className="schedule-day">{daySchedule.day}</h2>
            <ul className="event-list">
              {daySchedule.events.map((event, eventIndex) => (
                <li key={eventIndex} className="event-item">
                  <div className="event-details">
                    <span className="event-time">{event.timings}</span>
                    <span className="event-title">{event.title}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
