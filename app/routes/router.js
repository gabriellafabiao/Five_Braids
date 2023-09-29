var express = require('express');
var router = express.Router();

/* var fabricaDeConexao = require ("../../config/databese");
var conexao = fabricaDeConexao(); */

router.get('/', (req, res) => {
  res.render('pages/index',{incluir:null});
});

router.get('/cadastro', (req, res) => {
  res.render('pages/index',{incluir:'cadastro'});
});

/*-------------------------------------LOGIN----------------------------------------*/

router.get('/login', (req, res) => {
  res.render('pages/login/login',{incluir:'login'});
});

router.post("/login", function (req, res) {
  console.log(req.body)
});

router.get('/senha', (req, res) => {
  res.render('pages/login/senha',{incluir:'senha'});
});

router.get('/escolha', (req, res) => {
  res.render('pages/login/escolha',{incluir:'escolha'});
});

router.get('/cliente', (req, res) => {
  res.render('pages/login/cliente',{incluir:'cliente'});
});

router.get('/trancista', (req, res) => {
  res.render('pages/login/trancista',{incluir:'trancista'});
});

/*-------------------------------------PRODUTOS----------------------------------------*/

router.get('/acessorios', (req, res) => {
  res.render('pages/produtos/acessorios',{incluir:'acessorios'});
});

router.get('/gel', (req, res) => {
  res.render('pages/produtos/gel',{incluir:'gel'});
});

router.get('/jumbo', (req, res) => {
  res.render('pages/produtos/jumbo',{incluir:'jumbo'});
});

router.get('/kanekalon', (req, res) => {
  res.render('pages/produtos/kanekalon',{incluir:'kanekalon'});
});

router.get('/la', (req, res) => {
  res.render('pages/produtos/la',{incluir:'la'});
});

router.get('/laces', (req, res) => {
  res.render('pages/produtos/laces',{incluir:'laces'});
});

router.get('/perucas', (req, res) => {
  res.render('pages/produtos/perucas',{incluir:'perucas'});
});


/*-------------------------------------TRANCISTA----------------------------------------*/

router.get('/pag', (req, res) => {
  res.render('pages/trancista/pag',{incluir:'pag'});
});

router.get('/perfil', (req, res) => {
  res.render('pages/trancista/perfil',{incluir:'perfil'});
});

module.exports = router;