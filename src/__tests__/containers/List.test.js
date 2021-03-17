import { render } from '@testing-library/react';
import { List } from '../../containers/List/index.jsx'

test('should render list component' , () => {
	const { container } = render(<List />);
	expect(container).toBeTruthy();
});
