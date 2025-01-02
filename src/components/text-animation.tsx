"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(useGSAP);

const TextAnimation = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      // ✅ safe, created during execution, selector text scoped
      gsap.to(".good", { x: 100 });
    },
    { scope: container }
  );

  // ❌ Unsafe! Created on interaction and not wrapped in contextSafe()
  // animation will not be cleaned up
  // Selector text also isn't scoped to the container.
  const onClickBad = () => {
    gsap.to(".bad", { y: 100 });
  };

  return (
    <div ref={container}>
      <div className="good">asdsadsd</div>
      <button onClick={onClickBad} className="bad">
        asdsadsd
      </button>
    </div>
  );
};

export default TextAnimation;
