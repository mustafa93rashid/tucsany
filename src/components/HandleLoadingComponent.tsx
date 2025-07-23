"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./Loader";

const HandleLoadingComponent: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
    const isPageRefreshed = navigation.type === "reload";

    if (isPageRefreshed) {
      setTimeout(() => {
        setLoading(false);
        AOS.init({ once: true, duration: 1000 });
        AOS.refresh();
      }, 1500);
    } else {
      setLoading(false);
      AOS.init({ once: true, duration: 1000 });
      AOS.refresh();
    }
  }, []);

  return <>{loading ? <Loader /> : <div>{children}</div>}</>;
};

export default HandleLoadingComponent;
