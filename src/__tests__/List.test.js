import { render } from '@testing-library/react';

test('should', () => {
	const { container } = render(<h1>hello</h1>);
	expect(container).toBe(true);
});
