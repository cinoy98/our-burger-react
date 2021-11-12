import React from "react";
import foodieSha from "../assets/videos/burgerAd.webm";
import "../assets/css/gallery.css";
import beefburger from "../assets/images/slideshow/beefburger.png";
import chickenburger from "../assets/images/slideshow/chickenburger.png";
import chickenbytes from "../assets/images/slideshow/chickenbytes.png";
import combooffer from "../assets/images/slideshow/combooffer.png";
import periperi from "../assets/images/slideshow/periperi.png";
export class Gallery extends React.Component {
    render() {
        return (
 

                <video width="355px" height="auto" controls autoPlay>

                    <source src={foodieSha} type="video/webm"></source>
                </video>

    
        )
    }
}

const colors = [beefburger, chickenburger, chickenbytes, combooffer, periperi];
const delay = 2500;

export function Slideshow() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {colors.map((backgroundColor, index) => (
                    <div
                        className="slide"
                        key={index}
                    >
                        <img src={backgroundColor}></img>
                    </div>
                ))}
            </div>

            <div className="slideshowDots">
                {colors.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}
