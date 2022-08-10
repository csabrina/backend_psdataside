 const validContent = (req) => {
    if (!req.body) {
      res.status(400).send({
        message: 'Conteúdo inválido',
      });
    }
  };
  
  const validResult = (object, res) => {
    if (!validValue(object)) {
      res.status(404).send({
        message: 'Objeto não encontrado!',
      });
      return false;
    }
    return true;
  };
  
  const treatError = (error, res) => {
    console.log(error);
    res.status(500).send({
      message: error,
    });
  };
  
  const validValue = (value) =>
    value !== undefined && value !== '' && value !== null && value !== 0;
  
  module.exports = {
    validContent,
    validResult,
    treatError,
    validValue,
  };
