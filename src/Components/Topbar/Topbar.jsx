import './Topbar.css';
import { FaFacebookSquare, FaInstagramSquare, FaPinterestSquare, FaTwitterSquare } from 'react-icons/fa';
import { BsSearch} from 'react-icons/bs';
import topImage from '../../assets/topImage.jpg'

const Topbar = () => {
    return (
        <div className='top'>
            <div className="topLeft">
                <FaFacebookSquare className='topIcon'></FaFacebookSquare>
                <FaTwitterSquare className='topIcon'></FaTwitterSquare>
                <FaPinterestSquare className='topIcon'></FaPinterestSquare>
                <FaInstagramSquare className='topIcon'></FaInstagramSquare>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className='topListItem'>HOME</li>
                    <li className='topListItem'>ABOUT</li>
                    <li className='topListItem'>CONTACT</li>
                    <li className='topListItem'>WRITE</li>
                    <li className='topListItem'>LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img className='topImg' src={topImage} alt="" />
                <BsSearch className='topSearchIcon'></BsSearch>
            </div>
        </div>
    );
};

export default Topbar;