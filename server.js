function createServer() {
    console.log('Create and start server');
}
createServer();

const app = createApp();
app.get('/app-endpoint');