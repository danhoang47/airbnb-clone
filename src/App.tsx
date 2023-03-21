import { ReactNode } from 'react';

import './styles/_global.scss';

function App({ children }: { children: ReactNode }) {

	return (
		<div className="App">
			{children}			
		</div>
	);
}

export default App;

/**
 * carousel static
 * carousel dynamic
 * 
 */

