import React, { useState, useEffect } from "react";

const Greetin: React.FC = () => {
  const [timeOfDay, setTimeOfDay] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setTimeOfDay("Buenos días");
    } else if (hour >= 12 && hour < 19) {
      setTimeOfDay("Buenas tardes");
    } else {
      setTimeOfDay("Buenas noches");
    }
    setMounted(true);
  }, []);
  
  return (
    <div className="greeting">
      <p className={`greeting-text ${!mounted && "unmounted"}`}>{timeOfDay}</p>
    </div>
  );
};

export default Greetin;