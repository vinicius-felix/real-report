// Le o arquivo txt
function readTextFile(file){
    var fullText;
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function (){
        if(rawFile.readyState === 4){
            if(rawFile.status === 200 || rawFile.status === 0){
                var allText = rawFile.responseText;                
                fullText = allText;
            }
        }
    }
    rawFile.send(null);
    return fullText;
}

const textFile = readTextFile('./fixo.txt');

// Convertendo os dados do arquivo para JSON (Delimitador ;)
export function transformToJSON(){
  var cells = textFile.split('\n').map(function (el) { return el.split(';'); });
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

// Ordena o objeto pelo nome da rota(Ordem alfabetica)
function sortArray(array){
  let arrSort = array.sort(function(a, b){ if(a.Nome_Rota > b.Nome_Rota){ return 1 } return -1 });
  return arrSort;
}

// Filtrar por ambiente
export function getEnv(array, env){
  let arrSort = sortArray(array);
  return arrSort.filter( ( elem, index, arr ) => elem.Ambiente === env );
}

// Retornar rotas do tipo KMG
export function getKMG(array){
  let arrSort = sortArray(array);
  return arrSort.filter( ( elem, index, arr ) => elem.Nome_Rota.includes("KMG") )
}

// Retornar todas do tipo AMD
export function getAMD(array){
  let arrSort = sortArray(array);
  return arrSort.filter( ( elem, index, arr ) => !elem.Nome_Rota.includes("KMG") )
}