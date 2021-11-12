import React from "react";
import "../assets/css/footer.css";
import facebookLogo from "../assets/images/Facebook.png";
import instagramLogo from "../assets/images/Instagram.svg";
import whatsappLogo from "../assets/images/WhatsApp.svg";
export default class Footer extends React.Component {
    render() {
        return (
            <div className="logos">
                <table>
                    <tr>
                        <td><a href="https://www.facebook.com/Our-Burger-102321478781370" target="_blank"><img src={facebookLogo} className="logo" alt="facebookLogo"></img></a></td>
                        <td><a href="https://www.instagram.com/0ur_burger/" target="_blank"><img src={instagramLogo} className="logo" alt="instagramLogo"></img></a></td>
                        <td><a href= "https://wa.me/918078180980" target="_blank"><img src={whatsappLogo} className="logo" alt="whatsappLogo"></img></a></td>
                    </tr>
                </table>
                <p>Food shown are for illustration purpose only. Actual product may differ from the images shown in this website. Our menu prices are now inclusive of GST.*</p>
            </div>
        )
    }
}