import User from "../models/User.js";

class UserController {
  async create (req, res){  //Criar usuario
    try{
      const newUser = await User.create(req.body);
      return res.json(newUser)

    } catch(err){
      return res.status(400).json({errors: err.errors.map(e => e.message)});
    }

  }

  async index (req, res){ //mostrar todos os usuarios no DB
    try {
      const users = await User.findAll();
      return res.json(users);

    }catch(err){
      return res.json(null);
    }
  }

  async show (req, res,) {
    try {
      const user = await User.findByPk(req.params.id);
      return res.json(user)

    } catch(err){
      console.log(err)
      return res.status(400).json({errors: "Ocorreu um erro"});
    }
  }

  async update (req, res) {
    try {
      const user = await User.findByPk(req.userId)

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não encontrado']
        })
      }

      const newData = await user.update(req.body)
      const {id, nome, email} = newData
      return res.json(id, nome, email)

    } catch(err){
      return res.status(400).json({errors: err.errors.map(e => e.message)});
    }
  }

  async delete (req, res) {
    try {
      // const {id} = req.params

      // if (!id){
      //   return res.status(400).json({
      //     errors: ['id não encontrado']
      //   })
      // }


      const user = await User.findByPk(req.userId)
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não encontrado']
        })
      }

      await user.destroy();
      return res.json(null)

    } catch (err){
      return res.status(400).json({
        errors: err.errors.map(e => e.message)})
    }
  }
}

export default new UserController();
