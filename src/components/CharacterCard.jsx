function CharacterCard({ name, image }) {
 return (
 <div className="character-card">
 <img src={image} alt={name} className="character-card-image" />
 <h3>{name}</h3>
 </div>
 );
 }

 export default CharacterCard;