import '../style/Footer.css';

function Footer() {
    const numero = "0606060606"
    const site = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
    return  <div className="footer">
                <div className="numero">
                    Tél : <a href="tel:{numero}">+ 33 6 06 06 06 06</a>
                </div>
                <div className="site">
                    <a href={site}>YouTube</a>
                </div>
                <div className="rights">
                    All rights deserved
                </div>
            </div>

}

export default Footer;