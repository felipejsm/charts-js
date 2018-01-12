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
                        'ano' : unidade.object[index].ano,
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
        let dataSeriesEvadidos = [];
        let dataSeriesMatriculados = [];
        vm.labels = [];
        dataSeriesEvadidos = [];
        dataSeriesMatriculados = [];
        vm.data = [];
        vm.data2 = [];
        let totalEvadidos;
        let totalMatriculados;
        let graficos =  _(vm.historico)
                 .groupBy(eva => eva.unidadeEnsino)
                 .map((objs, key) => ({
                     'unidadeEnsino': key,
                     'object' : objs
                 })).value();
         let qtdGraficos = graficos.length;
         let graficosInterno = [];
         for(let indice = 0; indice < qtdGraficos; indice++) {
             graficosInterno.push(_(graficos[indice].object)
                     .groupBy(eva => eva.anoPeriodo)
                     .map((objs, key) => ({
                         'anoPeriodo': key,
                         'totalMatriculados': _.sumBy(objs, 'totalAlunos'),
                         'totalEvadidos'    : _.sumBy(objs, 'totalEvadidos'),
                         'object'           : objs
                     })).value());
         }
         vm.colors2 = ['#DB2C1F','#3E95CD'];
         //vm.colors = ['#DB2C1F','#3E95CD'] ['#e86a6a', '#828ff2'];
         for(let index = 0, len = qtdGraficos; index < len; index++) {
             vm.data.push([]);
             dataSeriesEvadidos      = [];
             dataSeriesMatriculados  = [];
             for(let indexIn = 0, lenIn = graficosInterno[index].length; indexIn < lenIn; indexIn++) {
                 vm.labels.push([]);
                 vm.labels[indexIn].push(graficosInterno[index][indexIn].anoPeriodo);
                 dataSeriesEvadidos.push(graficosInterno[index][indexIn].totalEvadidos);
                 dataSeriesMatriculados.push(graficosInterno[index][indexIn].totalMatriculados);
             }
             vm.data[index].push(dataSeriesEvadidos);
             vm.data[index].push(dataSeriesMatriculados);
             totalEvadidos = dataSeriesEvadidos.reduce(function(valorAnterior, valorAtual) {
                 return valorAnterior + valorAtual;
             });
             totalMatriculados = dataSeriesMatriculados.reduce(function(valorAnterior, valorAtual) {
                 return valorAnterior + valorAtual;
             });
             vm.data2.push([totalEvadidos, totalMatriculados]);
         }
         vm.options = { legend: { display: true } };
         vm.colors = [{
             backgroundColor: '#DB2C1F',
             pointBackgroundColor: '#FF6384'
         }, {
             backgroundColor: '#3E95CD',
             pointBackgroundColor: '#36A2EB'
         }];
         vm.series = ['Evadidos', 'Matriculados'];
     }
})