import Banner from "../Banner";
import About from "./About";
import MyContract from "./MyContract";
import MyProject from "./MyProject";
import Skill from "./Skill";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <MyContract></MyContract>
            <MyProject></MyProject>


        </div>
    );
};

export default Home;