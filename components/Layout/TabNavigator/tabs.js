import React from "react";
import { faHome, faSearch, faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const tabs = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faHome} className="tab-navigator-icon" />,
    label: "Inicio",
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faSearch} className="tab-navigator-icon" />,
    label: "Buscar",
  }, {
    id: 3,
    icon: <FontAwesomeIcon icon={faCompactDisc} className="tab-navigator-icon" />,
    label: "Tu Biblioteca",
  }, {
    id: 4,
    icon: <FontAwesomeIcon icon={faSpotify} className="tab-navigator-icon" />,
    label: "Descargar aplicación",
  }
];

export default tabs;