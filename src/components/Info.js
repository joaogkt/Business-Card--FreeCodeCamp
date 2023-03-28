import Laura from "../img/laura.png"
import email from "../img/Icon.png"
import linkedin from "../img/Vector.png"

export default function Info(){
    return(
        <div className="info">
            <img
            src={Laura}
            alt='Imagem principal'
            className="imagem-principal"
             />
            <h3 className="name">Laura Smith</h3>
            <h4 className="subtitle">Frontend Developer</h4>
            <p className="website">laurasmith.website</p>
            <div className="contact">
                <button type="button" className="button-email">
                    <img src={email} alt='email-logo' />Email</button>
                <button type="button" className="button-linkedin"><img src={linkedin} alt='linkedin-logo' /> LinkedIn</button>
            </div>
        </div>
    )
}