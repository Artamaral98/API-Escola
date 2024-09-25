import User from "../models/User.js";
import jwt from "jsonwebtoken"
import dotevn from "dotenv"
dotevn.config()

class TokenController {
  async create (req, res){
    try{
      const {email = '', password = ''} = req.body

      if (!email || !password){
        res.status(401).json({
          errors: ['Credenciais inválidas']
        })
      }

      const user = await User.findOne({where: {email}})

      if (!user){
        return res.status(401).json({
          errors: ['Usuário não encontrado']
        })}

      if(!(await user.passwordIsValid(password))){ //checar se a senha do usuario é valida
        return res.status(401).json({
          errors: ['Senha inválida']
        });
      }

      const {id} = user
      const token = jwt.sign({ id, email}, process.env.TOKEN_SECRET,{
        expiresIn: process.env.TOKEN_EXPIRE,
      });


      return res.json({token});

    }catch(err) {
      res.status(400).json({errors: err.errors.map(e => e.message)})
    }
  }
}

export default new TokenController();
