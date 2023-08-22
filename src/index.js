const app = require('./server/app')


const PORT = process.env.PORT || 3000

const server = app.listen(PORT, (error) => {
    if(error) throw new Error(`Error listening on ${PORT}`)
})

process.on('uncaughtException', (error) => {
    console.log(`Error: ${error.message}`);
    server.close(() => process.exit(1))
})
