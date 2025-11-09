"use client";

import CountUp from "react-countup";

export default function AnimatedCounter({ start ,end }) {
  return <CountUp start={start} end={end} duration={4}  />;
}