export class User {
  id: string
  firstName: string
  lastName: string
  email: string

  constructor(data: User) {
    const { firstName, lastName, id, email } = data
    this.firstName = firstName
    this.lastName = lastName
    this.id = id
    this.email = email
  }
}

export const users: User[] = [
  { email: 'usertest@gmail.com', firstName: 'User', id: '_id', lastName: 'user last name' },
]
