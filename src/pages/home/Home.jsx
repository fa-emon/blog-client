import Header from '../../Components/Header/Header';
import Posts from '../../Components/Posts/Posts';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './Home.css'

const Home = () => {
    return (
        <>
            <Header></Header>
            <div className='home'>
                <Posts></Posts>
                <Sidebar></Sidebar>
            </div>
        </>
    );
};

export default Home;