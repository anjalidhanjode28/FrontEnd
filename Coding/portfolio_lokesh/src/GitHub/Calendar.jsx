import React from "react";
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import './Calendar.css';
import { Stats } from "./Stats";

export const Calendar = () => {

    const selectLastHalfYear = (contributions) => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 7;

        return contributions.filter((day) => {
            const date = new Date(day.date);
            const monthOfDay = date.getMonth();

            return (
                date.getFullYear() === currentYear && 
                monthOfDay > currentMonth - shownMonths && 
                monthOfDay <= currentMonth
            );
        });
    };


    return (
        <div className="calendarContainer">

            <div className="calendarBox">
                <h3>GitHub Calender</h3>
                <GitHubCalendar
                className="Calendar"
                username="lokesh-patidar"
                transformData={selectLastHalfYear}
                hideTotalCount
                hideColorLegend
                >
                    <ReactTooltip delayShow={20}/>
                </GitHubCalendar>
                
            </div>
            <div><Stats/></div>
            
        </div>
    );
}