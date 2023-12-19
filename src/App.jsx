import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyTopBar from "./components/TopBar";
import MyFooter from "./components/Footer";
import MyAlert from "./components/Alert";

function App() {
	return (
		<div>
			<MyTopBar />
			<MyAlert />
			<MyFooter />
		</div>
	);
}

export default App;
