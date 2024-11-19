import React from "react";
import "../stylesheets/calendario.scss";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

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
    1: ["Entrar a la universidad", "Reunión de departamento"],
    5: ["Postulaciones abiertas", "Taller de desarrollo"],
    10: ["Entrega de resultados"],
    // 15: [""],
    20: ["Reunión con jefe de carrera"],
    25: ["Examenes finales"],
  };

  return (
    <div className="todo">
      <Link to="/home">
        <button className="text-button" style={{margin: "25px 0px 0px 25px"}} >Volver</button>
      </Link>
      <section className="calendario-completo" style={{display: "flex", width: "100%", justifyContent: "center", marginBottom: "100px"}}>
        <div className="calendario">
          <div className="calendario__header">
            {days.map((day, index) => (
              <div key={index} className="calendario__day">
                {day}
              </div>
            ))}
          </div>
          <div className="calendario__body" style={{position:"absolute", left: "50%",transform: "translateX(-50%)"}}>
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
      </section>
      <Footer className="footer" />
    </div>
  );
};

export default Calendario;
