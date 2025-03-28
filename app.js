import express from 'express';

const app = express();
const port = process.env.PORT || 8080;
// Route to handle GET requests to the root
app.get('/', (req, res) => {
    const timestamp = new Date().toISOString(); // Get the current timestamp in ISO format
    console.log(`[${timestamp}] Hello World! [${timestamp}] ` );
    res.send('Hello World!');
});

// Start the server
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running at http://0.0.0.0:${port}`);
});
