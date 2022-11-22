import UserNavbar from "../../components/UserNavbar";
import routesManager from "../../components/Routesmanager";

const Home = () => {
  return <UserNavbar></UserNavbar>;
};

export default routesManager(Home);
