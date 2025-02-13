/// <reference types="cypress" />

import type users from '../fixtures/users.json'

interface FixtureTypes {
	users: typeof users
}

declare global {
	namespace Cypress {
		interface Chainable {
			fixture<K extends keyof FixtureTypes>(
				fixtureName: K
			): Chainable<FixtureTypes[K]>

			login(email: string | undefined, password: string | undefined)
		}
	}
}
