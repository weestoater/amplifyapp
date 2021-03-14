import {render, screen} from '@testing-library/react';
import App from './App';

test('renders burtware', () => {
	render(<App />);
	const linkElement = screen.getByText(/burtware/i);
	expect(linkElement).toBeInTheDocument();
});
