import React, { useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import { Popover } from 'bootstrap';
import './Calendar.css';

export default function Calendar() {
  const [weekendsVisible] = useState(true);
  const popoverRef = React.useRef(null); // keep the active popover so we can dispose it

  const handleEventClick = (info) => {
    info.jsEvent.preventDefault();

    if (popoverRef.current) {
      popoverRef.current.dispose();
      popoverRef.current = null;
    }

    const start = new Date(info.event.startStr);
    const end = new Date(info.event.endStr || info.event.startStr);
    const date = start.toLocaleDateString('en-US', { weekday:'long', month:'short', day:'numeric', year:'numeric' });
    const time = info.event.allDay ? '' :
      `${start.toLocaleTimeString([], { hour:'numeric', minute:'2-digit' })} – ${end.toLocaleTimeString([], { hour:'numeric', minute:'2-digit' })}`;

    const contentHtml = `
      <div class="small">
        <div><i>${date}</i></div>
        ${time ? `<div class="text-muted"><i>${time}</i></div>` : ''}
        ${info.event.extendedProps?.location ? `<div class="mt-2"><b>Location:</b> ${info.event.extendedProps.location}</div>` : ''}
        ${info.event.extendedProps?.description ? `<div class="mt-2">${info.event.extendedProps.description}</div>` : ''}
      </div>
    `;

    popoverRef.current = new Popover(info.el, {
      title: info.event.title,
      content: contentHtml,
      html: true,
      trigger: 'focus',
      placement: 'auto',
      container: 'body',
      sanitize: false
    });

    // make the element focusable so trigger:'focus' can open/close it
    info.el.setAttribute('tabindex', '0');
    info.el.focus();
  };

  // also add this so every event is focusable (helps keyboard + focus trigger)
  const eventDidMount = (arg) => arg.el.setAttribute('tabindex', '0');

  // cleanup
  React.useEffect(() => () => { if (popoverRef.current) popoverRef.current.dispose(); }, []);


  return (
    <div className='demo-app'>
      <div className='bottom-calendar-main mx-auto my-4' style={{ width: '80%'}}>
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
          eventDidMount={eventDidMount}
        />
      </div>
    </div>
  );
}


// import React, {Component, useState, useRef} from 'react'
// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from '@fullcalendar/timegrid'
// import interactionPlugin from '@fullcalendar/interaction'
// import listPlugin from '@fullcalendar/list'
// import googleCalendarPlugin from '@fullcalendar/google-calendar'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './Calendar.css'

// export default function Calendar() {
//     const [clicked, setEventClicked] = useState(false);
//     const [clickedTitle, setClickedTitle] = useState('');
//     const [clickedStartDate, setClickedStartDate] = useState('');
//     const [clickedTime, setClickedTime] = useState('');
//     const [weekendsVisible] = useState(true);

//     const handleEventClick = (clickInfo) => {
//         clickInfo.jsEvent.preventDefault();
    
//         const event = clickInfo.event;
//         const start = new Date(event.startStr);
//         const end = new Date(event.endStr);
//         let time = '';
    
//         if (event.allDay) {
//           start.setDate(start.getDate() + 1); // Fix all-day display range
//         } else {
//           const startTime = start.toLocaleTimeString().replace(':00 ', ' ');
//           const endTime = end.toLocaleTimeString().replace(':00 ', ' ');
//           time = `${startTime} - ${endTime}`;
//         }
    
//         const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
//         const startDate = start.toLocaleDateString('en-us', options);
//         const endDate = end.toLocaleDateString('en-us', options);
//         const date = startDate === endDate ? startDate : `${startDate} to ${endDate}`;
    
//         setClickedTitle(event.title);
//         setClickedStartDate(date);
//         setClickedTime(time);
//         setEventClicked(true);
//     };

//     const renderEventBar = () => (
//         <div className='cal-event-bar'>
//           <div>
//             <div style={{ textAlign: 'center' }}>Event Info</div>
//             <div className='cal-event-section'>
//               <div
//                 style={{
//                   backgroundColor: 'white',
//                   color: 'black',
//                   borderBottomRightRadius: '17px',
//                   borderBottomLeftRadius: '17px'
//                 }}
//               >
//                 <ul>
//                   <div className="titleEventClicked"><b>{clickedTitle}</b><br /></div>
//                   <br />
//                   <div className="otherInfo">
//                     <i>{clickedStartDate}</i>
//                     <div style={{ color: 'gray' }}><i>{clickedTime}</i></div>
//                   </div>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//     );

//     return (
//         <div className='demo-app'>
//           {clicked && <div className="top">{renderEventBar()}</div>}
//           <div className='bottom-calendar-main' style={{ width: '100%' }}>
//             <FullCalendar
//               plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin, googleCalendarPlugin]}
//               googleCalendarApiKey='AIzaSyDiELiu3A2AKFICy8JWJE6vWhs9Qg-lsms'
//               events={{ googleCalendarId: 'uclasoles@gmail.com' }}
//               headerToolbar={{
//                 left: 'prev,next today',
//                 center: 'title',
//                 right: 'dayGridMonth,timeGridWeek,listYear'
//               }}
//               weekends={weekendsVisible}
//               displayEventTime={false}
//               initialView='dayGridMonth'
//               eventClick={handleEventClick}
//             />
//           </div>
//         </div>
//     );
// }