import logo from './circular_logo.png';
import './Home.css';

function Home() {
    return (
        <div>
            <h1>Connect with the people around you</h1>
            <h2>Add some other catchphase here</h2>
            <button id="homeButton">Join in the scratchback family today</button>
            <img id="homeImage" src={logo} alt="Logo" />
        </div>
    )
}

export default Home;
