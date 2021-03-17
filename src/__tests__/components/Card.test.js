import { render } from '@testing-library/react';
import { Card } from '../../components/Card/index.jsx'

test('should render list component' , () => {
	const { container } = render(<Card />);
	expect(container).toBeTruthy();
});
