import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import App from './App'
import News from './News'

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="news" component={<News />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
);