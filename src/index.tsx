import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import './app/styles/index.scss';
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider';

const application = (
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);

render(application, document.getElementById('root'));
