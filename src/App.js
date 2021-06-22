import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./views/homepage";
import ArtistScreen from "./views/ArtistScreen";
function App(props) {
	return (
		<Router>
			<img
				src="https://f4.bcbits.com/img/0021114911_10.jpg"
				alt=""
				className="logo"
			/>
			<Header />
			<div className="App">
				<Route path="/" component={Homepage} exact />
				<Route path="/artist/:id" component={ArtistScreen} exact />
			</div>
		</Router>
	);
}

export default App;
