import DestiNav from '../../components/destiNav/index';
import Nav from '../../components/nav/index';
import style from './destination.module.css';
function Destination() {
    return (
        <div className={`flex flex-col pt-6 h-screen  ${style.container}`}>
            <Nav dest="rgba(255, 255, 255, 1)" />
            <DestiNav />
        </div>
    );
}

export default Destination;
