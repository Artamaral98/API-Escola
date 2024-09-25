import multer from "multer";
import {extname, resolve} from 'path'

const aleatorio = Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFIlter: (req, file, cb) => {      //checagem para garantir apenas arquivos de imagem
    if (file.mimetype != 'image/png' && file.mimetype != 'image/jpeg') {
      return cb(new multer.MulterError('O arquivo deverá ser PNG ou JPEG'));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, cb) => {               // faz com que o nome do arquivo enviado seja sempre a data de envio + a extensão
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`)
    },
  })
};
