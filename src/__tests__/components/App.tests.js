import { render } from '@testing-library/react';
import { App } from '../../components/App/index.jsx'

test('should render list component' , () => {
	const { container } = render(<App />);
	expect(container).toBeTruthy();
});
