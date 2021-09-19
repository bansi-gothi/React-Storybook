import React from 'react';
import Slider from "react-slick";

//@slider arrow
import PrevArrow from "./pre-arrow/PreviousArrow";
import NextArrow from "./next-arrow/NextArrow";

//@react-slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderType {
    children?: React.ReactNode;
    settings?: Object;
}

export const SliderLayout: React.FC<SliderType> = ({ settings = {}, children, ...rest }) => {
    const customSlider = React.useRef<Slider | null>(null);
    const goToPrevious = () => {
        customSlider?.current?.slickPrev();
    };
    const goToNext = () => {
        customSlider?.current?.slickNext();
    };
    const defaultSettings = {
        // custom settings
        dots: true,
        fade: true,
        arrows: true,
        slidesToShow: 3,
        // compulsory
        infinite: true,
        speed: 1000,
        mobileFirst: true,
        slidesToScroll: 1,
        ...settings,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    };

    return (
        <React.Fragment>
            {defaultSettings.arrows &&
                <PrevArrow onPreClick={() => goToPrevious} />
            }
            <Slider
                ref={slider => (customSlider.current = slider)}
                {...defaultSettings}
            >
                {children}
            </Slider>
            {defaultSettings.arrows &&
                <NextArrow onNextClick={() => goToNext} />
            }
        </React.Fragment>
    );
}