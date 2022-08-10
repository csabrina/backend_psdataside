const { validContent, validResult, treatError } = require('../until/until');

class ControllerGeneric {
  constructor(model) {
    this.model = model;
    this.create = this.create.bind(this); 
    this.all = this.all.bind(this);
    this.get = this.get.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(req, res) {
    validContent(req);

    try {
      const result = await this.model.create(req.body);
      res.status(201).send(result);
    } catch (error) {
      treatError(error, res);
    }
  }

  async all(req, res) {
    try {
      const result = await this.model.findAll();
      res.send(result);
    } catch (error) {
      treatError(error, res);
    }
  }

  async get(req, res) {
    validContent(req);
    try {
      const object = await this.model.findByPk(req.params.id);
      if (!validResult(object, res)) return;
      res.send(object);
    } catch (error) {
      treatError(error, res);
    }
  }

  async update(req, res) {
    validContent(req);

    try {
      const object = await this.model.findByPk(req.body.id);
      if (!validResult(object, res)) return;
      await object.update(req.body);
      res.send(object);
    } catch (error) {
      treatError(error, res);
    }
  }

  async delete(req, res) {
    try {
      const object = await this.model.findByPk(req.params.id);
      if (!validResult(object, res)) return;
      await object.destroy();
      res.status(200).send();
    } catch (error) {
      treatError(error, res);
    }
  }
}

module.exports = ControllerGeneric;