import React, {Component, useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import './Calendar.css'

export default function Calendar() {
    const [clicked, setEventClicked] = useState(false);
    const [clickedTitle, setClickedTitle] = useState('');
    const [clickedStartDate, setClickedStartDate] = useState('');
    const [clickedTime, setClickedTime] = useState('');
    const [weekendsVisible] = useState(true);

    const handleEventClick = (clickInfo) => {
        clickInfo.jsEvent.preventDefault();
    
        const event = clickInfo.event;
        const start = new Date(event.startStr);
        const end = new Date(event.endStr);
        let time = '';
    
        if (event.allDay) {
          start.setDate(start.getDate() + 1); // Fix all-day display range
        } else {
          const startTime = start.toLocaleTimeString().replace(':00 ', ' ');
          const endTime = end.toLocaleTimeString().replace(':00 ', ' ');
          time = `${startTime} - ${endTime}`;
        }
    
        const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
        const startDate = start.toLocaleDateString('en-us', options);
        const endDate = end.toLocaleDateString('en-us', options);
        const date = startDate === endDate ? startDate : `${startDate} to ${endDate}`;
    
        setClickedTitle(event.title);
        setClickedStartDate(date);
        setClickedTime(time);
        setEventClicked(true);
    };

    const renderEventBar = () => (
        <div className='cal-event-bar'>
          <div>
            <div style={{ textAlign: 'center' }}>Event Info</div>
            <div className='cal-event-section'>
              <div
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  borderBottomRightRadius: '17px',
                  borderBottomLeftRadius: '17px'
                }}
              >
                <ul>
                  <div className="titleEventClicked"><b>{clickedTitle}</b><br /></div>
                  <br />
                  <div className="otherInfo">
                    <i>{clickedStartDate}</i>
                    <div style={{ color: 'gray' }}><i>{clickedTime}</i></div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
    );

    return (
        <div className='demo-app'>
          {clicked && <div className="top">{renderEventBar()}</div>}
          <div className='bottom-calendar-main' style={{ width: '100%' }}>
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin, googleCalendarPlugin]}
              googleCalendarApiKey='AIzaSyDiELiu3A2AKFICy8JWJE6vWhs9Qg-lsms'
              events={{ googleCalendarId: 'uclasoles@gmail.com' }}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,listYear'
              }}
              weekends={weekendsVisible}
              displayEventTime={false}
              initialView='dayGridMonth'
              eventClick={handleEventClick}
            />
          </div>
        </div>
    );
}