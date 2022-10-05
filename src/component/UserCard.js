import '../style/UserCard.css';
import Rating from "./Rating";

function UserCard(){
    const Users=[
        {nom: 'Théo', com: 'Tété', con:true, etoile: 5},
        {nom: 'Florian', com: 'Floflo', con:true, etoile: 3},
        {nom: 'Nathan', com: 'Nat', con:false, etoile: 1},
        {nom: 'Mathieu', com: 'Mat', con:false, etoile: 2},
        {nom: 'Lakshman', com: 'Lak', con:true, etoile: 4},
        {nom: 'Geoffrey', com: 'Geo', con:false, etoile: 5}
    ]
    return(
        <ul className="liste">
            {Users.map((user, index) => (
                <li key={`${user}-${index}`} className={index % 2 === 0 ? "blue_card": "white_card"}>
                    <div className="nom">{user.nom}</div>
                    <div className="commentaire"><em>{user.com}</em></div>
                    <Rating star={user.etoile}/>
                    <div className="button">{user.con === true ? <button className="suivi" type="button">Suivi</button>: <button className="n-suivi" type="button">+ Suivez le</button>}</div></li>
            ))}
        </ul>
    )
}

export default UserCard;