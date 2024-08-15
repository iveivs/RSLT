import { useEffect } from 'react';
import Field from './components/Field/Field';
import Information from './components/Information/Information';
import { store } from './store';

const App = () => {
	useEffect(() => {
		const unsubscribe = store.subscribe(() => setState(store.getState()));
		return () => unsubscribe();
	}, []);
	return (
		<>
			<Information />
			<Field />
		</>
	);
};

export default App;
