import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
    return (
        <div
            className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
        >
            <div className="flex justify-between w-full">
                <div className="flex items-start">
                    <img
                        src="/img/sponsore/sicam.png"
                        alt=""
                        style={{ width: "150px", objectFit: "contain", marginTop:"15px" }}
                    />
                </div>
                <div className="flex items-start">
                    <img
                        src="/img/sponsore/randa.png"
                        style={{ width: "160px", objectFit: "contain" }}
                        alt=""
                    />
                </div>
                <div className="flex items-start">
                    <img
                        src="/img/sponsore/warda.png"
                        style={{ width: "150px", objectFit: "contain" }}
                        alt=""
                    />
                </div>
                <div className="flex items-start">
                    <img
                        src="/img/sponsore/saida.jpg"
                        style={{ width: "150px", objectFit: "contain" }}
                        alt=""
                    />
                </div>
                <div className="flex items-start">
                    <img
                        src="/img/sponsore/landor.jpeg"
                        style={{ width: "150px", objectFit: "contain" }}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Sponsored;