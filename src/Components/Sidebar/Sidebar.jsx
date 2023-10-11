import './Sidebar.css'
import aboutMe from '../../assets/aboutMe.jpg'
import { FaFacebookSquare, FaInstagramSquare, FaPinterestSquare, FaTwitterSquare } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className='sidebarTitle'>ABOUT ME</span>
                <img className='aboutMeImage' src={aboutMe} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="sidebarItem">
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>

            <div className="sidebarItem">
                <span className='sidebarTitle'>FOLLOW US</span>
                <div className="sidebarSocial">
                    <FaFacebookSquare className='sidebarIcon'></FaFacebookSquare>
                    <FaTwitterSquare className='sidebarIcon'></FaTwitterSquare>
                    <FaPinterestSquare className='sidebarIcon'></FaPinterestSquare>
                    <FaInstagramSquare className='sidebarIcon'></FaInstagramSquare>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;