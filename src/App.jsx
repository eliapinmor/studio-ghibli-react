import CharacterCard from './components/CharacterCard';
// Datos de los personajes (nombre e imagen)
const characters = [
  {
    name: 'Totoro',
    image: 'https://via.placeholder.com/200' 
  },
  {
    name: 'Chihiro',
    image: 'https://via.placeholder.com/200'
  },
  {
    name: 'Ponyo',
    image: 'https://via.placeholder.com/200'
  }
];
function App() {
  return (
    <div className="app-container">
      <h1>Bienvenido al mundo de Studio Ghibli</h1>
      <p>Explora los personajes de tus películas favoritas de Studio
        Ghibli.</p>
      {/* Renderizamos los personajes usando el componente CharacterCard
*/}
      <div className="characters-grid">
        {characters.map((character) => (
          <CharacterCard
            key={character.name} // La propiedad key es necesaria cuando
            renderizamos listas en React
            name={character.name}
            image={character.image}
          />
        ))}
      </div>
    </div>
  );
}
export default App; 