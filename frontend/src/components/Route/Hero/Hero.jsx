import React from 'react';
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import videoSource from "../../../vid/vid.mp4"; // Import the video source

const Hero = () => {
    return (
        <div
            className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
        >
            <video autoPlay loop muted className="w-full h-[530px] object-cover">
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div style={{marginLeft:'60px'}} className={`${styles.section} w-[90%] 800px:w-[60%] absolute top-1/2 transform -translate-y-1/2`}>
                <h1
                    className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#ffffff] font-[600] capitalize`}
                >
                    The Best Ingredients for <br /> The Best Meal.
                </h1>
                <Link to="/products" className="inline-block">
                    <div className={`${styles.button} mt-5`}>
                        <span className="text-[#fff] font-[Poppins] text-[18px]">
                            Buy Now
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Hero;
