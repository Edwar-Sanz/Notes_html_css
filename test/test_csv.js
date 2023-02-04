let data_csv = `index, month, day_month, var, 
0, enero, 1, 0.5
1, enero, 2, 1
2, enero, 1, 2.0
3, enero, 2, 3.0
0, febrero, 1, 0.52
1, febrero, 2, 12
2, febrero, 1, 2.2
3, febrero, 2, 3.2`;

//let data = data_csv.split("\n").map((line)=>line.split(","));
// var size = Object.keys(myObj).length;

function csv_to_arr(csv) {
    let fila = csv.split("\n"); // separa las filas
    let result = [];
    let column = fila[0].split(","); // separa la primera fila en un array estos elementos serán los headers
    console.log(column[0]);             //  ['index', ' a', ' b', ' c', ' d']

    for (let i = 1; i < fila.length; i++) {   // desde la segunda fila i=1
        let obj = {};

        if(fila[i] == undefined || fila[i].trim() == "") {   continue;  }

        // en cada iteracion separa la fila en un array
        // la fila[1] sería igual a ['0', ' a0', ' b0', ' c0', ' d0']
        let value = fila[i].split(",");              
        for(let j = 0; j < value.length; j++) {
            
            /* a cada elemento column[j] le asigana un valor
            el primer objeto sería:
            column[0] = index 
            value[0] = 0
            ...etc
            */
            obj[column[j].trim()] = value[j].trim();     
                                                    
        }

        result.push(obj);  // la variable obj lo agrega a la lista result
    }
    return result;
}

function variation_dayOfmonth(datos){
    const dic = {};
    for (let i = 0; i < datos.length; i++) {
        let variation = datos[i]["var"];
        let mes = datos[i]["month"];
        let dia = datos[i]["day_month"];

        if (dic[mes] == undefined){
            dic[mes] = {};
        }
        if(dic[mes][dia] === undefined){
            dic[mes][dia] = [parseFloat(variation)];
        }else{
            dic[mes][dia].push(parseFloat(variation));
        }
    }
    return dic
}

function define_xyz(data) {
    let x = Object.keys(data);
    let y = [];
    let z = [];




}


let datos = csv_to_arr(data_csv);
let data = variation_dayOfmonth(datos);
console.log(data);

