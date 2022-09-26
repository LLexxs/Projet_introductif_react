import '../style/UserCard.css';

function UserCard(){
    const Users=[
        {nom: 'Théo', com: 'Tété', con:true},
        {nom: 'Florian', com: 'Floflo', con:true},
        {nom: 'Nathan', com: 'Nat', con:false},
        {nom: 'Mathieu', com: 'Mat', con:false},
        {nom: 'Lakshman', com: 'Lak', con:true},
        {nom: 'Geoffrey', com: 'Geo', con:false}
    ]
    return(
        <ul className="liste">
            {Users.map((user, index) => (
                <li key={`${user}-${index}`} className={index % 2 === 0 ? "blue_card": "white_card"}>
                    <div className="nom">{user.nom}</div>
                    <div className="commentaire"><em>{user.com}</em></div>
                    <div className="button">{user.con === true ? <button className="suivi" type="button">Suivi</button>: <button className="n-suivi" type="button">+ Suivez le</button>}</div></li>
            ))}
        </ul>
    )
}

export default UserCard;