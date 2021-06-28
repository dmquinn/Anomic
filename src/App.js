import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./views/homepage";
import ArtistScreen from "./views/ArtistScreen";
import ReleasesScreen from "./views/ReleasesScreen";
function App(props) {
	return (
		<Router>
			<a href="/">
				<img
					src="https://f4.bcbits.com/img/0021114911_10.jpg"
					alt=""
					className="logo"
				/>
			</a>
			<Header />
			<div className="App">
				<Route path="/" component={Homepage} exact />
				<Route path="/releases" component={ReleasesScreen} exact />
				<Route path="/artist/:id" component={ArtistScreen} exact />
			</div>
			<Footer />
		</Router>
	);
}

export default App;
