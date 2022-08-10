module.exports = (rota, app, controller, middleware) => {

      app.use(rota, middleware);
    
      app.post(rota, controller.create);
    
      app.get(rota, controller.all);
    
      app.get(rota+'/:id', controller.get);
    
      app.put(rota, controller.update);
    
      app.delete(rota='/:id', controller.delete)
};