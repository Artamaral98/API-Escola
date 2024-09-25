import Aluno from "../models/Aluno.js";
import Foto from "../models/Foto.js";

class AlunoController {
  async index (req, res){
    const aluno = Aluno.findAll({
      attributes: ["id", "nome","sobrenome","email","idade","peso","altura"],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['url','filename']
      },

    });
    res.json(aluno)
  }

  async create (req, res){
    try{
      const newAluno = await Aluno.create(req.body)
      return res.json(newAluno)
    } catch (err){
      console.log(err)
    }

  }

  async show (req, res){
    try{
      const {id} = req.params;

    if (!id) {
      return res.status(400).json({
        errors: ['ID não enviado']
      })
    }

    const aluno = await Aluno.findByPk(id, {
      attributes: ["id", "nome","sobrenome","email","idade","peso","altura"],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['urk','filename']
      },
    })

    if (!aluno) {
      return res.status(400).json({
        errors: ['Aluno não encontrado']
      })
    }

    return res.json(aluno)

    } catch(err){
      return res.status(400).json({
        errors: err.errors.map(e => e.message)
      })
    }

  }

  async delete (req, res){
    try{
      const {id} = req.params;

      if(!id){
        return res.status(400).json({
          errors: ['ID não enviado']
        })
      }

      const aluno = await Aluno.findByPk(id)

      if(!aluno){
        return res.status(400).json({
          errors: ['Aluno não encontrado']
        })
      }

      await aluno.destroy(id)
      return res.json({
        apagado: 'Aluno apagado'
      })

    } catch (err){
      res.status(400).json({
        errors: err.errors.map(e => e.message)
      })
    }
  }

  async update (req, res){
    try{
      const {id} = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado']
        })
      }

      const aluno = await Aluno.findByPk(id)

      if(!aluno){
        return res.status(400).json({
          errors: ['Aluno não encontrado']
        })
      }

      const newData = Aluno.update(req.body)
      res.json(newData)

    } catch (err){
      res.status(400).json({
        errors: err.errors.map(e => e.message)
      })
    }
  }
}

export default new AlunoController();
