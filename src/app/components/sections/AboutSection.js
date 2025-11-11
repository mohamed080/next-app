import Image from "next/image";
import shape_2 from "../../assets/shape_2.png";
import img_2 from "../../assets/img-2.png";
import icon_1 from "../../assets/icon1.svg";
import icon_2 from "../../assets/icon2.svg";
import union_bg from "../../assets/Union.png";
import servicebg_tl from "../../assets/servicebg-tl.png";
import { useAuth } from "@/app/context/AuthContext";

export default function AboutSection() {
  const { user } = useAuth();

  return (
    <section className="relative" id="about-section">
      <Image
        src={shape_2}
        alt="shape image"
        width={400}
        height={200}
        className="hidden sm:block w-[80%] sm:w-[76%] md:w-[78%] lg:w-[80.7%] -translate-y-0.5"
      />
      <div className="absolute top-0">
        <Image
          src={union_bg}
          alt="union transparent bg"
          width={400}
          height={200}
          className="w-80 md:w-100 translate-x-1/4 -translate-y-1/4"
        />
      </div>
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 py-6">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <Image
            src={img_2}
            alt="corner shape"
            width={400}
            height={200}
            className="w-[90%] object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary">
            التاريخ حاضر
            <br />
            لنشكل المستقبل
          </h2>

          <p className="text-lg md:text-xl text-[#737D7C] font-medium max-w-2xl">
            تنتمي أسرة آل ملحم في الأحساء إلى قبيلة مطير نسبا وتحديدا من
            &quot;العقفانة&quot; ويسمون (القنازعة) من الجغاوين وهو فرع من
            العبيات المشهور والمنتمي إلى واصل من بريه أحد الأقسام الرئيسية
            الثلاثة لقبيلة مطير.
          </p>

          {/* Icons Row */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Vision */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#BA946C1F] rounded-full shrink-0">
                <Image
                  src={icon_1}
                  alt="icon"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl text-secondary font-bold">
                  رؤيتنا
                </h3>
                <p className="text-base md:text-lg text-[#737D7C] font-medium">
                  الارتقاء بمكانة الأسرة إلى مستوى رفيع يُشار إليه بالبنان في كل
                  محفل ومكان.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#BA946C1F] rounded-full shrink-0">
                <Image
                  src={icon_2}
                  alt="icon"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl text-secondary font-bold">
                  رسالتنا
                </h3>
                <p className="text-base md:text-lg text-[#737D7C] font-medium">
                  إدارة شؤون مجلس الأسرة العامة والاجتماعية لتوثيق روابط التواصل
                  والمحبة بين أفرادها.
                </p>
              </div>
            </div>
          </div>

          <button className="px-8 sm:px-10 md:px-12 py-2 max-w-fit cursor-pointer text-primary border-2 border-primary hover:bg-primary hover:text-white transition duration-300">
            المزيد
          </button>
        </div>
      </div>
      {/* service only */}
      {user && (
        <Image
          src={servicebg_tl}
          alt="decorative Top left"
          width={350}
          height={350}
          className="absolute -bottom-60 left-0 z-0 w-80 sm:w-90 pointer-events-none"
        />
      )}
    </section>
  );
}
