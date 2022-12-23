import { defineConfig } from 'cypress'

export default defineConfig({
	e2e: {
		baseUrl: 'https://magento.softwaretestingboard.com/',
		setupNodeEvents(
			on: Cypress.PluginEvents,
			config: Cypress.PluginConfigOptions
		) {
			return config
		},
	},
})
