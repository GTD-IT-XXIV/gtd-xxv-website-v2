import NavBar from "./components/navbar/navbar.js";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer.js";
import "./App.css";

function App(props) {
    const AllRoutes = props.routes.map((routes) => (
        <Route
            exact
            key={routes.id}
            path={routes.path}
            element={routes.component}
        />
    ));

    return (
        <div className="App">
            <NavBar routes={props.routes} />
            <Routes>{AllRoutes}</Routes>
            <Footer />
        </div>
    );
}

export default App;
