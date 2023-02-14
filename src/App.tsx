import "./_global.scss"
import { Outlet } from 'react-router-dom';
import { Box } from "@/components";

function App() {

    return (
        <Box classNames={["App"]}>
            <Outlet />
        </Box>
    );
}

export default App;
