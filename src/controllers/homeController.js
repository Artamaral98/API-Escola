class HomeController {
  async create(req, res){
    // const novoAluno = await Aluno.create({nome:"Arthur", sobrenome:"Amaral", email:"arthur@gmail.com",idade:"25", peso: 70, altura: 1.82});
    res.json('index');
  }
}

export default new HomeController();
