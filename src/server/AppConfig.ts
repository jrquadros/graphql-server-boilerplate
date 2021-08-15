import * as dotenv from 'dotenv'

dotenv.config()

type AppConfig = {
	NODE_ENV: string
	PORT: string | number
	DB_USER: string
	POSTGRES_PASSWORD: string
	POSTGRES_DB: string
	HOST: string
	DB_USER_TEST: string
	POSTGRES_DB_TEST: string
	HOST_TEST: string
	POSTGRES_PASSWORD_TEST: string
}

const environment: AppConfig = {
	NODE_ENV: process.env.NODE_ENV as string,
	PORT: process.env.PORT as string,
	DB_USER: process.env.DB_USER as string,
	POSTGRES_DB: process.env.POSTGRES_DB as string,
	POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD as string,
	HOST: process.env.HOST as string,
	DB_USER_TEST: process.env.DB_TEST_USER as string,
	POSTGRES_DB_TEST: process.env.POSTGRES_TEST_DB as string,
	POSTGRES_PASSWORD_TEST: process.env.POSTGRES_TEST_PASSWORD as string,
	HOST_TEST: process.env.HOST_TEST as string,
}

export const getEnvironment = (): AppConfig => environment
