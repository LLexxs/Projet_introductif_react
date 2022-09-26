import '../style/Banniere.css';
import logo from '../assets/TAFlogo.png';

function Banniere() {
    return <div className="banniere">
        <img src={logo} alt="logo"/>
        <h1>Bienvenue sur Glob</h1>
    </div>
}

export default Banniere;