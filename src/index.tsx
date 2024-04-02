import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeProvider from "./context/ThemeContext";
import "./styles/_theme.css";
import {BrowserRouter as Router} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Router>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </Router>
);
