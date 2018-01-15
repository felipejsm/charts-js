var app = angular.module('myApp',["chart.js"]);
app.controller('myCtrl', function($scope) {
    var vm = $scope;
    vm.historico = [];
    var res = [
        {
          "totalEvadidos": "2",
          "totalAlunos": "1",
          "ano": "2014",
          "periodo": "1",
          "unidadeFisica": "001",
          "nomeUnidadeFisica": "Campus I",
          "curso": "PUBL",
          "nome": "Publicidade e Propaganda",
          "unidadeEnsino": "2",
          "nomeUnidadeEnsino": "Faculdade",
          "anoPeriodo": "2014/1"
        },
        {
          "totalEvadidos": "1",
          "totalAlunos": "1",
          "ano": "2015",
          "periodo": "1",
          "unidadeFisica": "001",
          "nomeUnidadeFisica": "Campus I",
          "curso": "PUBL",
          "nome": "Publicidade e Propaganda",
          "unidadeEnsino": "2",
          "nomeUnidadeEnsino": "Faculdade",
          "anoPeriodo": "2015/1"
        },
        {
          "totalEvadidos": "23",
          "totalAlunos": "23",
          "ano": "2016",
          "periodo": "1",
          "unidadeFisica": "002",
          "nomeUnidadeFisica": "Campus II",
          "curso": "ARQ",
          "nome": "ARQUITETURA",
          "unidadeEnsino": "2",
          "nomeUnidadeEnsino": "Faculdade",
          "anoPeriodo": "2016/1"
        },
        {
          "totalEvadidos": "2",
          "totalAlunos": "1",
          "ano": "2014",
          "periodo": "1",
          "unidadeFisica": "001",
          "nomeUnidadeFisica": "Campus I",
          "curso": "PUBL",
          "nome": "Publicidade e Propaganda",
          "unidadeEnsino": "2",
          "nomeUnidadeEnsino": "Faculdade",
          "anoPeriodo": "2014/1"
        },
        {
          "totalEvadidos": "1",
          "totalAlunos": "1",
          "ano": "2015",
          "periodo": "1",
          "unidadeFisica": "001",
          "nomeUnidadeFisica": "Campus I",
          "curso": "PUBL",
          "nome": "Publicidade e Propaganda",
          "unidadeEnsino": "2",
          "nomeUnidadeEnsino": "Faculdade",
          "anoPeriodo": "2015/1"
        },
        {
          "totalEvadidos": "2",
          "totalAlunos": "51",
          "ano": "2014",
          "periodo": "1",
          "unidadeFisica": "001",
          "nomeUnidadeFisica": "Campus I",
          "curso": "PUBL",
          "nome": "Publicidade e Propaganda",
          "unidadeEnsino": "2",
          "nomeUnidadeEnsino": "Faculdade",
          "anoPeriodo": "2014/1"
        },
        {
          "totalEvadidos": "1",
          "totalAlunos": "51",
          "ano": "2015",
          "periodo": "1",
          "unidadeFisica": "001",
          "nomeUnidadeFisica": "Campus I",
          "curso": "PUBL",
          "nome": "Publicidade e Propaganda",
          "unidadeEnsino": "2",
          "nomeUnidadeEnsino": "Faculdade",
          "anoPeriodo": "2015/1"
        },
        {
          "totalEvadidos": "23",
          "totalAlunos": "1",
          "ano": "2016",
          "periodo": "1",
          "unidadeFisica": "003",
          "nomeUnidadeFisica": "Campus III",
          "curso": "201",
          "nome": "Administração | Seriado",
          "unidadeEnsino": "2",
          "nomeUnidadeEnsino": "Faculdade",
          "anoPeriodo": "2016/1"
        },
        {
          "totalEvadidos": "16",
          "totalAlunos": "1",
          "ano": "2016",
          "periodo": "1",
          "unidadeFisica": "003",
          "nomeUnidadeFisica": "Campus III",
          "curso": "202",
          "nome": "Pedagogia | Por Crédito Presencial",
          "unidadeEnsino": "2",
          "nomeUnidadeEnsino": "Faculdade",
          "anoPeriodo": "2016/1"
        },
        {
          "totalEvadidos": "2",
          "totalAlunos": "3",
          "ano": "2014",
          "periodo": "1",
          "unidadeFisica": "001",
          "nomeUnidadeFisica": "Campus I",
          "curso": "PUBL",
          "nome": "Publicidade e Propaganda",
          "unidadeEnsino": "2",
          "nomeUnidadeEnsino": "Faculdade",
          "anoPeriodo": "2014/1"
        },
        {
          "totalEvadidos": "1",
          "totalAlunos": "3",
          "ano": "2015",
          "periodo": "1",
          "unidadeFisica": "001",
          "nomeUnidadeFisica": "Campus I",
          "curso": "PUBL",
          "nome": "Publicidade e Propaganda",
          "unidadeEnsino": "2",
          "nomeUnidadeEnsino": "Faculdade",
          "anoPeriodo": "2015/1"
        },
        {
          "totalEvadidos": "23",
          "totalAlunos": "165",
          "ano": "2016",
          "periodo": "1",
          "unidadeFisica": "003",
          "nomeUnidadeFisica": "Campus III",
          "curso": "201",
          "nome": "Administração | Seriado",
          "unidadeEnsino": "2",
          "nomeUnidadeEnsino": "Faculdade",
          "anoPeriodo": "2016/1"
        },
        {
          "totalEvadidos": "16",
          "totalAlunos": "165",
          "ano": "2016",
          "periodo": "1",
          "unidadeFisica": "003",
          "nomeUnidadeFisica": "Campus III",
          "curso": "202",
          "nome": "Pedagogia | Por Crédito Presencial",
          "unidadeEnsino": "2",
          "nomeUnidadeEnsino": "Faculdade",
          "anoPeriodo": "2016/1"
        },
        {
          "totalEvadidos": "23",
          "totalAlunos": "99",
          "ano": "2016",
          "periodo": "1",
          "unidadeFisica": "003",
          "nomeUnidadeFisica": "Campus III",
          "curso": "201",
          "nome": "Administração | Seriado",
          "unidadeEnsino": "2",
          "nomeUnidadeEnsino": "Faculdade",
          "anoPeriodo": "2016/1"
        },
        {
          "totalEvadidos": "16",
          "totalAlunos": "99",
          "ano": "2016",
          "periodo": "1",
          "unidadeFisica": "003",
          "nomeUnidadeFisica": "Campus III",
          "curso": "202",
          "nome": "Pedagogia | Por Crédito Presencial",
          "unidadeEnsino": "2",
          "nomeUnidadeEnsino": "Faculdade",
          "anoPeriodo": "2016/1"
        },
        {
          "totalEvadidos": "23",
          "totalAlunos": "139",
          "ano": "2016",
          "periodo": "1",
          "unidadeFisica": "002",
          "nomeUnidadeFisica": "Campus II",
          "curso": "ARQ",
          "nome": "ARQUITETURA",
          "unidadeEnsino": "2",
          "nomeUnidadeEnsino": "Faculdade",
          "anoPeriodo": "2016/1"
        },
        {
          "totalEvadidos": "2",
          "totalAlunos": "91",
          "ano": "2014",
          "periodo": "1",
          "unidadeFisica": "001",
          "nomeUnidadeFisica": "Campus I",
          "curso": "PUBL",
          "nome": "Publicidade e Propaganda",
          "unidadeEnsino": "2",
          "nomeUnidadeEnsino": "Faculdade",
          "anoPeriodo": "2014/1"
        },
        {
          "totalEvadidos": "1",
          "totalAlunos": "91",
          "ano": "2015",
          "periodo": "1",
          "unidadeFisica": "001",
          "nomeUnidadeFisica": "Campus I",
          "curso": "PUBL",
          "nome": "Publicidade e Propaganda",
          "unidadeEnsino": "2",
          "nomeUnidadeEnsino": "Faculdade",
          "anoPeriodo": "2015/1"
        },
        {
          "totalEvadidos": "23",
          "totalAlunos": "25",
          "ano": "2016",
          "periodo": "1",
          "unidadeFisica": "003",
          "nomeUnidadeFisica": "Campus III",
          "curso": "201",
          "nome": "Administração | Seriado",
          "unidadeEnsino": "1",
          "nomeUnidadeEnsino": "Colégio",
          "anoPeriodo": "2016/1"
        },
        {
          "totalEvadidos": "33",
          "totalAlunos": "22",
          "ano": "2013",
          "periodo": "0",
          "unidadeFisica": "003",
          "nomeUnidadeFisica": "Campus III",
          "curso": "202",
          "nome": "Pedagogia | Por Crédito Presencial",
          "unidadeEnsino": "1",
          "nomeUnidadeEnsino": "Colégio",
          "anoPeriodo": "2013/0"
        },
        {
          "totalEvadidos": "23",
          "totalAlunos": "139",
          "ano": "2016",
          "periodo": "1",
          "unidadeFisica": "002",
          "nomeUnidadeFisica": "Campus II",
          "curso": "ARQ",
          "nome": "ARQUITETURA",
          "unidadeEnsino": "1",
          "nomeUnidadeEnsino": "Colégio",
          "anoPeriodo": "2016/1"
        },
        {
          "totalEvadidos": "10",
          "totalAlunos": "15",
          "ano": "2009",
          "periodo": "0",
          "unidadeFisica": "001",
          "nomeUnidadeFisica": "Campus I",
          "curso": "PUBL",
          "nome": "Publicidade e Propaganda",
          "unidadeEnsino": "1",
          "nomeUnidadeEnsino": "Colégio",
          "anoPeriodo": "2009/0"
        },
        {
          "totalEvadidos": "3",
          "totalAlunos": "25",
          "ano": "2010",
          "periodo": "1",
          "unidadeFisica": "002",
          "nomeUnidadeFisica": "Campus I",
          "curso": "PUBL",
          "nome": "Publicidade e Propaganda",
          "unidadeEnsino": "1",
          "nomeUnidadeEnsino": "Colégio",
          "anoPeriodo": "2010/1"
        }
      ];

      		
        function groupByUnidadeEnsino(res) {
          return  _(res)
              .groupBy(x => x.unidadeEnsino)
              .map((objs, key) => ({
              'unidadeEnsino': key,
              'object' : objs
          }))
          .value();
      }
      function montarObjeto(response) {
                vm.historico = [];
                angular.forEach(response, function(unidade) {
                    for(let index = 0, len = unidade.object.length; index < len; index++) {
                        item = {
                        'unidadeEnsino' : unidade.unidadeEnsino,
                        'totalEvadidos' : parseInt(unidade.object[index].totalEvadidos),
                        'totalAlunos' :  parseInt(unidade.object[index].totalAlunos),
                        'ano' : parseInt(unidade.object[index].ano),
                        'periodo' : unidade.object[index].periodo,
                        "unidadeFisica": unidade.object[index].unidadeFisica,
                        "nomeUnidadeFisica": unidade.object[index].nomeUnidadeFisica,
                        "nome": unidade.object[index].nome,
                        "curso": unidade.object[index].curso,
                        "nomeUnidadeEnsino": unidade.object[index].nomeUnidadeEnsino,
                        "anoPeriodo":unidade.object[index].anoPeriodo}
                        vm.historico.push(item);
                    }
              });
            }



      montarHistorico();
    function montarHistorico() {
      let agrupamento = groupByUnidadeEnsino(res);
      montarObjeto(agrupamento)
      vm.labels             = [];
      vm.data               = [];
      vm.dataDoughnut       = [];
      vm.dadosEvadidos      = [];
      vm.dadosMatriculados  = [];
      vm.options            = { legend: { display: true } };
      vm.porcentagem        = [];
      vm.nomeUnidadeEnsino  = [];
      vm.colors = [{
          backgroundColor: '#DB2C1F',
          pointBackgroundColor: '#FF6384'
      }, {
          backgroundColor: '#3E95CD',
          pointBackgroundColor: '#36A2EB'
      }];
      vm.colors2 = ['#DB2C1F','#3E95CD'];
      vm.series = ['Evadidos', 'Matriculados'];

     
      let qtdGraficos = agrupamento.length;
      let graficosInterno = [];
      let graficos =  _(vm.historico)
                    .groupBy(eva => eva.unidadeEnsino)
                    .map((objs, key) => ({
                        'unidadeEnsino': key,
                        'nomeUnidadeEnsino' : objs[0].nomeUnidadeEnsino,
                        'object' : objs
                    })).value();
      for(let indice = 0; indice < qtdGraficos; indice++) {
             graficosInterno.push(_(graficos[indice].object)
                     .groupBy(eva => eva.ano)
                     .map((objs, key) => ({
                         'anoPeriodo': objs[0].anoPeriodo,
                         'totalMatriculados': _.sumBy(objs, 'totalAlunos'),
                         'totalEvadidos'    : _.sumBy(objs, 'totalEvadidos'),
                         'object'           : objs
                     })).value());
      }
      for(let index = 0, len = qtdGraficos; index < len; index++) {
        vm.dadosEvadidos = [];
        vm.dadosMatriculados = [];
        vm.labelsAux = [];
        vm.nomeUnidadeEnsino.push(graficos[index].nomeUnidadeEnsino);
        for(let indexIn = 0, lenIn = graficosInterno[index].length; indexIn < lenIn; indexIn++) {
          vm.dadosEvadidos.push(parseInt(graficosInterno[index][indexIn].totalEvadidos));
          vm.dadosMatriculados.push(parseInt(graficosInterno[index][indexIn].totalMatriculados));
          vm.labelsAux.push(graficosInterno[index][indexIn].anoPeriodo);
        }
        vm.labels.push(vm.labelsAux);
        vm.data.push([vm.dadosEvadidos, vm.dadosMatriculados]);
        totalEvadidos = vm.dadosEvadidos.reduce(function(valorAnterior, valorAtual) {
          return valorAnterior + valorAtual;
        });
        totalMatriculados = vm.dadosMatriculados.reduce(function(valorAnterior, valorAtual) {
            return valorAnterior + valorAtual;
        });
        vm.dataDoughnut.push([totalEvadidos, totalMatriculados]);
        vm.porcentagem.push(Math.floor((totalEvadidos / totalMatriculados) * 100));
      }
     }
})