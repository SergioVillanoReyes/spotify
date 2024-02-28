import React, { useEffect, useState } from "react";
import tabs from "./tabs";

const TabNavigator: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 800);
  }, []);

  return (
    <div className="tab-navigator">
      {tabs.map((tab)=>(
        <div key={tab.id} className="tab-navigator-item">
          {mounted && (
            <>
              {tab.icon}
              <p>
                {tab.label}
              </p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TabNavigator;