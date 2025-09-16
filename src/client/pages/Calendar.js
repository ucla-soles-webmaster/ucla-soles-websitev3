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
  const popoverRef = React.useRef(null);

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

    info.el.setAttribute('tabindex', '0');
    info.el.focus();
  };

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