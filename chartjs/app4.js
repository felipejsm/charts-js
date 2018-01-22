angular.module("app", ["chart.js"]).controller("LineCtrl", function ($scope) {
 
  var res = 
[
  {
    "soma": 1000,
    "ano": 2003,
    "mes": 1,
    "tipo": "faturamento",
    "anoMes": "2003/1"
  },
  {
    "soma": 1000,
    "ano": 2003,
    "mes": 2,
    "tipo": "faturamento",
    "anoMes": "2003/2"
  },
  {
    "soma": 1000,
    "ano": 2003,
    "mes": 3,
    "tipo": "faturamento",
    "anoMes": "2003/3"
  },
  {
    "soma": 1000,
    "ano": 2003,
    "mes": 4,
    "tipo": "faturamento",
    "anoMes": "2003/4"
  },
  {
    "soma": 1000,
    "ano": 2003,
    "mes": 5,
    "tipo": "faturamento",
    "anoMes": "2003/5"
  },
  {
    "soma": 1000,
    "ano": 2003,
    "mes": 6,
    "tipo": "faturamento",
    "anoMes": "2003/6"
  },
  {
    "soma": 1000,
    "ano": 2003,
    "mes": 7,
    "tipo": "faturamento",
    "anoMes": "2003/7"
  },
  {
    "soma": 1000,
    "ano": 2003,
    "mes": 8,
    "tipo": "faturamento",
    "anoMes": "2003/8"
  },
  {
    "soma": 1000,
    "ano": 2003,
    "mes": 9,
    "tipo": "faturamento",
    "anoMes": "2003/9"
  },
  {
    "soma": 1000,
    "ano": 2003,
    "mes": 10,
    "tipo": "faturamento",
    "anoMes": "2003/10"
  },
  {
    "soma": 1000,
    "ano": 2003,
    "mes": 11,
    "tipo": "faturamento",
    "anoMes": "2003/11"
  },
  {
    "soma": 1000,
    "ano": 2003,
    "mes": 12,
    "tipo": "faturamento",
    "anoMes": "2003/12"
  },
  {
    "soma": 1150,
    "ano": 2004,
    "mes": 1,
    "tipo": "faturamento",
    "anoMes": "2004/1"
  },
  {
    "soma": 1150,
    "ano": 2004,
    "mes": 2,
    "tipo": "faturamento",
    "anoMes": "2004/2"
  },
  {
    "soma": 1150,
    "ano": 2004,
    "mes": 3,
    "tipo": "faturamento",
    "anoMes": "2004/3"
  },
  {
    "soma": 1150,
    "ano": 2004,
    "mes": 4,
    "tipo": "faturamento",
    "anoMes": "2004/4"
  },
  {
    "soma": 1150,
    "ano": 2004,
    "mes": 5,
    "tipo": "faturamento",
    "anoMes": "2004/5"
  },
  {
    "soma": 1150,
    "ano": 2004,
    "mes": 6,
    "tipo": "faturamento",
    "anoMes": "2004/6"
  },
  {
    "soma": 1150,
    "ano": 2004,
    "mes": 7,
    "tipo": "faturamento",
    "anoMes": "2004/7"
  },
  {
    "soma": 1150,
    "ano": 2004,
    "mes": 8,
    "tipo": "faturamento",
    "anoMes": "2004/8"
  },
  {
    "soma": 1150,
    "ano": 2004,
    "mes": 9,
    "tipo": "faturamento",
    "anoMes": "2004/9"
  },
  {
    "soma": 1150,
    "ano": 2004,
    "mes": 10,
    "tipo": "faturamento",
    "anoMes": "2004/10"
  },
  {
    "soma": 1150,
    "ano": 2004,
    "mes": 11,
    "tipo": "faturamento",
    "anoMes": "2004/11"
  },
  {
    "soma": 1150,
    "ano": 2004,
    "mes": 12,
    "tipo": "faturamento",
    "anoMes": "2004/12"
  },
  {
    "soma": 1800,
    "ano": 2005,
    "mes": 1,
    "tipo": "faturamento",
    "anoMes": "2005/1"
  },
  {
    "soma": 1800,
    "ano": 2005,
    "mes": 2,
    "tipo": "faturamento",
    "anoMes": "2005/2"
  },
  {
    "soma": 1800,
    "ano": 2005,
    "mes": 3,
    "tipo": "faturamento",
    "anoMes": "2005/3"
  },
  {
    "soma": 1800,
    "ano": 2005,
    "mes": 4,
    "tipo": "faturamento",
    "anoMes": "2005/4"
  },
  {
    "soma": 1800,
    "ano": 2005,
    "mes": 5,
    "tipo": "faturamento",
    "anoMes": "2005/5"
  },
  {
    "soma": 1800,
    "ano": 2005,
    "mes": 6,
    "tipo": "faturamento",
    "anoMes": "2005/6"
  },
  {
    "soma": 1800,
    "ano": 2005,
    "mes": 7,
    "tipo": "faturamento",
    "anoMes": "2005/7"
  },
  {
    "soma": 1800,
    "ano": 2005,
    "mes": 8,
    "tipo": "faturamento",
    "anoMes": "2005/8"
  },
  {
    "soma": 1800,
    "ano": 2005,
    "mes": 9,
    "tipo": "faturamento",
    "anoMes": "2005/9"
  },
  {
    "soma": 1800,
    "ano": 2005,
    "mes": 10,
    "tipo": "faturamento",
    "anoMes": "2005/10"
  },
  {
    "soma": 1800,
    "ano": 2005,
    "mes": 11,
    "tipo": "faturamento",
    "anoMes": "2005/11"
  },
  {
    "soma": 1800,
    "ano": 2005,
    "mes": 12,
    "tipo": "faturamento",
    "anoMes": "2005/12"
  },
  {
    "soma": 2000,
    "ano": 2006,
    "mes": 1,
    "tipo": "faturamento",
    "anoMes": "2006/1"
  },
  {
    "soma": 2000,
    "ano": 2006,
    "mes": 2,
    "tipo": "faturamento",
    "anoMes": "2006/2"
  },
  {
    "soma": 2000,
    "ano": 2006,
    "mes": 3,
    "tipo": "faturamento",
    "anoMes": "2006/3"
  },
  {
    "soma": 2000,
    "ano": 2006,
    "mes": 4,
    "tipo": "faturamento",
    "anoMes": "2006/4"
  },
  {
    "soma": 2000,
    "ano": 2006,
    "mes": 5,
    "tipo": "faturamento",
    "anoMes": "2006/5"
  },
  {
    "soma": 2000,
    "ano": 2006,
    "mes": 6,
    "tipo": "faturamento",
    "anoMes": "2006/6"
  },
  {
    "soma": 2000,
    "ano": 2006,
    "mes": 7,
    "tipo": "faturamento",
    "anoMes": "2006/7"
  },
  {
    "soma": 2000,
    "ano": 2006,
    "mes": 8,
    "tipo": "faturamento",
    "anoMes": "2006/8"
  },
  {
    "soma": 2000,
    "ano": 2006,
    "mes": 9,
    "tipo": "faturamento",
    "anoMes": "2006/9"
  },
  {
    "soma": 2000,
    "ano": 2006,
    "mes": 10,
    "tipo": "faturamento",
    "anoMes": "2006/10"
  },
  {
    "soma": 2000,
    "ano": 2006,
    "mes": 11,
    "tipo": "faturamento",
    "anoMes": "2006/11"
  },
  {
    "soma": 2000,
    "ano": 2006,
    "mes": 12,
    "tipo": "faturamento",
    "anoMes": "2006/12"
  },
  {
    "soma": 2800,
    "ano": 2007,
    "mes": 1,
    "tipo": "faturamento",
    "anoMes": "2007/1"
  },
  {
    "soma": 2800,
    "ano": 2007,
    "mes": 2,
    "tipo": "faturamento",
    "anoMes": "2007/2"
  },
  {
    "soma": 2800,
    "ano": 2007,
    "mes": 3,
    "tipo": "faturamento",
    "anoMes": "2007/3"
  },
  {
    "soma": 2800,
    "ano": 2007,
    "mes": 4,
    "tipo": "faturamento",
    "anoMes": "2007/4"
  },
  {
    "soma": 2800,
    "ano": 2007,
    "mes": 5,
    "tipo": "faturamento",
    "anoMes": "2007/5"
  },
  {
    "soma": 2800,
    "ano": 2007,
    "mes": 6,
    "tipo": "faturamento",
    "anoMes": "2007/6"
  },
  {
    "soma": 2800,
    "ano": 2007,
    "mes": 7,
    "tipo": "faturamento",
    "anoMes": "2007/7"
  },
  {
    "soma": 2800,
    "ano": 2007,
    "mes": 8,
    "tipo": "faturamento",
    "anoMes": "2007/8"
  },
  {
    "soma": 2800,
    "ano": 2007,
    "mes": 9,
    "tipo": "faturamento",
    "anoMes": "2007/9"
  },
  {
    "soma": 2800,
    "ano": 2007,
    "mes": 10,
    "tipo": "faturamento",
    "anoMes": "2007/10"
  },
  {
    "soma": 2800,
    "ano": 2007,
    "mes": 11,
    "tipo": "faturamento",
    "anoMes": "2007/11"
  },
  {
    "soma": 2800,
    "ano": 2007,
    "mes": 12,
    "tipo": "faturamento",
    "anoMes": "2007/12"
  },
  {
    "soma": 3800,
    "ano": 2008,
    "mes": 1,
    "tipo": "faturamento",
    "anoMes": "2008/1"
  },
  {
    "soma": 3800,
    "ano": 2008,
    "mes": 2,
    "tipo": "faturamento",
    "anoMes": "2008/2"
  },
  {
    "soma": 3800,
    "ano": 2008,
    "mes": 3,
    "tipo": "faturamento",
    "anoMes": "2008/3"
  },
  {
    "soma": 3800,
    "ano": 2008,
    "mes": 4,
    "tipo": "faturamento",
    "anoMes": "2008/4"
  },
  {
    "soma": 3800,
    "ano": 2008,
    "mes": 5,
    "tipo": "faturamento",
    "anoMes": "2008/5"
  },
  {
    "soma": 3800,
    "ano": 2008,
    "mes": 6,
    "tipo": "faturamento",
    "anoMes": "2008/6"
  },
  {
    "soma": 3800,
    "ano": 2008,
    "mes": 7,
    "tipo": "faturamento",
    "anoMes": "2008/7"
  },
  {
    "soma": 3800,
    "ano": 2008,
    "mes": 8,
    "tipo": "faturamento",
    "anoMes": "2008/8"
  },
  {
    "soma": 3800,
    "ano": 2008,
    "mes": 9,
    "tipo": "faturamento",
    "anoMes": "2008/9"
  },
  {
    "soma": 3800,
    "ano": 2008,
    "mes": 10,
    "tipo": "faturamento",
    "anoMes": "2008/10"
  },
  {
    "soma": 3800,
    "ano": 2008,
    "mes": 11,
    "tipo": "faturamento",
    "anoMes": "2008/11"
  },
  {
    "soma": 3800,
    "ano": 2008,
    "mes": 12,
    "tipo": "faturamento",
    "anoMes": "2008/12"
  },
  {
    "soma": -650,
    "ano": 2008,
    "mes": 12,
    "tipo": "receita",
    "anoMes": "2008/12"
  },
  {
    "soma": 4100,
    "ano": 2009,
    "mes": 1,
    "tipo": "faturamento",
    "anoMes": "2009/1"
  },
  {
    "soma": 4100,
    "ano": 2009,
    "mes": 2,
    "tipo": "faturamento",
    "anoMes": "2009/2"
  },
  {
    "soma": 4100,
    "ano": 2009,
    "mes": 3,
    "tipo": "faturamento",
    "anoMes": "2009/3"
  },
  {
    "soma": 4100,
    "ano": 2009,
    "mes": 4,
    "tipo": "faturamento",
    "anoMes": "2009/4"
  },
  {
    "soma": 4100,
    "ano": 2009,
    "mes": 5,
    "tipo": "faturamento",
    "anoMes": "2009/5"
  },
  {
    "soma": 4100,
    "ano": 2009,
    "mes": 6,
    "tipo": "faturamento",
    "anoMes": "2009/6"
  },
  {
    "soma": 4100,
    "ano": 2009,
    "mes": 7,
    "tipo": "faturamento",
    "anoMes": "2009/7"
  },
  {
    "soma": 4100,
    "ano": 2009,
    "mes": 8,
    "tipo": "faturamento",
    "anoMes": "2009/8"
  },
  {
    "soma": 4100,
    "ano": 2009,
    "mes": 9,
    "tipo": "faturamento",
    "anoMes": "2009/9"
  },
  {
    "soma": 4100,
    "ano": 2009,
    "mes": 10,
    "tipo": "faturamento",
    "anoMes": "2009/10"
  },
  {
    "soma": 4100,
    "ano": 2009,
    "mes": 11,
    "tipo": "faturamento",
    "anoMes": "2009/11"
  },
  {
    "soma": 4100,
    "ano": 2009,
    "mes": 12,
    "tipo": "faturamento",
    "anoMes": "2009/12"
  },
  {
    "soma": 9398.34,
    "ano": 2010,
    "mes": 1,
    "tipo": "faturamento",
    "anoMes": "2010/1"
  },
  {
    "soma": 9398.34,
    "ano": 2010,
    "mes": 2,
    "tipo": "faturamento",
    "anoMes": "2010/2"
  },
  {
    "soma": 9398.34,
    "ano": 2010,
    "mes": 3,
    "tipo": "faturamento",
    "anoMes": "2010/3"
  },
  {
    "soma": 9398.34,
    "ano": 2010,
    "mes": 4,
    "tipo": "faturamento",
    "anoMes": "2010/4"
  },
  {
    "soma": 9398.34,
    "ano": 2010,
    "mes": 5,
    "tipo": "faturamento",
    "anoMes": "2010/5"
  },
  {
    "soma": 9398.34,
    "ano": 2010,
    "mes": 6,
    "tipo": "faturamento",
    "anoMes": "2010/6"
  },
  {
    "soma": 9398.34,
    "ano": 2010,
    "mes": 7,
    "tipo": "faturamento",
    "anoMes": "2010/7"
  },
  {
    "soma": 9398.34,
    "ano": 2010,
    "mes": 8,
    "tipo": "faturamento",
    "anoMes": "2010/8"
  },
  {
    "soma": 337.5,
    "ano": 2010,
    "mes": 8,
    "tipo": "receita",
    "anoMes": "2010/8"
  },
  {
    "soma": 9408.34,
    "ano": 2010,
    "mes": 9,
    "tipo": "faturamento",
    "anoMes": "2010/9"
  },
  {
    "soma": 10181.34,
    "ano": 2010,
    "mes": 10,
    "tipo": "faturamento",
    "anoMes": "2010/10"
  },
  {
    "soma": 10191.34,
    "ano": 2010,
    "mes": 11,
    "tipo": "faturamento",
    "anoMes": "2010/11"
  },
  {
    "soma": 9956.26,
    "ano": 2010,
    "mes": 12,
    "tipo": "faturamento",
    "anoMes": "2010/12"
  },
  {
    "soma": 1817,
    "ano": 2011,
    "mes": 1,
    "tipo": "faturamento",
    "anoMes": "2011/1"
  },
  {
    "soma": 2895,
    "ano": 2011,
    "mes": 2,
    "tipo": "faturamento",
    "anoMes": "2011/2"
  },
  {
    "soma": 2895,
    "ano": 2011,
    "mes": 3,
    "tipo": "faturamento",
    "anoMes": "2011/3"
  },
  {
    "soma": 2844,
    "ano": 2011,
    "mes": 4,
    "tipo": "faturamento",
    "anoMes": "2011/4"
  },
  {
    "soma": 371.8,
    "ano": 2011,
    "mes": 4,
    "tipo": "receita",
    "anoMes": "2011/4"
  },
  {
    "soma": 5722,
    "ano": 2011,
    "mes": 5,
    "tipo": "faturamento",
    "anoMes": "2011/5"
  },
  {
    "soma": 449.9,
    "ano": 2011,
    "mes": 5,
    "tipo": "receita",
    "anoMes": "2011/5"
  },
  {
    "soma": 5722,
    "ano": 2011,
    "mes": 6,
    "tipo": "faturamento",
    "anoMes": "2011/6"
  },
  {
    "soma": 449.89,
    "ano": 2011,
    "mes": 6,
    "tipo": "receita",
    "anoMes": "2011/6"
  },
  {
    "soma": 5208,
    "ano": 2011,
    "mes": 7,
    "tipo": "faturamento",
    "anoMes": "2011/7"
  },
  {
    "soma": 4550,
    "ano": 2011,
    "mes": 8,
    "tipo": "faturamento",
    "anoMes": "2011/8"
  },
  {
    "soma": 4300,
    "ano": 2011,
    "mes": 9,
    "tipo": "faturamento",
    "anoMes": "2011/9"
  },
  {
    "soma": 4300,
    "ano": 2011,
    "mes": 10,
    "tipo": "faturamento",
    "anoMes": "2011/10"
  },
  {
    "soma": 4300,
    "ano": 2011,
    "mes": 11,
    "tipo": "faturamento",
    "anoMes": "2011/11"
  },
  {
    "soma": 4300,
    "ano": 2011,
    "mes": 12,
    "tipo": "faturamento",
    "anoMes": "2011/12"
  },
  {
    "soma": 1167,
    "ano": 2012,
    "mes": 1,
    "tipo": "faturamento",
    "anoMes": "2012/1"
  },
  {
    "soma": 80,
    "ano": 2012,
    "mes": 2,
    "tipo": "faturamento",
    "anoMes": "2012/2"
  },
  {
    "soma": 80,
    "ano": 2012,
    "mes": 3,
    "tipo": "faturamento",
    "anoMes": "2012/3"
  },
  {
    "soma": 1000,
    "ano": 2012,
    "mes": 12,
    "tipo": "faturamento",
    "anoMes": "2012/12"
  },
  {
    "soma": 100,
    "ano": 2013,
    "mes": 1,
    "tipo": "faturamento",
    "anoMes": "2013/1"
  },
  {
    "soma": 6115.32,
    "ano": 2014,
    "mes": 3,
    "tipo": "faturamento",
    "anoMes": "2014/3"
  },
  {
    "soma": 16060.15,
    "ano": 2014,
    "mes": 3,
    "tipo": "receita",
    "anoMes": "2014/3"
  },
  {
    "soma": 2066.67,
    "ano": 2014,
    "mes": 4,
    "tipo": "faturamento",
    "anoMes": "2014/4"
  },
  {
    "soma": 1000,
    "ano": 2014,
    "mes": 4,
    "tipo": "receita",
    "anoMes": "2014/4"
  },
  {
    "soma": 1210,
    "ano": 2014,
    "mes": 5,
    "tipo": "faturamento",
    "anoMes": "2014/5"
  },
  {
    "soma": 200,
    "ano": 2014,
    "mes": 5,
    "tipo": "receita",
    "anoMes": "2014/5"
  },
  {
    "soma": 1200,
    "ano": 2014,
    "mes": 6,
    "tipo": "faturamento",
    "anoMes": "2014/6"
  },
  {
    "soma": 200,
    "ano": 2014,
    "mes": 6,
    "tipo": "receita",
    "anoMes": "2014/6"
  },
  {
    "soma": 1500,
    "ano": 2014,
    "mes": 7,
    "tipo": "faturamento",
    "anoMes": "2014/7"
  },
  {
    "soma": 100,
    "ano": 2014,
    "mes": 8,
    "tipo": "faturamento",
    "anoMes": "2014/8"
  },
  {
    "soma": 100,
    "ano": 2014,
    "mes": 9,
    "tipo": "faturamento",
    "anoMes": "2014/9"
  },
  {
    "soma": 2132,
    "ano": 2014,
    "mes": 10,
    "tipo": "faturamento",
    "anoMes": "2014/10"
  },
  {
    "soma": 3483,
    "ano": 2014,
    "mes": 10,
    "tipo": "receita",
    "anoMes": "2014/10"
  },
  {
    "soma": 2112,
    "ano": 2014,
    "mes": 11,
    "tipo": "faturamento",
    "anoMes": "2014/11"
  },
  {
    "soma": 18210.54,
    "ano": 2014,
    "mes": 11,
    "tipo": "receita",
    "anoMes": "2014/11"
  },
  {
    "soma": 100,
    "ano": 2014,
    "mes": 12,
    "tipo": "faturamento",
    "anoMes": "2014/12"
  },
  {
    "soma": 1232.33,
    "ano": 2014,
    "mes": 12,
    "tipo": "receita",
    "anoMes": "2014/12"
  },
  {
    "soma": 1150,
    "ano": 2015,
    "mes": 1,
    "tipo": "faturamento",
    "anoMes": "2015/1"
  },
  {
    "soma": 1244.12,
    "ano": 2015,
    "mes": 1,
    "tipo": "receita",
    "anoMes": "2015/1"
  },
  {
    "soma": 1000,
    "ano": 2015,
    "mes": 2,
    "tipo": "faturamento",
    "anoMes": "2015/2"
  },
  {
    "soma": 1550.04,
    "ano": 2015,
    "mes": 3,
    "tipo": "faturamento",
    "anoMes": "2015/3"
  },
  {
    "soma": 551.7,
    "ano": 2015,
    "mes": 3,
    "tipo": "receita",
    "anoMes": "2015/3"
  },
  {
    "soma": 1000,
    "ano": 2015,
    "mes": 4,
    "tipo": "faturamento",
    "anoMes": "2015/4"
  },
  {
    "soma": 1000,
    "ano": 2015,
    "mes": 5,
    "tipo": "faturamento",
    "anoMes": "2015/5"
  },
  {
    "soma": 1000,
    "ano": 2015,
    "mes": 6,
    "tipo": "faturamento",
    "anoMes": "2015/6"
  },
  {
    "soma": 1000,
    "ano": 2015,
    "mes": 7,
    "tipo": "faturamento",
    "anoMes": "2015/7"
  },
  {
    "soma": 10060.08,
    "ano": 2015,
    "mes": 8,
    "tipo": "faturamento",
    "anoMes": "2015/8"
  },
  {
    "soma": 1000,
    "ano": 2015,
    "mes": 8,
    "tipo": "receita",
    "anoMes": "2015/8"
  },
  {
    "soma": 3210,
    "ano": 2015,
    "mes": 9,
    "tipo": "faturamento",
    "anoMes": "2015/9"
  },
  {
    "soma": 8818.3,
    "ano": 2015,
    "mes": 9,
    "tipo": "receita",
    "anoMes": "2015/9"
  },
  {
    "soma": 2000,
    "ano": 2015,
    "mes": 10,
    "tipo": "faturamento",
    "anoMes": "2015/10"
  },
  {
    "soma": 1000,
    "ano": 2015,
    "mes": 10,
    "tipo": "receita",
    "anoMes": "2015/10"
  },
  {
    "soma": 2000,
    "ano": 2015,
    "mes": 11,
    "tipo": "faturamento",
    "anoMes": "2015/11"
  },
  {
    "soma": 1000,
    "ano": 2015,
    "mes": 11,
    "tipo": "receita",
    "anoMes": "2015/11"
  },
  {
    "soma": 1000,
    "ano": 2015,
    "mes": 12,
    "tipo": "faturamento",
    "anoMes": "2015/12"
  },
  {
    "soma": 10756,
    "ano": 2016,
    "mes": 5,
    "tipo": "faturamento",
    "anoMes": "2016/5"
  },
  {
    "soma": 8812.4,
    "ano": 2016,
    "mes": 5,
    "tipo": "receita",
    "anoMes": "2016/5"
  },
  {
    "soma": 1123,
    "ano": 2016,
    "mes": 6,
    "tipo": "faturamento",
    "anoMes": "2016/6"
  },
  {
    "soma": 3210,
    "ano": 2016,
    "mes": 7,
    "tipo": "faturamento",
    "anoMes": "2016/7"
  },
  {
    "soma": 7040.12,
    "ano": 2016,
    "mes": 7,
    "tipo": "receita",
    "anoMes": "2016/7"
  },
  {
    "soma": 2430.8,
    "ano": 2016,
    "mes": 8,
    "tipo": "faturamento",
    "anoMes": "2016/8"
  },
  {
    "soma": 3810.13,
    "ano": 2016,
    "mes": 8,
    "tipo": "receita",
    "anoMes": "2016/8"
  },
  {
    "soma": 2210,
    "ano": 2016,
    "mes": 9,
    "tipo": "faturamento",
    "anoMes": "2016/9"
  },
  {
    "soma": 2720,
    "ano": 2016,
    "mes": 9,
    "tipo": "receita",
    "anoMes": "2016/9"
  },
  {
    "soma": 5196.97,
    "ano": 2017,
    "mes": 2,
    "tipo": "faturamento",
    "anoMes": "2017/2"
  },
  {
    "soma": 3810,
    "ano": 2017,
    "mes": 3,
    "tipo": "faturamento",
    "anoMes": "2017/3"
  },
  {
    "soma": 2660,
    "ano": 2017,
    "mes": 4,
    "tipo": "faturamento",
    "anoMes": "2017/4"
  },
  {
    "soma": 1300,
    "ano": 2017,
    "mes": 5,
    "tipo": "faturamento",
    "anoMes": "2017/5"
  },
  {
    "soma": 1520,
    "ano": 2017,
    "mes": 6,
    "tipo": "faturamento",
    "anoMes": "2017/6"
  }
];
  $scope.merge;
    function merge() {
     /*  let merge = angular.copy(faturamento);
      for(let index = 0, len = recebimento.length; index < len; index++) {
        merge.push(recebimento[index]);
      } 
      let merge = _.merge(faturamento, recebimento);
      console.log(merge);
      $scope.merge = merge;
      groupByAnoMes($scope.merge);
      */
     // let destino = [];
     // angular.merge(destino, faturamento, recebimento);
      $scope.labels = _(res)
                  .groupBy(f => f.ano)
                              .map((objs, key) => ({
                                'ano'   : key,
                                'object' : _(objs).groupBy(o => o.mes).map((objs, key) => 
                                ({'mes': key,
                                  'innerObj': _(objs).groupBy(i => i.tipo).map((objs, key)=>({'tipo': key,'object':objs[0]})).value()})).value()
                                 })
                              ).value();

    /*   console.log(faturamento);
      console.log(recebimento); */
      montarObjeto($scope.labels);
    }
    merge();
 
    function montarObjeto(myObj) {
      let faturamento = [];
      let recebimento = [];
      let labels = [];
      let anoMes;
      for(let index = 0, len = myObj.length; index < len; index++) {
        let ano = myObj[index].ano;
        for(let innerIndex = 0, innerLen = myObj[index].object.length; innerIndex < innerLen; innerIndex++) {
          let mes = myObj[index].object[innerIndex].mes;
            if(myObj[index].object[innerIndex].innerObj.length > 1) {
              for(let tipoIndex = 0, tipoLen = myObj[index].object[innerIndex].innerObj.length; tipoIndex < tipoLen;tipoIndex++) {
                if(myObj[index].object[innerIndex].innerObj[tipoIndex].tipo === 'faturamento') {
                  faturamento.push(myObj[index].object[innerIndex].innerObj[tipoIndex].object.soma);
                } else {
                  recebimento.push(myObj[index].object[innerIndex].innerObj[tipoIndex].object.soma);
                }
                anoMes = myObj[index].object[innerIndex].innerObj[tipoIndex].object.anoMes;
              }
            } else {
              anoMes = myObj[index].object[innerIndex].innerObj[0].object.anoMes;
              if(myObj[index].object[innerIndex].innerObj[0].tipo === 'faturamento') {
                faturamento.push(myObj[index].object[innerIndex].innerObj[0].object.soma);
                recebimento.push(0);
              } else {
                recebimento.push(myObj[index].object[innerIndex].innerObj[tipoIndex].object.soma);
                faturamento.push(0);
              }
            }
          labels.push(anoMes);
        }
      }
      $scope.labels = labels;
      $scope.data = [faturamento,recebimento];
    }
  
    $scope.series = ['Faturamento', 'Recebimento'];
  
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
    $scope.colors = ['#DB2C1F', '#3E95CD'];
    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    $scope.options = {
      legend: { display: true },
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          },
          {
            id: 'y-axis-2',
            type: 'linear',
            display: true,
            position: 'right'
          }
        ]
      }
    };
  });
           