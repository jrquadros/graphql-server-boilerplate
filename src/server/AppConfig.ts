type AppConfig = {
	portNumber?: string | number 
}
export const getEnvironment = (): AppConfig => ({
	portNumber: process.env.PORT,
})
