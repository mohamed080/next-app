import Image from "next/image";
import imgNum_1 from "../../assets/imgNum_1.png";
import imgNum_2 from "../../assets/imgNum_2.png";
import imgNum_3 from "../../assets/imgNum_3.png";
import imgNum_4 from "../../assets/imgNum_4.png";
import imgNum_5 from "../../assets/imgNum_5.png";
import imgNum_6 from "../../assets/imgNum_6.png";
import AnimatedCounter from "../AnimatedCounter";

export default function NumbersSection() {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-6xl mx-auto">
        {/* Stats Grid */}
        <div
          className="
                grid 
                grid-cols-3
                sm:grid-cols-4
                md:grid-cols-5
                lg:grid-cols-6 
                xl:grid-cols-7 
                gap-4 
                md:gap-8 
                justify-items-center
              "
        >
          {[
            { img: imgNum_1, end: 19 },
            { img: imgNum_2, end: 40 },
            { img: imgNum_3, end: 1280, start: 1000 },
            { img: imgNum_4, end: 4 },
            { img: imgNum_5, end: 2 },
            { img: imgNum_6, end: 11 },
            { img: imgNum_6, end: 40 },
          ].map((item, index) => (
            <div
              key={index}
              className="group text-center p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center"
            >
              {/* Icon */}
              <div className="mb-3 sm:mb-4 md:mb-6 flex justify-center">
                <Image
                  src={item.img}
                  alt="إنجازات وأرقام"
                  width={100}
                  height={100}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Number */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-secondary mb-1 sm:mb-2">
                <AnimatedCounter start={item.start || 0} end={item.end} />
                <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-primary pr-1">
                  +
                </span>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
