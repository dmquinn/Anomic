import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./views/Homepage";
import ArtistScreen from "./views/ArtistScreen";
import ArtistsScreen from "./views/ArtistsScreen";
import ReleasesScreen from "./views/ReleasesScreen";
import AboutScreen from "./views/AboutScreen";
import EventsScreen from "./views/EventsScreen";
const App = () => {
  return (
    <Router>
      <div style={{ position: "relative" }}>
        <Header />
      </div>
      <div className="App" style={{ position: "relative" }}>
        <Route path="/" component={Homepage} exact />
        <Route path="/releases" component={ReleasesScreen} />
        <Route path="/artists" component={ArtistsScreen} />
        <Route path="/about" component={AboutScreen} />
        <Route path="/events" component={EventsScreen} />
        <Route path="/artists/:name" component={ArtistScreen} exact />
      </div>
      <Footer />
    </Router>
  );
};
//test

export default App;
