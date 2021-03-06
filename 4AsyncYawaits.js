let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
    id: 3,
    name: 'Mandrake'
}];
let salaries = [{ id: 1, salary: 4000 }, { id: 2, salary: 1000 }, { id: 3, salary: 2000 }]

// Nivel 1- Ejercicio 1
// Dados los objetos employees y salaries, crea una arrow function getEmployee que devuelva una Promise efectuando la búsqueda en el objeto por su id. Crea otra arrow function getSalary que reciba como parámetro un objeto employee y devuelva su salario.

const getEmployee = (employeesArray, id) => {
    return new Promise((resolve, reject) => {

        const employeeFound = employeesArray.find(element => element.id === id);

        if (employeeFound) {
            resolve(employeeFound)
        } else {
            reject(new Error('promise rejected'))
        }
    })

}

const getSalary = (salariesArray, employee) => {
    return new Promise((resolve, reject) => {

        const salaryFound = salariesArray.find(element => element.id === employee.id);

        if (salaryFound) {
            resolve(salaryFound.salary)
        } else {
            reject(new Error('promise rejected'))
        }
    })

}

// Nivel 1- Ejercicio 2 Crea una función asíncrona que reciba un id de empleado e imprima por pantalla el nombre del empleado y su salario, usando las funciones que has definido en el ejercicio anterior.

// eslint-disable-next-line no-unused-vars
const nameAndSalary = async(id, employeesArray, salariesArray) => {
        try {
            const employeeFound = await getEmployee(employeesArray, id)
            const salaryFound = await getSalary(salariesArray, employeeFound)
            const outoput = {
                name: employeeFound.name,
                salary: salaryFound
            }

            console.log(outoput)

        } catch (e) { console.log(e.message) }

    }
    //nameAndSalary(1, employees, salaries)


//Nivel 2- Ejercicio 1 Crea una nueva función asíncrona que llame a otra que devuelva una Promise que efectúe su función resolve() después de 2 segundos de su invocación.

// eslint-disable-next-line no-unused-vars
const myPromise = (toPrint) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (toPrint) { resolve(toPrint); } else { reject("toPrint arg missing") }
        }, 2000);
    })
}

const asyncCaller = async(toPrint) => {
    if (typeof toPrint === "number") { throw new Error("Argument is a number") }
    try {
        const response = await myPromise(toPrint)
        console.log(response)
    } catch (e) { console.log(e.message) }
}



module.exports = {
    getEmployee,
    getSalary,
    employees,
    salaries,
    asyncCaller,
    myPromise
}