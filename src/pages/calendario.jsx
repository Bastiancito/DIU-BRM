import React from "react";
import "../stylesheets/calendario.scss";

const Calendario = () => {
  const days = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  const weeks = [
    ["", "", "", "", "", "", "1"],
    ["2", "3", "4", "5", "6", "7", "8"],
    ["9", "10", "11", "12", "13", "14", "15"],
    ["16", "17", "18", "19", "20", "21", "22"],
    ["23", "24", "25", "26", "27", "28", "29"],
    ["30", "31", "", "", "", "", ""],
  ];

  const events = {
    1: ["Entrar a la universidad", "Reunión de equipo"],
    5: ["Postulaciones abiertas", "Taller de desarrollo"],
    10: ["Entrega de proyecto"],
    15: ["Cita médica"],
    20: ["Reunión con cliente"],
    25: ["Examen final"],
  };

  return (
    <>
      <a className="calendario__a" href="/home">Volver</a>
      <div className="calendario">
        <div className="calendario__header">
          {days.map((day, index) => (
            <div key={index} className="calendario__day">
              {day}
            </div>
          ))}
        </div>
        <div className="calendario__body">
          {weeks.map((week, index) => (
            <div key={index} className="calendario__week">
              {week.map((day, idx) => (
                <div key={idx} className="calendario__cell">
                  {day}
                  {day && events[day] && (
                    <div className="calendario__events">
                      {events[day].map((event, eventIdx) => (
                        <div key={eventIdx} className="calendario__event">
                          {event}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Calendario;
