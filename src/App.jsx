import React, { useState } from 'react'
import Routes from './Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import axios from 'axios'

function App() {
	// const [user, setUser] = useState('');

	axios.defaults.headers.common['Content-Type'] = 'application/json'
	axios.defaults.headers.common['Accept'] = 'application/json'

	return (
		<ChakraProvider theme={theme}>
			<Router>
				<Routes />
				{/* <Routes user={user} setUser={setUser} /> */}
			</Router>
		</ChakraProvider>
	)
}

export default App
