
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import img1 from "../assets/billing_web_1.png";
import img2 from "../assets/billing_web_2.png";
import img3 from "../assets/billing_web_3.png";
import img4 from "../assets/billing_web_4.png";
import img5 from "../assets/billing_web_5.png";
import img6 from "../assets/billing_web_6.png";

const images = [img1, img2, img3, img4, img5, img6];

export default function Mid3() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const strength = [1, 0.65, 0.35];

  return (
    <section ref={ref} className="relative py-48">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 px-6">
        {[0, 1].map((col) => (
          <div key={col} className="flex flex-col gap-16">
            {strength.map((s, i) => {
              const x = useTransform(
                scrollYProgress,
                [0, 1],
                [0, (col ? 1 : -1) * 900 * s]
              );
              const y = useTransform(scrollYProgress, [0, 1], [0, -320]);

              return (
                <motion.div
                  key={i}
                  style={{ x, y }}
                  className="aspect-[16/10] bg-white rounded-2xl shadow-2xl overflow-hidden"
                >
                  <img
                    src={images[col * 3 + i]}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
