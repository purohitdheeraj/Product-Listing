import "./App.css";
import { Footer, Header } from "./components";
import { AllRoutes } from "./routes/AllRoutes";
// import logo from "./assets/logo.png";

function App() {
	return (
		<div>
			<Header></Header>
			<AllRoutes />
			<Footer></Footer>
		</div>
	);
}

export default App;
