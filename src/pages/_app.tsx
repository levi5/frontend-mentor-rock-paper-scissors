import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyle from 'styles/global';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>Rock - Paper - Scissors</title>
				<link
					href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,300;1,400;1,500;1,700&display=swap"
					rel="stylesheet"
				/>

				<link rel="shortcut icon" href="" />
				<link rel="apple-touch-icon" href="" />
				<link rel="description" href="" />
				<link rel="manifest" href="/manifest.json" />
				<meta
					name="description"
					content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
				/>
			</Head>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
};

export default App;
