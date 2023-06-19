interface IAddress {
	street: string
	number: string
	zipcode: string
}

export interface IUser {
	name: string
	email: string
	password: string
	address?: IAddress
}

export interface IUserFixture {
	[username: string]: IUser
}
