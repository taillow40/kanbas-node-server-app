function QuizRoutes(app) {
    const hello = (req, res) => {
      res.send("Life is good!");
    };
    app.get("/api/quiz", hello);
    app.post("/rest/tuits")
    app.get("/qwe/:dsa", (zxc, rew) => {
      const wer = zxc.params.dsa;
      const ert = "Hello " + wer;
      rew.json(ert);
    })

   
    
  }

  export let movies = [
    {_id: '123', title: 'Avatar' },
  ]
  const MoviesController = (app) => {
    const deleteMovie = (req, res) => {
      const mid = req.params['mid'];
      movies = movies.filter((m)=>m._id !== mid);
      res.status(200);

  }
  app.delete('/api/movies/:mid', deleteMovie);
}
 
  
  export default QuizRoutes;
  
