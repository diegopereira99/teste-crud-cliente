const API = "http://localhost:8000/api";
const API_CEP = "https://viacep.com.br/ws";

var share = {
    actualCliente: {},
    actualAction: 'new',
    buildForm: () => {
        return {
            "nome": document.querySelector("#nome").value,
            "sexo": document.querySelector("#sexo").value,
            "data_nascimento": document.querySelector("#data_nascimento").value,
            "cep": document.querySelector("#cep").value,
            "endereco": document.querySelector("#endereco").value,
            "numero": document.querySelector("#numero").value,
            "complemento": document.querySelector("#complemento").value,
            "bairro": document.querySelector("#bairro").value,
            "estado": document.querySelector("#estado").value,
            "cidade": document.querySelector("#cidade").value,
        }
    },
    validateForm: () => {
        return new Promise((resolve, reject) => {
            if(
                document.querySelector("#bairro").value.trim() == "" ||
                document.querySelector("#cidade").value.trim() == ""||
                document.querySelector("#estado").value.trim() == ""||
                document.querySelector("#endereco").value.trim() == ""||
                document.querySelector("#numero").value.trim() == ""||
                document.querySelector("#complemento").value.trim() == ""||
                document.querySelector("#cep").value.trim() == ""||
                document.querySelector("#nome").value.trim() == ""||
                document.querySelector("#sexo").value.trim() == ""||
                document.querySelector("#data_nascimento").value.trim() == ""
            ) {
                domFunctions.showRequireFieldsMessage(true);
                reject(false);
            }else {
                domFunctions.showRequireFieldsMessage(false);
                resolve(true);
            }
        }) 
    }
}