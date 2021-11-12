import { Gallery, Slideshow } from "./Gallery";
import "../assets/css/gallery.css"
import photo from "../assets/images/slideshow/ourburger.jpeg";
export default function Home() {
    return (
        <div className="home">
            <div className="left">
                <Gallery />

            </div>

            <img src={photo} width="580px" height="auto" ></img>


            <div className="right">
                <Slideshow />
            </div>
        </div>
    )
}