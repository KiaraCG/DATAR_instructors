import { extendTheme } from '@chakra-ui/react'
import * as components from './components'
import * as foundations from './foundations'

// Extract component style configs
const { Text, Heading, Button, Input, Tabs, Container } = components

// Extend the theme with foundations and components
const overrides = {
	...foundations,
	components: {
		Text,
		Heading,
		Button,
		Input,
		Tabs,
		Container,
	},
}

const theme = extendTheme(overrides)

export default theme
