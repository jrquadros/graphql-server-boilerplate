type AppConfig = {
	PORT: string | number
	DB_USER: string
	POSTGRES_PASSWORD: string
	POSTGRES_DB: string
	HOST: string
}
export const getEnvironment = (): AppConfig => ({
	PORT: process.env.PORT as string,
	DB_USER: process.env.DB_USER as string,
	POSTGRES_DB: process.env.POSTGRES_DB as string,
	POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD as string,
	HOST: process.env.HOST as string,
})
