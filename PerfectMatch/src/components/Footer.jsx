import React from 'react';
import '../components/css/footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className="newsLetter">
                {/* <label htmlFor="">NewsLetter</label><br/> */}

                <div className="form-newsLetter">
                <input type="text" 
                placeholder='Message...'/>
                <button>Envoyer</button>
                </div>
               </div>

                <div className="info-footer">
                <h1>Our<span>Match</span></h1>
                <div className="apropos-footer">
                    <h2>A propos</h2>
                    <ul>
                        <li>De Nous</li>
                        <li>De DevGroup</li>
                        <li> Des Site rencontre ci</li>
                    </ul>
                </div>
                <div className="procede-footer">
                    <h2>Procédé</h2>
                    <ul>
                        <li>Découverte</li>
                        <li>Rencontre</li>
                        <li>Date</li>
                        <li>Couple</li>
                    </ul>
                </div>
                <div className="contact-footer">
                    <h2>Nous contacter</h2>
                    <ul>
                        <li>Email : OurMatch@gmail.com</li>
                        <li>Num : +225 27-07-89-65-51</li>
                    </ul>
                </div>

                <div className="reseaux-footer">
                    <h2>Nous suivre</h2>
                    <ul>
                        <li><i class="fa-brands fa-square-facebook"></i></li>
                        <li><i class="fa-brands fa-instagram"></i></li>
                        <li><i class="fa-brands fa-twitter"></i></li>
                    </ul>
                </div>
                </div>
               
               


            <div className="copyright">
                <p><i class="fa-solid fa-copyright"></i> Copyright. Tout droit réservé OurMatch 2020</p>
            </div>
        </div>
    );
}

export default Footer;