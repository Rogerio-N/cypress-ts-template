import { defineConfig } from 'cypress'

export default defineConfig({
    e2e: {
        baseUrl: 'https://example.cypress.io',
        setupNodeEvents(
            on: Cypress.PluginEvents,
            config: Cypress.PluginConfigOptions
        ) {
            return config
        }
    }
})
