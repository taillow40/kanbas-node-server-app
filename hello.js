function HelloRoutes(app) {
  const hello = (req, res) => {
    res.send("Life is good!");
  };
  const fullStack = (req, res) => {
    res.send("Welcome to Full Stack!");
  }
  app.get("/hello", hello);
}
export default HelloRoutes;
