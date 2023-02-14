import Home from '@pages/Home';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom';
import App from '../App';
import { DefaultLayout } from '../layouts';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App />}>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />}/>
                <Route path="/room" element={<div>Room</div>} />
            </Route>
        </Route>
    )
)

export default router;