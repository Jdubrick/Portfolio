import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Keyboard,
  Mousewheel,
  Thumbs,
} from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
type Props = {};

export default function Projects({}: Props) {
  return (
    <div className="h-screen xl:h-[80vh] flex flex-col max-w-7xl mx-auto items-center overflow-hidden">
      <h1 className="text-xl sm:text-3xl uppercase tracking-[8px] text-gray-600 pt-[90px]">
        Projects
      </h1>
      <div className="flex w-[80%] h-[70%] xl:h-[100%] pt-20 sm:pt-10 items-center">
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            Keyboard,
            Mousewheel,
            Thumbs,
          ]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          centeredSlides={true}
          pagination={true}
          thumbs={{}}
          mousewheel={true}
          scrollbar={{ draggable: true }}
          keyboard={true}
          spaceBetween={30}
          slidesPerView={1}
        >
          <SwiperSlide>
            <ProjectCard
              title={"Stock Information Tool"}
              tech={["ReactJS", "Express.js", "JavaScript", "CSS/HTML"]}
              description={[
                "Express.js backend requests data from an external API provided by Twelvedata",
                "Application was containerized and runs through a Docker container",
                "User can enter up to 8 ticker symbols and the application easily displays open price, close price, and volume for all user entered ticker symbols",
                "The data can be exported as a .csv file to be used for financial models",
              ]}
              gitLink={"https://github.com/Jdubrick/Stock-Portfolio"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              title={"Sorting Visualizer"}
              tech={["ReactJS", "JavaScript", "HTML/CSS"]}
              description={[
                "Sorts an integer array using any of Bubble Sort, Insertion Sort, Radix Sort, or Merge Sort",
                "The user has the ability to choose the type of sort, and can regenerate a new integer array at any time",
                "Deployed to Github Pages",
              ]}
              gitLink={"https://github.com/Jdubrick/sorting-visualizer"}
              external="https://jdubrick.github.io/sorting-visualizer/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              title={"Portfolio Optimizer"}
              tech={["Python", "Pandas", "NumPy", "PyPortfolioOpt"]}
              description={[
                "Optimizes a portfolio to obtain the highest Sharpe ratio within a given volatility range",
                "Displays optimized portfolio against an equal-weighted portfolio of the same securities",
                "User has the ability to enter any ticker symbols they wish to add",
                "PyPortfolioOpt was implemented to generate the efficient frontier in order to optimize risk to return",
              ]}
              gitLink={"https://github.com/Jdubrick/portfolio-optimization"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              title={"DCF Model Automation"}
              tech={["Python", "Pandas", "NumPy"]}
              description={[
                "Aims to automate the creation for a discounted cash flow financial model that is extensively used in the world of banking",
                "Used to aid in the decision to purchase a security or in the decision to stay away from a security. This model can also be used to help decide if you need to perform more due diligence",
                "All financial data is provided by the Yahoo Finance API",
              ]}
              gitLink={"https://github.com/Jdubrick/dcf-model-automation"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
