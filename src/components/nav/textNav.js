import style from './nav.module.css';
import { Link } from 'react-router-dom';
export default function TextNav({ number, title, isClick, link = '/' }) {
    return (
        <li
            style={{
                boxShadow: `0px -3px 0px 0px ${isClick} inset`,
            }}
            className={`flex  gap-2 h-full items-center ${style.list}`}
        >
            <span className="font-bold md:hidden lg:block">{number}</span>{' '}
            <Link to={link}>{title}</Link>
        </li>
    );
}
