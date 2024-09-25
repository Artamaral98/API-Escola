import multer from 'multer';
import multerConfig from '../config/multerConfig.js';
const upload = multer(multerConfig).single('foto'); //foto é o nome do arquivo que deverá ser enviado no insomnia

import Foto from '../models/Foto.js';

class FotoController {
  create(req, res){
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code]
        })
      }

      try {
        const {originalname, filename} = req.file
        const {aluno_id} = req.body;
        const foto = await Foto.create({originalname, filename, aluno_id})

        res.json(foto)

      } catch(err){
        return res.status(400).json({
          errors: ['Aluno não encontrado']
        })
      }

    })
  }
}

export default new FotoController();
