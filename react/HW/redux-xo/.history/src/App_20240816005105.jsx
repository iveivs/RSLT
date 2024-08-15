import Field from './components/Field/Field';
import Information from './components/Information/Information';

const App = () => {
	useEffec(() => {
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
