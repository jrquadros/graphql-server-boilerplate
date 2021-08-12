import { Column, Entity, PrimaryColumn } from 'typeorm'

import { uid } from 'uid'

@Entity()
export class Users {
	@PrimaryColumn()
	id: string
	@Column({ length: 100, type: 'varchar' })
	firstName: string
	@Column('varchar')
	lastName: string
	@Column({ length: 100, type: 'varchar' })
	email: string

	constructor(firstName: string, lastName: string, email: string) {
		this.id = uid(16)
		this.firstName = firstName
		this.lastName = lastName
		this.email = email
	}
}

export const users: Users[] = [
	{ email: 'usertest@gmail.com', firstName: 'User', id: '1ad123', lastName: 'user last name' },
]
