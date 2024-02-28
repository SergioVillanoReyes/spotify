import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faCompactDisc } from "@fortawesome/free-solid-svg-icons";

const SideNavigation: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <div className="sidenavigation">
      <div className="sidenavigation-topbox">
        <div className={`sidenavigation-row ${!mounted && "unmounted"}`}>
          {mounted && <FontAwesomeIcon icon={faHome} className="sidenavigation-icon" />}
          <p className="sidenavigation-text">Inicio</p>
        </div>
        <div className={`sidenavigation-row ${!mounted && "unmounted"}`}>
          {mounted && <FontAwesomeIcon icon={faSearch} className="sidenavigation-icon" />}
          <p className="sidenavigation-text">Buscar</p>
        </div>
      </div>
      <div className="sidenavigation-box">
        <div className={`sidenavigation-row ${!mounted && "unmounted"}`}>
          {mounted && <FontAwesomeIcon icon={faCompactDisc} className="sidenavigation-icon" />}
          <p className="sidenavigation-text">Tu biblioteca</p>
        </div>
      </div>
    </div>
  );
};

export default SideNavigation;