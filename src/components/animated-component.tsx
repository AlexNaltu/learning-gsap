"use client";
import gsap from "gsap";
import React, { useEffect } from "react";

const AnimatedComponent = () => {
  gsap.config({
    autoSleep: 120,
    force3D: true,
    nullTargetWarn: false,
    units: { top: "%", left: "%", bottom: "%", right: "%" },
  });

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
    const clampedValue = gsap.utils.clamp(0, 100, -12);

    console.log(clampedValue);

    gsap.effects.fade(".box", { duration: 5 });
    gsap.effects.slideOut(".box", { duration: 5 });
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".box1", { duration: 2, x: 100, ease: "power1.inOut" });
      gsap
        .timeline()
        .to(".box1", { duration: 2, x: 100 })
        .to(".box1", { duration: 2, x: -200 });
    });
  });

  return (
    <>
      <div className="w-52 h-52 bg-red-950 box"></div>
      <div className="w-52 h-52 bg-red-950 box1"></div>
    </>
  );
};

export default AnimatedComponent;
