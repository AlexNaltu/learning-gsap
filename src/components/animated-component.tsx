"use client";
import gsap from "gsap";
import React, { useEffect } from "react";

const AnimatedComponent = () => {
  gsap.registerEffect({
    name: "fade",
    extendedTimeline: true,
    // @ts-ignore
    effect: (targets, config) => {
      return gsap.to(targets, { duration: config.duration, opacity: 0 });
    },
    defaults: { duration: 2 },
  });

  gsap.registerEffect({
    name: "slide",
    extendedTimeline: true,
    // @ts-ignore
    effect: (targets, config) => {
      return gsap.from(targets, { duration: config.duration, x: 100 });
    },
    defaults: { duration: 2 },
  });

  gsap.registerEffect({
    name: "slideOut",
    extendedTimeline: true,
    // @ts-ignore
    effect: (targets, config) => {
      return gsap.fromTo(
        targets,
        { x: 0 },
        { duration: config.duration, x: 100 }
      );
    },
  });

  useEffect(() => {
    gsap.effects.fade(".box", { duration: 5 });
    gsap.effects.slideOut(".box", { duration: 5 });
  }, []);

  gsap.globalTimeline.timeScale(0.5);
  return <div className="w-52 h-52 bg-red-500 box"></div>;
};

export default AnimatedComponent;
