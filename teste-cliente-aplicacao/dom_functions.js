
    var domFunctions = {
        setLoading: (status)=> {
            if(status === true) {
                $("#table-row").hide()
                $("#loading-page").show();
            }else {
                $("#loading-page").hide()
                $("#table-row").show()
            }
        },
        clearModal: () => {
            document.querySelector("#bairro").value = "";
            document.querySelector("#cidade").value = "";
            document.querySelector("#estado").value = "";
            document.querySelector("#endereco").value = "";
            document.querySelector("#numero").value = "";
            document.querySelector("#complemento").value = "";
            document.querySelector("#cep").value = "";
            document.querySelector("#nome").value = "";
            document.querySelector("#sexo").value = "";
            document.querySelector("#data_nascimento").value = "";
        },
        openModal: (data) => $(".bd-example-modal-lg").modal("show"),
        closeModal: (data) => $(".bd-example-modal-lg").modal("hide"),
        fillModal: (data) => {
            document.querySelector("#bairro").value = data.bairro;
            document.querySelector("#cidade").value = data.cidade;
            document.querySelector("#estado").value = data.estado;
            document.querySelector("#endereco").value = data.endereco;
            document.querySelector("#numero").value = data.numero;
            document.querySelector("#complemento").value = data.complemento;
            document.querySelector("#cep").value = data.cep;
            document.querySelector("#nome").value = data.nome;
            document.querySelector("#sexo").value = data.sexo;
            document.querySelector("#data_nascimento").value = data.data_nascimento;
        },
        showRequireFieldsMessage: (show) => {
            if(show) {
                $(".info-text").removeClass('d-none');
            }else {
                $(".info-text").addClass('d-none');
            }
        },
        fillTable: (resp) => {
            $("tbody").html('');
            resp.forEach(i => {
                let html = `
                    <tr>
                        <td>${i.nome}</td>
                        <td>${i.data_nascimento}</td>
                        <td>${i.sexo}</td>
                        <td>${i.cep}</td>
                        <td>${i.numero}</td>
                        <td>${i.complemento}</td>
                        <td>${i.bairro}</td>
                        <td>${i.estado}</td>
                        <td>${i.cidade}</td>
                        <td>
                            <button onclick="actionFunctions.editCliente(${i.id})" type="button" class="btn btn-sm btn-info">
                                editar
                            </button>
                            <button onclick="actionFunctions.deleteCliente(${i.id})" type="button" class="btn btn-sm btn-danger">
                                deletar
                            </button>
                        </td>
                    </tr>
                `
                $("tbody").append(html);
            });        
            domFunctions.setLoading(false);        
        },
        fillFieldByCep: (data) => {
            document.querySelector("#bairro").value = data.bairro || '';
            document.querySelector("#cidade").value = data.localidade || '';
            document.querySelector("#estado").value = data.uf || '';
            document.querySelector("#endereco").value = data.logradouro || '';
        }
        
    }