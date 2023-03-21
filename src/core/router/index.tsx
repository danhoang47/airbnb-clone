import {
	createRoutesFromElements,
	createBrowserRouter,
	Route,
} from "react-router-dom";
import DefaultLayout from "@layouts/default";
import Home from "@pages/home";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/" element={<Home />}/>
			</Route>
		</Route>
	)
)

export default router;