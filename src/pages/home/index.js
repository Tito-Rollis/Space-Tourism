import Nav from '../../components/nav/index';
import style from './home.module.css';
function Home() {
    return (
        <div className={`h-screen ${style.homeContainer}`}>
            <Nav />
        </div>
    );
}

export default Home;
