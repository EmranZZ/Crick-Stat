const express= require('express');
const app= express();
require('dotenv').config();
const cors= require('cors');
app.use(cors({
    origin:['http://localhost:3000']
}))



PORT= process.env.PORT || 5000


app.use(express.json());

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    next();
});

app.get('', (req, res)=>{
    res.json("Server Running");
})

const teamsRouter = require("./routers/pageRoute")

app.get('/image-proxy', async (req, res) => {
  const imageUrl = req.query.url;
  if (!imageUrl) {
    return res.status(400).send('Missing url parameter');
  }

  try {
    // Request the image as a stream
    const response = await axios({
      url: imageUrl,
      method: 'GET',
      responseType: 'stream',
    });

    // Set appropriate headers from original image response
    res.setHeader('Content-Type', response.headers['content-type'] || 'image/jpeg');
    res.setHeader('Cache-Control', 'public, max-age=86400'); // cache 1 day

    // Pipe the image stream directly to the response
    response.data.pipe(res);
  } catch (error) {
    console.error('Error proxying image:', error.message);
    res.status(500).send('Failed to fetch image');
  }
});

app.use("/api/teams/country", teamsRouter)
app.use("/api/page",teamsRouter)

const teamBuildRouter= require("./routers/teamBuildRouter")

app.use("/api", teamBuildRouter)


app.listen(PORT, ()=>{
    console.log(`Running on http://localhost:${PORT}`);
})