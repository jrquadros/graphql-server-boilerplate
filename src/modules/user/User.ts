import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class User {
	@PrimaryColumn()
	id: string
	@Column({ length: 100, type: 'varchar' })
	firstName: string
	@Column('varchar')
	lastName: string
	@Column({ length: 100, type: 'varchar' })
	email: string
}

export const users: User[] = [
	{ email: 'usertest@gmail.com', firstName: 'User', id: '1ad123', lastName: 'user last name' },
]
