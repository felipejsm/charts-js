// Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'Cronos' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'custom.controllers' is found in js/controllers.js
// 'custom.dataset' is found in components/js/datasource.js
var app = (function() {
    return angular.module('MyApp', [
    'ui.router',
    'ngResource',
    'ngSanitize',
    'custom.controllers', 
    'custom.services',
    'custom.datasource',
    'chart.js',
	  'ngMask',
	  'ngJustGage',
	  'ui.bootstrap',
	  'ui.bootstrap.buttons',
	  'nvd3ChartDirectives',
	  'angular-loading-bar'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        // Set up the states
        $stateProvider
        
           .state('login', {
            url: "",
            controller: 'LoginController',
            templateUrl: 'views/login.view.html'
          })
          
          .state('main', {
            url: "/",
            controller: 'LoginController',
            templateUrl: 'views/login.view.html'
          })
          
          .state('home', {
            url: "/home",
            controller: 'HomeController',
            templateUrl: 'views/logged/home.view.html'
          })
          
          .state('bem-vindo', {
            url: "home/logged/bem-vindo",
            controller: 'PageController',
            templateUrl: '/views/logged/bem-vindo.view.html'
          })
          
          .state('home.pages', {
            url: "/{name:.*}",
            controller: 'PageController',
            templateUrl: function(urlattr){
                return '/views/'+urlattr.name+'.view.html';
            }
          })
          
          .state('404', {
            url: "/error/404",
            controller: 'PageController',
            templateUrl: function(urlattr){
                return '/views/error/404.view.html';
            }
          })
          
          .state('403', {
            url: "/error/403",
            controller: 'PageController',
            templateUrl: function(urlattr){
                return '/views/error/403.view.html';
            }
          })
          
         // For any unmatched url, redirect to /state1
         $urlRouterProvider.otherwise("/error/404");
          
    })

    .directive('crnValue', ['$parse', function($parse) {
      return {
        restrict: 'A',
        require: '^ngModel',
        link: function(scope, element, attr, ngModel) {
            var evaluatedValue;
            if(attr.value) {
              evaluatedValue = attr.value;
            } else {
              evaluatedValue = $parse(attr.crnValue)(scope);
            }
            element.attr("data-evaluated", JSON.stringify(evaluatedValue));
            element.bind("click", function(event) {
              scope.$apply(function() {
                 ngModel.$setViewValue(evaluatedValue);  
              }.bind(element));
            });
        }
      };
    }])
    
    .directive('endRepeat', ['$timeout', function ($timeout) {
			return {
				restrict: 'A',
				link: function (scope, element, attr) {
					if (scope.$last === true) {
						$timeout(function () {
							 new Swiper ('.swiper-container', {
                // Optional parameters
                direction: 'horizontal',
                loop: false
              })        
						});
					}
				}
			}
		}])
		
		
		.directive('treetableAoTerminar', function() {
      return function(scope, element, attrs) {
        if (scope.$last){
          /* Sim, é preciso chamar setTimeout,
           * ainda que a espera seja 0.
           * Mais em: http://stackoverflow.com/a/16134593
           */
          setTimeout(function(){
            $('.treetable').treetable({expandable: true}, true);
          }, 0);
        }
      };
    })
		
    // General controller
    .controller('PageController',["$scope","$rootScope", "$filter", "$parse", function(a,b,c,d){
        
      for(x in app.userEvents)
        a[x]= app.userEvents[x].bind(a);
        
        /* View Kpi Vendas */
        a.kpiVendasAcumulado = false;
        
        a.tiposKpiVendas = [{nome: 'Renovação na Base', id: 'RB', grafico: []},
                            {nome: 'Expansão na Base', id: 'EB', grafico: []},
                            {nome: 'Novos Clientes', id: 'NC', grafico: []},
                            {nome: 'Vendas Total', id: 'VT', grafico: []}];
        
        a.kpiDataVendas = {"RB": [], "EB": [], "NC": [], "VT": []};
                            
        a.dadosKpiVendas = function(json, tipo){
          a.kpiDataVendas[tipo].length = 0;
            
          var listaDeMetas = [];
          var listaDeRealizados = [];
          var meta = [];
          var realizado = [];
          
          for (i in json) {
            if (json[i]['tipo'] == tipo) {
              meta = [];
              meta.push(json[i].trimestre);
              meta.push(json[i].valorMeta);
              listaDeMetas.push(meta);
              
              realizado = [];
              realizado.push(json[i].trimestre);
              realizado.push(json[i].valorReal);
              listaDeRealizados.push(realizado);
            }
          }
          var metas = {"key": "Meta " + tipo, "values": listaDeMetas};
          a.kpiDataVendas[tipo].push(metas);
          
          var realizados = {"key": "Real", "values": listaDeRealizados};
          a.kpiDataVendas[tipo].push(realizados);
            
          return a.kpiDataVendas[tipo];
          
        }
        a.formataXKpiVendas = function(){
        	return function(d){
        		return String(d);
        	};
        };
        
        /* View Kpi */
        a.mesAtual = new Date().getMonth() + 1;
        if (a.mesAtual < 10) {
          a.mesAtual = '0' + a.mesAtual;
        }
        a.anomesSelecionado = new Date().getFullYear() + a.mesAtual;
        
        a.exibeEmMil = function (valor, unidade) {
          var saida = valor;
          if (unidade != '%') {
            saida = saida / 1000;
          }
          return saida;
        }
        
        a.estaOcupado = function(prefix, suffix) {
          return b[prefix + suffix].isBusy();
        }
        
        a.tooltipsKpiCentro = function(){
          return function(key, x, y, e, graph) {
          	return  '<h6>' + y + ' (' + x + ')</h6>';
      	  }
        }
        a.kpiDataGeral = [];
        
        a.dadosKpiCentroGeral = function(prefixoDatasource, json) {
          a.kpiDataGeral.length = 0;
          var lista = [];
          for (i in json) {
            if (json[i].grafico == 'S' && (b[prefixoDatasource + json[i].id]) && !(b[prefixoDatasource + json[i].id].isBusy())) {
              jsonGrafico = b[prefixoDatasource + json[i].id];
              lista = [];
              for (j in jsonGrafico.data) {
                lista.push([jsonGrafico.data[j].anomes, jsonGrafico.data[j].valor])
              }
              a.kpiDataGeral.push({"key": jsonGrafico.data[0].identificador, "values": lista});
            }
          }
          return a.kpiDataGeral;
        }
        
        a.kpiData = {"Receita": [], "Tributos s/ Receitas": [], "Receita Líquida": [], "Custos Diretos": [],
          "Margem de Contribuição": [], "% s/ RL": [], "Despesas": [], "EBITDA": []
        };
        
        a.dadosKpiCentro = function(prefixoDatasource, sufixoDatasource, identificador){
          var json = b[prefixoDatasource + sufixoDatasource];
          a.kpiData[identificador].length = 0;
          
          if (!json.isBusy()) {
            
            var listaDeMetas = [];
            var listaDeRealizados = [];
            var meta = [];
            var realizado = [];
            
            for (i in json.data) {
              meta = [];
              meta.push(json.data[i].anomes);
              meta.push(json.data[i].valorMeta);
              listaDeMetas.push(meta);
              
              realizado = [];
              realizado.push(json.data[i].anomes);
              realizado.push(json.data[i].valor);
              listaDeRealizados.push(realizado);
            }
            var metas = {"key": "Meta", "values": listaDeMetas};
            a.kpiData[identificador].push(metas);
            
            var realizados = {"key": "Realizado", "values": listaDeRealizados};
            a.kpiData[identificador].push(realizados);
            
          }
          return a.kpiData[identificador];
          
        }
        
        /* View cockpit */
        a.funcaoYCockpit = function(){
        	return function(d){
        		return d.valor;
        	};
        };
        
        a.funcaoXCockpit = function(){
        	return function(d){
        		return d.legenda;
        	};
        };
        
        var corGraficosCockpit = ['#00AFEF', '#FFFFFF', '#00A859', '#FFFFFF', '#FFFFFF', '#F79433', '#ED3237', '#FFFFFF'];
        a.coresCockpit = function(grafico) {
	        return function(d, i) {
	          var offset = 0;
	          if (grafico == 'recebimentos') {
    	        offset = 2;
	          } else if (grafico == 'faturamento') {
	            offset = 4;
	          } else if (grafico == 'recebiveis') {
	            offset = 6;
	          }
	          return corGraficosCockpit[i + offset];
	          
          };
        }
        a.coresLegendaCockpit = function(grafico) {
	        return function(d, i) {
	          var offset = 0;
	          if (grafico == 'recebimentos') {
    	        offset = 2;
	          } else if (grafico == 'faturamento') {
	            offset = 4;
	          } else if (grafico == 'recebiveis') {
	            offset = 6;
	          }
	          return corGraficosCockpit[i + offset];
	          
          };
        }
        
        a.tituloRecebiveis = "Recebíveis - Vencido";
        a.tipoRecebiveis = "V";
        
        a.$on('elementClick.directive', function(angularEvent, event){
          
          /* cliques nos gráficos do cockpit */
          if (angularEvent.targetScope.id == 'graficoPagamentos' ||
              angularEvent.targetScope.id == 'graficoRecebimentos' ||
              angularEvent.targetScope.id == 'graficoFaturamento' ||
              angularEvent.targetScope.id == 'graficoRecebiveis') {
                
            var seletorModal = '';
            
            if (event.label == 'Pago') {
              seletorModal = "#pagamentoDet"
            } else if (event.label == 'A pagar') {
              seletorModal = "#contapagarDet";
            } else if (event.label == 'Recebido') {
              seletorModal = "#recebimentoDet";
            } else if (event.label == 'Faturado') {
              seletorModal = "#faturado";
            } else if (event.label == 'A faturar') {
              seletorModal = "#naoFaturado";
            } else if (event.label == 'Vencido') {
              seletorModal = "#detalheVencido";
            } else if (event.label == 'A vencer') {
              seletorModal = "#detalheAVencer";
            }
            
            if (seletorModal) {
              angular.element(seletorModal).modal('show');
            }
            
            
          }
        });
        
        
        a.conteudoTooltipCockpit = function(){
        	return function(key, x, y, e, graph) {
            	return  '<h4>' + x + '</h4>';
        	}
        }
        
        
        a.predicadoPagamento = '';
        a.descendentePagamento = false;
        a.ordenaPagamentos = function(predicado, descendente){
          a.predicadoPagamento = predicado;
          a.descendentePagamento = descendente;
        };
        
        a.predicadoRecebimento = '';
        a.descendenteRecebimento = false;
        a.ordenaRecebimentos = function(predicado, descendente){
          a.predicadoRecebimento = predicado;
          a.descendenteRecebimento = descendente;
        };
        
        a.predicadoAPagar = '';
        a.descendenteAPagar = false;
        a.ordenaAPagar = function(predicado, descendente){
          a.predicadoAPagar = predicado;
          a.descendenteAPagar = descendente;
        };
        
        
        
        /* View físico */
        a.anomesSelecionadoCap = '';
        a.funcionarioSelecionadoContrato = '';
        a.horasFaturaveis = [[],[]];
        a.colunaHoras = [{}];
        a.colunaSomavel = [{}];
        a.somaNaoFaturavies = [{},{}];
        
        
        a.calculoDaDiferencaSomavel = function(oper, colA, colB, json) {
          a.somaNaoFaturavies.length = 0;
          var auxA = 0;
          var auxB = 0;
          for (var i in json) {
            
            if (colA == "disponivel") {
              auxA = json[i].disponivel;
            }
            
            if (colB == "apontamento") {
              auxB = json[i].apontamento;
            }
            
            a.somaNaoFaturavies[i] = {};
            
            if (json[i].soma == "S") {
              a.somaNaoFaturavies[i][colA] = auxA;
              a.somaNaoFaturavies[i][colB] = auxB;
            } else {
              a.somaNaoFaturavies[i][colA] = '';
              a.somaNaoFaturavies[i][colB] = '';
            }
          }
          
          return a.calculoDaDiferenca(oper, colA, colB, a.somaNaoFaturavies);
          
        }
        
        a.calculaColunaSomavel = function(oper, col, json) {
          a.colunaSomavel.length = 0;
          for (var i in json) {
            if (json[i].soma == 'S') {
              if (col == "maxima") {
                a.colunaSomavel[i] = {};
                a.colunaSomavel[i][col] = json[i].maxima;
              } else if (col == "disponivel") {
                a.colunaSomavel[i] = {};
                a.colunaSomavel[i][col] = json[i].disponivel;  
              }
            }
          }
          return a.calculaColuna(oper, col, a.colunaSomavel);
        }
        
        a.mostraFisicoDetalhes = function(anomes) {
          a.anomesSelecionadoCap = anomes;
        }
        
        a.mostraContratoDetalhes = function(func) {
          a.funcionarioSelecionadoContrato = func;  
        }
        
        a.somaHoras = function(json, faturavel){
          a.colunaHoras.length = 0;
          for (var i in json) {
            if (json[i].faturavel == faturavel) {
              a.colunaHoras[i] = {};
              a.colunaHoras[i]['horas'] = json[i].horas;
            }
          }
          return a.calculaColuna('soma', 'horas', a.colunaHoras);
        }
        
        a.horasData = function(json) {
          var absoluto = a.clienteSelecionado || a.contratoSelecionado;
          
          a.horasFaturaveis[0].length = 0;
          a.horasFaturaveis[1].length = 0;
          var dividendo;
          var divisor;
          var media;
          
          if (absoluto) {
            media = a.calculaColuna("media", "horas", json).toFixed(2);
          } else {
            dividendo = a.calculaColuna("soma", "horas", json);
            divisor = a.calculaColuna("soma", "disponivel", json);
            if (divisor != 0) {
              media = Math.round(100 * (dividendo / divisor)); 
            }
          }
          
          for (var i in json) {
            if (json[i].horas == '' ||  json[i].horas == null) {
              dividendo = 0;  
            } else {
              dividendo = parseInt(json[i].horas);
            }
            divisor = parseInt(json[i].disponivel);
            
            if (absoluto) {
              a.horasFaturaveis[0][i] = dividendo;  
            } else if (divisor != 0){
              a.horasFaturaveis[0][i] = Math.round(100 * (dividendo / divisor));  
            }
            
            a.horasFaturaveis[1][i] = media;
            
          }
          return a.horasFaturaveis;
        }
        
        a.seriesFisicoDataCliente = ['horas apontamento', 'média'];
        a.seriesFisicoData = ['% horas faturáveis', 'média'];
        
        a.seriesFisico = function(){
          if (a.clienteSelecionado || a.contratoSelecionado) {
            return a.seriesFisicoDataCliente;
          }
          return a.seriesFisicoData;
        }
        
        /* View financeiro */
        a.anomesSelecionadoCli = '201501';
        
        a.anoAtual = new Date().getFullYear();
        a.anoSelecionado = "";
        a.mesSelecionado = 0;
        a.tipoSelecionado = "";
        a.clienteSelecionado = "";
        a.anomesInicialSelecionado = "";
        a.anomesFinalSelecionado = "";
        a.linhaSelecionada = "";
        
        
        a.labelsCalculados = [];
        a.graficoAcumulado = 'S';
        
        a.dadosFinanceirosCalculados = [[],[],[]];
        a.dadosFinanceirosCalculadosCliente = [[],[]];
        a.dadosFinanceirosCalculadosUnico = [[]];
        
        a.seriesFinanceiras = [];
        
        a.finGrafico = {};
        a.finGrafico.mostra = 'todos';
        
        a.agrupadorFinanceiroSelecionado = '';
        a.anomesFinanceiroSelecionado = '';
        
        a.financeiroSeries = function() {
          a.seriesFinanceiras.length = 0;
          
          if (a.finGrafico.mostra == 'todos' && (!a.clienteSelecionado && !a.contratoSelecionado)) {
            a.seriesFinanceiras.push('Disponível');
            a.seriesFinanceiras.push('Real');
            a.seriesFinanceiras.push('Apontamento');
          } else if (a.finGrafico.mostra == 'todos' && (a.clienteSelecionado || a.contratoSelecionado)) {
            a.seriesFinanceiras.push('Real');
            a.seriesFinanceiras.push('Apontamento');
          } else if (a.finGrafico.mostra == 'disponivel') {
            a.seriesFinanceiras.push('Disponível');
          } else if (a.finGrafico.mostra == 'real') {
            a.seriesFinanceiras.push('Real');
          } else if (a.finGrafico.mostra == 'apontamento') {
            a.seriesFinanceiras.push('Apontamento');
          }
          
          return a.seriesFinanceiras;
        }
        
        a.financeiroData = function(json) {
          
          a.dadosFinanceirosCalculados[0].length = 0;
          a.dadosFinanceirosCalculados[1].length = 0;
          a.dadosFinanceirosCalculados[2].length = 0;
          
          a.dadosFinanceirosCalculadosCliente[0].length = 0;
          a.dadosFinanceirosCalculadosCliente[1].length = 0;
          
          a.dadosFinanceirosCalculadosUnico[0].length = 0;
          
          if (json.length > 0) {
            a.dadosFinanceirosCalculados[0][0] = parseFloat(json[0].valorDisponivel);
            a.dadosFinanceirosCalculados[1][0] = parseFloat(json[0].valorReal);
            a.dadosFinanceirosCalculados[2][0] = parseFloat(json[0].valorApontamento);
          }
          for (var i = 1; i < json.length; i++) {
            if (a.graficoAcumulado == 'N') {
              a.dadosFinanceirosCalculados[0][i] = parseFloat(json[i].valorDisponivel);
              a.dadosFinanceirosCalculados[1][i] = parseFloat(json[i].valorReal);
              a.dadosFinanceirosCalculados[2][i] = parseFloat(json[i].valorApontamento);
            } else if (a.graficoAcumulado == 'S'){
              a.dadosFinanceirosCalculados[0][i] = parseFloat(json[i].valorDisponivel) + a.dadosFinanceirosCalculados[0][i - 1];
              a.dadosFinanceirosCalculados[1][i] = parseFloat(json[i].valorReal) + a.dadosFinanceirosCalculados[1][i - 1];
              a.dadosFinanceirosCalculados[2][i] = parseFloat(json[i].valorApontamento) + a.dadosFinanceirosCalculados[2][i - 1];
            }
          }
          
          if (a.finGrafico.mostra == 'todos' && (!a.clienteSelecionado && !a.contratoSelecionado)) {
            return a.dadosFinanceirosCalculados;
          } else if (a.finGrafico.mostra == 'todos' && (a.clienteSelecionado || a.contratoSelecionado)) {
            a.dadosFinanceirosCalculadosCliente[0] = a.dadosFinanceirosCalculados[1];
            a.dadosFinanceirosCalculadosCliente[1] = a.dadosFinanceirosCalculados[2];
            return a.dadosFinanceirosCalculadosCliente;
          } else if (a.finGrafico.mostra == 'disponivel') {
            a.dadosFinanceirosCalculadosUnico[0] = a.dadosFinanceirosCalculados[0];
            return a.dadosFinanceirosCalculadosUnico;
          } else if (a.finGrafico.mostra == 'real') {
            a.dadosFinanceirosCalculadosUnico[0] = a.dadosFinanceirosCalculados[1];
            return a.dadosFinanceirosCalculadosUnico;
          } else if (a.finGrafico.mostra == 'apontamento') {
            a.dadosFinanceirosCalculadosUnico[0] = a.dadosFinanceirosCalculados[2];
            return a.dadosFinanceirosCalculadosUnico;
          }
          
        }
        
        /* view faturamentos */
        a.fatGrafico = {};
        a.fatGrafico.mostra = 'ambos'
        
        a.fatDadosCalculados = [[],[]];
        a.fatDataCalculadosUnico = [[]];
        
        a.graficoFinanceiroAcumulado = 'S';
        
        a.fatDadosSeries = [];
        
        /*
        TODO: reportar aos desenvolvedores da biblioteca
        de gráficos, que não é possível inserir cores
        dinamicamente.
        Angular-chart: https://github.com/jtblin/angular-chart.js
        Dica: use a seguinte função para testar.
        
        a.fatDadosCores = [];
        a.fatCores = function(){
          return a.coresTeste;
          
          a.fatDadosCores.length = 0;
          if (a.fatGrafico.mostra == 'ambos') {
            a.fatDadosCores.push('#00A859');
            a.fatDadosCores.push('#F79433');
          } else if (a.fatGrafico.mostra == 'software') {
            a.fatDadosCores.push('#00A859');
          } else if (a.fatGrafico.mostra == 'servico') {
            a.fatDadosCores.push('#F79433');
          }
          return a.fatDadosCores;
        } */
        
        a.fatSeries = function(){
          a.fatDadosSeries.length = 0;
          if (a.fatGrafico.mostra == 'ambos') {
            a.fatDadosSeries.push('Software');
            a.fatDadosSeries.push('Serviço');
          } else if (a.fatGrafico.mostra == 'software') {
            a.fatDadosSeries.push('Software');
          } else if (a.fatGrafico.mostra == 'servico') {
            a.fatDadosSeries.push('Serviço');
          }
          return a.fatDadosSeries;
          
        }
        
        a.fatAnoData = function(json, acumula) {
          
          a.fatDadosCalculados[0].length = 0;
          a.fatDadosCalculados[1].length = 0;
          a.fatDataCalculadosUnico[0].length = 0;
          
          if (json.length > 0) {
            a.fatDadosCalculados[0][0] = parseFloat(json[0].software);
            a.fatDadosCalculados[1][0] = parseFloat(json[0].servico); 
          }
          for (var i = 1; i < json.length; i++) {
            if (acumula == 'S') {
              a.fatDadosCalculados[0][i] = parseFloat(json[i].software) + a.fatDadosCalculados[0][i - 1];
              a.fatDadosCalculados[1][i] = parseFloat(json[i].servico) + a.fatDadosCalculados[1][i - 1];
            } else {
              a.fatDadosCalculados[0][i] = parseFloat(json[i].software);
              a.fatDadosCalculados[1][i] = parseFloat(json[i].servico);
            }
          }
          
          if (a.fatGrafico.mostra == 'ambos') {
            return a.fatDadosCalculados;
          } else if (a.fatGrafico.mostra == 'software') {
            a.fatDataCalculadosUnico[0] = a.fatDadosCalculados[0];
            return a.fatDataCalculadosUnico;
          } else if (a.fatGrafico.mostra == 'servico') {
            a.fatDataCalculadosUnico[0] = a.fatDadosCalculados[1];
            return a.fatDataCalculadosUnico;
          }
          
        }
        
        a.fatAnoLabels = function(json) {
          a.labelsCalculados.length = 0;
          for (var i in json) {
            a.labelsCalculados[i] = json[i].ano + "/" + json[i].mes;
          }
          return a.labelsCalculados;
        }
        
        
        a.chamaAnoCliente = function (ano, mes, tipo) {
          a.anoSelecionado = ano;
          a.mesSelecionado = mes;
          a.tipoSelecionado = tipo;
        }
        
        a.selecionaCliente = function(idCliente){
          a.clienteSelecionado = idCliente;
        }
        
        a.adiciona = function(a, b) {
          return parseFloat(a) + parseFloat(b);
        }
        
        /* view contabilidade */
        a.graficoCarregando = true;
        
        a.carregaGrafico = function (onde, relatorio) {
          
          document.domain = 'cronospaas.com';
  
          var customization = new spotfire.webPlayer.Customization();
          customization.showTopHeader = false;
          customization.showToolBar = false;
          customization.showExportFile = false;
          customization.showExportVisualization = false;
          customization.showCustomizableHeader = false;
          customization.showPageNavigation = false;
          customization.showStatusBar = false;
          customization.showDodPanel = false;
          customization.showFilterPanel = false;
          
          var webPlayer = new spotfire.webPlayer.Application("//spotfire.cronospaas.com/SpotfireWeb/", customization);
          
          
          // now load the web player into your web page
          webPlayer.open(
                relatorio, // the path to your project in the Spotfire library
                onde, // this is the div tag in your HTML page you want to the web player to appear inside
                 null // this last option is for if you need to pass your web player parameters for a parameterised information link
          );
          
          a.graficoCarregando = false;  
          
        }
        
        a.limpaConta = function(conta) {
          resultado = conta.trim().replace(/\./g,'');
          return resultado;
        }
        
        /* view RH */
        a.agrupador = 'anomes';
        
        a.anomesRh = '';
        a.dadosRhCalculados = [[],[]];
        a.dadosRhCalculadosUnico = [[]];
        a.graficoRhAcumulado = "S";
        a.idModalFuncionario = "";
        a.mostraBruto = false;
        
        a.escolheOrdenacao = function(bruto){
          if (bruto) {
            return 'bruto';
          } else {
            return 'custo'; 
          }
        }
        
        a.nomeExibicaoAgrupador = function(agrupador){
          exibicao = agrupador;
          
          if (agrupador == 'centro') {
            exibicao = 'centro de custo'
          } else if (agrupador == 'linha') {
            exibicao = 'linha de negócio';
          }
          
          return exibicao;
        }
        
        a.escolheAgrupador = function(){
          if (a.idModalFuncionario) {
            return 'funcionario';
          }
          return a.agrupador;
        }
        
        a.escolheIdSelecionado = function (agrupador, idModalFuncionario, itemIdSelecionado, itemNomeSelecionado){
          if (idModalFuncionario && agrupador == itemNomeSelecionado) {
            return idModalFuncionario;  
          }
          return itemIdSelecionado;
          
        }
        
        a.calculaMedia = function(soma, quantidade) {
          return (soma/quantidade);
        }
        
        a.escolheAnomes = function(agrupador, anomesRh, anomesSelecionado) {
          if ((agrupador != 'anomes' && anomesRh != '') || (a.idModalFuncionario != '')) {
            return anomesRh;
          }
          return anomesSelecionado;
        }
        
        a.rhData = function(json, acumulado, bruto) {
          var nome_coluna = "custo";
          if (bruto) {
            nome_coluna =  "bruto";
          }
          
          var media = a.calculaColuna("media", nome_coluna, json).toFixed(2);
          
          a.dadosRhCalculados[0].length = 0;
          a.dadosRhCalculados[1].length = 0;
          a.dadosRhCalculadosUnico[0].length = 0;
          
          if (json.length > 0) {
            if (bruto) {
              a.dadosRhCalculados[0][0] = parseFloat(json[0].bruto);
            }else {
              a.dadosRhCalculados[0][0] = parseFloat(json[0].custo);  
            }
            a.dadosRhCalculados[1][0] = media;
          }
          for (var i = 1; i < json.length; i++) {
            valor_atual = parseFloat(json[i].custo);
            if (bruto) {
              valor_atual = parseFloat(json[i].bruto);
            }
            if (acumulado == 'N') {
          	  a.dadosRhCalculados[0][i] = valor_atual;
            } else if (acumulado == 'S'){
          	  a.dadosRhCalculados[0][i] = valor_atual + a.dadosRhCalculados[0][i - 1];
            }
          	a.dadosRhCalculados[1][i] = media;
          }
          if (acumulado == 'S') {
            a.dadosRhCalculadosUnico[0] = a.dadosRhCalculados[0];
            return a.dadosRhCalculadosUnico;
          }
          return a.dadosRhCalculados;
        }
        
        /* View plano de contas */
        a.planoAcumulado = 'N';
        a.anoContabilSelecionado = new Date().getFullYear().toString();
        a.mesSelecionado = '';
        a.listaDeMeses = [{id: 1, nome: 'Janeiro'},
                          {id: 2, nome: 'Fevereiro'},
                          {id: 3, nome: 'Março'},
                          {id: 4, nome: 'Abril'},
                          {id: 5, nome: 'Maio'},
                          {id: 6, nome: 'Junho'},
                          {id: 7, nome: 'Julho'},
                          {id: 8, nome: 'Agosto'},
                          {id: 9, nome: 'Setembro'},
                          {id: 10, nome: 'Outubro'},
                          {id: 11, nome: 'Novembro'},
                          {id: 12, nome: 'Dezembro'},
                          
                          ];
        
        /* View despesa e desembolso */
        a.graficoDespesaAcumulado = 'S';
        a.dadosDespesaCalculados = [[],[]];
        a.dadosDespesaCalculadosUnico = [[]];
        
        a.tipoGastoSelecionado = '';
        
        a.anomesDespesaSelecionado = '';
        
        /* Se agrupador for '', se está no contexto da
         * página. Caso contrário (se 'grupo' ou 'categoria'),
         * o contexto é o do modal.
         */
        a.agrupadorDespesa = '';
        
        a.calculaPercentual = function(parte, total) {
          var percentual = 0;
          if (total != 0 && total != '' && total != null &&
              parte != '' && parte != null) {
              percentual = 100 * (parte / total);
              return Math.round(percentual);
          } else {
            return "não definido";
          }
          
        }
        
        a.despesaData = function (json, acumula){
          
          a.dadosDespesaCalculados[0].length = 0;
          a.dadosDespesaCalculados[1].length = 0;
          a.dadosDespesaCalculadosUnico[0].length = 0;
          
          media = a.calculaColuna("media", "valor", json).toFixed(2);
          
          if (json.length > 0) {
            a.dadosDespesaCalculados[0][0] = parseFloat(json[0].valor);
            a.dadosDespesaCalculados[1][0] = media; 
          }
          for (var i = 1; i < json.length; i++) {
            a.dadosDespesaCalculados[0][i] = parseFloat(json[i].valor);
            if (acumula == 'S') {
              a.dadosDespesaCalculados[0][i] += a.dadosDespesaCalculados[0][i - 1];
            }
            a.dadosDespesaCalculados[1][i] = media;
          }
          if (acumula == 'S') {
            a.dadosDespesaCalculadosUnico[0] = a.dadosDespesaCalculados[0];
            return a.dadosDespesaCalculadosUnico;
          }
          
          return a.dadosDespesaCalculados;
          
        }
        
        
        /* Utilitários: funcões genéricas utilizadas nas views deste controller */
        
        /* Caso exista apenas uma linha, a seleciona e
         * remove a opção 'todas'. É usada para usuários
         * que possuem permissão para ler apenas uma
         * linha de negócios (ex.: diretor de educação).
         */
        a.inicializaLinha = function(linhas, idCampo) {
          if (linhas.length == 1) {
            a.linhaSelecionada = linhas[0][idCampo];
          }
        }
        
        a.textoPercentual = function(parte, total) {
          var percentual = 0;
          if (total != 0 && total != '' && total != null &&
              parte != '' && parte != null) {
              percentual = 100 * (parte / total);
              return "(" +  Math.round(percentual) + "%)";
          }
        }
        a.tipoSelecionadoNome = function(){
          if (a.tipoSelecionado == 'o') {
            return "Software";
          }
          else if (a.tipoSelecionado == 'e') {
            return "Serviço";
          }
          return "Software ou Serviço"
        }
        
        a.nomeExibicao = function(id, linhas, mensagem_todas) {
          for (var i in linhas) {
            if (linhas[i].id == id) {
              return linhas[i].identificador;
            }
          }
          return mensagem_todas;
        }
        
        a.calculaColuna = function(oper, col, json) {
          var resultado = 0;
          var contador = 0;
          var parcela = 0;
          var aux;
          for (var indice in json) {
            aux = false;
            
            if (typeof col === 'string') {
              aux = json[indice][col];  
            } else {
              console.log('Nome da coluna a ser somada deve ser do tipo String. Interrompendo soma...');
              break;
            }
      			
      			if (aux == 0 || (aux != null && aux != '')) {
      			  parcela = parseFloat(aux);
              resultado += parcela;
              contador += 1;
      			}
            
          }
          
          if (oper == "media" && resultado != 0) {
            resultado = resultado / contador;    
          }
          
          return resultado;
        }
        
        a.calculoDaDiferenca = function(oper, colA, colB, json) {
          var resultado = 0;
          var contador = 0;
          var parcela = 0;
          
          var auxA = false;
          var auxB = false;
          for (var indice in json) {
            auxA = json[indice][colA];
            auxB = json[indice][colB];
            
            if (!((auxA == null || auxA == '') && (auxB == null || auxB == ''))) {
              if (auxA == null || auxA == '') {
                auxA = 0;
              }
              if (auxB == null || auxB == '') {
                auxB = 0;
              }
              parcela = parseFloat(auxA) - parseFloat(auxB);
              resultado += parcela;
              contador += 1;   
            }
            
          }
          if (oper == "media" && contador != 0) {
            resultado = resultado / contador;
          }
          return resultado;
        }
        
        a.monetarioParaFloat = function(str) {
          /* Recebe uma string formatada como
           * valor monetário no padrão decimal
           * e devolve o mesmo número em float.
           * Ex.: '12.234.345,32' -> 12234345.32
           */
          return parseFloat(str.replace(/\./g, '').replace(/,/, '.'));
        }
        
        var _ocupado = function(datasource) {
          if (typeof datasource !== 'undefined' && datasource.isBusy()) {
            return true;
          }
          return false;
        }
        
        b.desabilitaFiltros = function(){
          
          if (
              /* cockpit */
              _ocupado(b.Faturamentos) ||
              _ocupado(b.Caixa) ||
              _ocupado(b.Pagamentos) ||
              _ocupado(b.Recebimentos) ||
              _ocupado(b.Recebiveis) ||
              _ocupado(b.Servicos) ||
              _ocupado(b.ServicosF) ||
              _ocupado(b.DetalhesRecebiveis) ||
              _ocupado(b.RecebimentosDet) ||
              _ocupado(b.PagamentosDet) ||
              _ocupado(b.ContaPagarDet) ||
              
              /* despesas e desembolsos */
              _ocupado(b.Despesa) ||
              
              /* faturamentos */
              _ocupado(b.FatAno) ||
              _ocupado(b.AnoCliente) ||
              _ocupado(b.ServicoCliente) ||
              
              /* físico-finaceiro */
              _ocupado(b.Financeiro) ||
              
              /* físico */
              _ocupado(b.capacidadeDetalhe) ||
              _ocupado(b.Fisico) ||
              _ocupado(b.Contrato) ||
              
              /* mapa de alocação */
              _ocupado(b.MapaAlocacao) ||
              
              /* plano de contas */
              _ocupado(b.Plano) ||
              _ocupado(b.Ano) ||
              
              /* rh */
              _ocupado(b.Ficha) ||
              
              /* viagens */
              _ocupado(b.dtsViagens) ||
              
              /* gerais */
              _ocupado(b.Acesso)
              ) {
            return true;      
          }
          
          return false;
        };
        
        /* Se o elemento selecionado não estiver na lista,
         * de opções, devolve '' (string vazia), que representa
         * todos. Caso contrário, devolve a si mesmo. */
        a.corrigeSelecao = function(opcoes, id_selecionado) {
          var resultado = id_selecionado;
          
          if (id_selecionado != '') {
            var esta_na_lista = false;
            for (var i = 0; i < opcoes.length; i++) {
              if (opcoes[i].id == id_selecionado) {
                esta_na_lista = true;
                break;
              }
            }
            if (!esta_na_lista) {
              resultado = '';
            }
          }
          return resultado;
        }
        
        a.genericLabelsCalculados = [];
        a.genericLabels = function(json, abcissas) {
          a.genericLabelsCalculados.length = 0;
          for (var i in json) {
            a.genericLabelsCalculados[i] = json[i][abcissas];
          }
          return a.genericLabelsCalculados;
        }
        
        /* fim dos utilitários */
        
        // Custom
        a.filtro = { 
          date: new Date()
        }
        
        // Lista de meses
        a.listaMes = [
          {value:1,  label:'Janeiro'},
          {value:2,  label:'Fevereiro'},
          {value:3,  label:'Março'},
          {value:4,  label:'Abril'},
          {value:5,  label:'Maio'},
          {value:6,  label:'Junho'},
          {value:7,  label:'Julho'},
          {value:8,  label:'Agosto'},
          {value:9,  label:'Setembro'},
          {value:10, label:'Outubro'},
          {value:11, label:'Novembro'},
          {value:12, label:'Dezembro'},
        ];
        
        a.listaAno = [];
        var currentYear = new Date().getFullYear() - 10;
        // calcula 10 anos a frente e 10 anos
        for(var i = 0; i <= 20; i++) {
          a.listaAno.push({value : (currentYear+i), label: (currentYear+i)});
        }
        
        a.novoApontamento = {
          data : new Date()
        };
    }])
    
    .filter('filtraContaDescricao', function() {
      return function(entrada, busca) {
        
        var saida = [];
        var j = 0;
        
        if (busca) {
          for (var i in entrada) {
            if ((entrada[i].contaFantasia.toLowerCase().indexOf(busca.toLowerCase()) != -1)
                || (entrada[i].descricao.toLowerCase().indexOf(busca.toLowerCase()) != -1)) {
              saida[j] = {};
              saida[j] = entrada[i];
              j++;
            }
          }
        } else {
          saida = entrada;
        }
        return saida;        
      };
    })
    
    .filter('corrigeTiposDeCampos', function(){
      return function (entrada){
        var saida = [];
        var novaData;
        
        for (i in entrada) {
          saida[i] = entrada[i];
          
          if (typeof entrada[i]['valor'] === "string") {
            saida[i]['valor'] = parseFloat(entrada[i]['valor']);
          }
          
          if (typeof entrada[i]['liquido'] === "string") {
            saida[i]['liquido'] = parseFloat(entrada[i]['liquido']);
          }
          if (typeof entrada[i]['data'] === "string") {
            novaData = [];
            novaData = entrada[i]['data'].split('/');
            saida[i]['data'] = new Date(parseInt(novaData[2]), parseInt(novaData[1]) - 1, parseInt(novaData[0]));
          }
        }
        return saida;
      }
    })
    
    .filter('movimentacao', function() {
      return function(entrada, escolha) {
        var saida = [];
        if (escolha == true) {
          var j = 0;
          for (var i in entrada) {
            if (entrada[i].saldoInicial != '0,00' || entrada[i].credito != '0,00' || entrada[i].debito != '0,00') {
              saida[j] = {};
              saida[j] = entrada[i];
              j++;
            }
            
          }
        } else {
          saida = entrada;
        }
        return saida;
      };
    })
    
    .run(function($rootScope,$state) {
      $rootScope.$on('$stateChangeError', function() {
        if(arguments.length >= 6) {
          var requestObj = arguments[5];
          if(requestObj.status === 404 || requestObj.status === 403) {
            $state.go(requestObj.status.toString()); 
          }
        } else {
          $state.go('404');
        }
      });
    });

}(window));

app.userEvents = {};