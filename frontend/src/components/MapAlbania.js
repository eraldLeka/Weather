import React from "react";
import SVG from "react-inlinesvg";
import mapSvg from "../assets/albania-map.svg";

// Mapping nga id SVG në emra qarqesh
const idToCity = {
  AL01: "berat",
  AL02: "durres",
  AL03: "elbasan",
  AL04: "fier",
  AL05: "gjirokaster",
  AL06: "korce",
  AL07: "kukes",
  AL08: "lezhe",
  AL09: "diber",
  AL10: "shkoder",
  AL11: "tirane",
  AL12: "vlore"
};

function MapAlbania({ onSelectCity }) {
  const handleClick = (event) => {
    let element = event.target;

    while (element) {
      const id = element.id;
      if (id && idToCity[id]) {
        const city = idToCity[id];
        console.log("Klikuar në:", city);
        if (typeof onSelectCity === "function") {
          onSelectCity(city);
        }
        return;
      }
      element = element.parentNode;
    }

    console.warn("Qyteti nuk u gjet për elementin e klikuar.");
  };

  return (
    <div
      onClick={handleClick}
      style={{ 
         cursor: "pointer",
    maxWidth: "900px",
    height: "auto",
    border: "none",     
    padding: 0,
    margin: 0,

      }}
    >
      <SVG src={mapSvg}
        style={{
          width:"100%",
          height:"auto",
          display:"block",
        }}
      />
    </div>
  );
}

export default MapAlbania;
