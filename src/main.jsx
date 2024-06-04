import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		<React.StrictMode>
			<div className="logo-wrapper">
				<img className="logo" src="/logo.png" alt="Sammie Slootman" />
			</div>

			<App />
		</React.StrictMode>
		<div className="hero-wrapper">
			<img className="hero" src="/1.png" alt="Hero Image" />
		</div>
	</>
);
