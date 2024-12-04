import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Home() {
    return (
        <section className="home">
            <div>
                <h1>Soy Criseyda Araujo.</h1>
                <p>Soy un <strong>estudiante activo y futura técnica en desarrollo de software</strong> con conocimientos basicos  en C+++ y JavaScript.</p>
                <div className="social-links">
                    <a href="https://www.facebook.com/criseydacry
                    " target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/criseyda-melendez-4b3431134/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://github.com/Criseyda-prog" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                </div>
            </div>
        </section>
    ); 
}

export default Home;
