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
      gsap.to(".box1", {
        ease: "power1.inOut",
        keyframes: [{ x: "random(-100,50,4)" }, { x: 0, duration: 1 }],
      });
    });

    let tween = gsap.from(".box1", {
      duration: 2,
      y: 100,
      ease: "elastic",
      lazy: true,
    });

    tween.duration(10);

    let tl = gsap.timeline();
    tl.from(".class1", { duration: 1, x: 100, id: "firstClass" })
      .to(".class2", { duration: 1, y: 200 })
      .to(".class3", { duration: 1, x: 500 });

    let myFirstClass = gsap.getById("firstClass");
    myFirstClass.pause();
    myFirstClass.delay(10000);
    myFirstClass.play();

    let w = gsap.getProperty(".class1", "width");
    console.log(w);

    let mm = gsap.matchMedia();
    mm.add("(max-width: 500px)", (context) => {
      gsap.to(".class4", { x: 100 });
    });
  }, []);

  return (
    <>
      <div className="w-52 h-52 bg-red-950 box"></div>
      <div className="w-52 h-52 bg-red-950 box1"></div>
      <div className="w-52 h-52 bg-blue-400 class1"></div>
      <div className="w-52 h-52 bg-blue-400 class2 my-3"></div>
      <div className="w-52 h-52 bg-blue-400 class3"></div>
      <div className="w-52 h-52 bg-green-700 class4"></div>
    </>
  );
};

export default AnimatedComponent;
