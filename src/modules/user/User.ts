import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'

import { uid } from 'uid'

@Entity()
export class Users {
	@PrimaryColumn()
	id: string

	@PrimaryGeneratedColumn()
	_id: number
	@Column({ length: 100, type: 'varchar' })
	firstName: string
	@Column('varchar')
	lastName: string
	@Column({ length: 100, type: 'varchar', unique: true })
	email: string

	constructor(firstName: string, lastName: string, email: string) {
		this.id = uid(16)
		this.firstName = firstName
		this.lastName = lastName
		this.email = email
	}
}
