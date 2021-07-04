import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./views/Homepage";
import ArtistScreen from "./views/ArtistScreen";
import ReleasesScreen from "./views/ReleasesScreen";
function App(props) {
	return (
		<Router>
			<div style={{ position: "relative" }}>
				<Header />
			</div>
			<div className="App" style={{ position: "relative" }}>
				<Route path="/" component={Homepage} exact />
				<Route path="/releases" component={ReleasesScreen} exact />
				<Route path="/artist/:id" component={ArtistScreen} exact />
			</div>
			<Footer />
		</Router>
	);
}

export default App;
