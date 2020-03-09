// Dados de exemplo
// let str = 
// 'Data	Id	Ambiente	Nome_Rota	No_Answer	Failed	Answered	Busy	Total	%_No_Answer	%_Failed	%_Answered	%_Busy\n'
// +'29/02/2020	168	1	Baldussi_TDM_-_Fixo	347	112	195	6	660	53%	17%	30%	1%\n'
// +'29/02/2020	153	1	KMG_Ypy_ITX_-_Fixo	6960	5849	1065	322	14196	49%	41%	8%	2%\n'
// +'29/02/2020	154	1	Ypy_ITX_-_Fixo	38071	19753	11083	871	69778	55%	28%	16%	1%\n'
// +'29/02/2020	157	1	Ypy_ITX_-_Fixo_Manual	642	202	223	20	1087	59%	19%	21%	2%\n'
// +'29/02/2020	136	2	Baldussi_TDM_-_Fixo	416	288	277	7	988	42%	29%	28%	1%\n'
// +'29/02/2020	124	2	KMG_Ypy_ITX_-_Fixo	6948	4641	1265	271	13125	53%	35%	10%	2%\n'
// +'29/02/2020	122	2	Ypy_ITX_-_Fixo	12094	3865	4502	342	20803	58%	19%	22%	2%\n'
// +'29/02/2020	46	4	Baldussi_TDM_-_Fixo	84	16	77	3	180	47%	9%	43%	2%\n'
// +'29/02/2020	27	4	KMG_Ypy_ITX_-_Fixo	10455	10415	1989	452	23311	45%	45%	9%	2%\n'
// +'29/02/2020	28	4	Ypy_ITX_-_Fixo	26909	7179	12287	639	47014	57%	15%	26%	1%\n';

let str = 'Data;Id;Ambiente;Nome_Rota;No Answer;Failed;Answered;Busy;Total;% No Answer;% Failed;% Answered;% Busy\n'
+'29/02/2020;168;1;Baldussi TDM - Fixo;347;112;195;6;660;53%;17%;30%;1%\n'
+'29/02/2020;153;1;KMG Ypy ITX - Fixo;6960;5849;1065;322;14196;49%;41%;8%;2%\n'
+'29/02/2020;154;1;Ypy ITX - Fixo;38071;19753;11083;871;69778;55%;28%;16%;1%\n'
+'29/02/2020;157;1;Ypy ITX - Fixo Manual;642;202;223;20;1087;59%;19%;21%;2%\n'
+'29/02/2020;136;2;Baldussi TDM - Fixo;416;288;277;7;988;42%;29%;28%;1%\n'
+'29/02/2020;124;2;KMG Ypy ITX - Fixo;6948;4641;1265;271;13125;53%;35%;10%;2%\n'
+'29/02/2020;122;2;Ypy ITX - Fixo;12094;3865;4502;342;20803;58%;19%;22%;2%\n'
+'29/02/2020;46;4;Baldussi TDM - Fixo;84;16;77;3;180;47%;9%;43%;2%\n'
+'29/02/2020;27;4;KMG Ypy ITX - Fixo;10455;10415;1989;452;23311;45%;45%;9%;2%\n'
+'29/02/2020;28;4;Ypy ITX - Fixo;26909;7179;12287;639;47014;57%;15%;26%;1%\n'

// Convertendo os dados do arquivo para JSON
export function transformToJSON(){
  var cells = str.split('\n').map(function (el) { return el.split(';'); });
  var headings = cells.shift();
  var out = cells.map(function (el) {
    var obj = {};
    for (var i = 0, l = el.length; i < l; i++) {
      obj[headings[i]] = isNaN(Number(el[i])) ? el[i] : +el[i];
    }
    return obj;
  });
  return out;
}

// Filtrar por ambiente
export function getEnv(array, env){  
  return array.filter( ( elem, index, arr ) => elem.Ambiente === env );
}

// Filtrar KMG
export function getKMG(array){
  return array.filter( ( elem, index, arr ) => elem.Nome_Rota.includes("KMG") )
}

// Filtrar AMD
export function getAMD(array){
  return array.filter( ( elem, index, arr ) => !elem.Nome_Rota.includes("KMG") )
}