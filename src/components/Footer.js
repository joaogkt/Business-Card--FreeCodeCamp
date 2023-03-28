import twitter from "../img/twitter.png"
import instagram from "../img/instagram.png"
import facebook from "../img/facebook.png"
import github from "../img/github.png"

export default function Footer(){
    return(
        <div className="footer-icons">
            <img src={twitter} alt="twitter" className="" />
            <img src={facebook} alt="facebook" className="" />
            <img src={instagram} alt="instagram" className="" />
            <img src={github} alt="github" className="" />
        </div>
    )
}