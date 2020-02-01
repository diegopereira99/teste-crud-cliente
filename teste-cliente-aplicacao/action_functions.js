var actionFunctions = {
    editCliente: async (id) => {
        share.actualAction = 'edit';
        var cliente = await fetchFunctions.fetchById(id);            
        share.actualCliente = cliente.data;
        domFunctions.fillModal(cliente.data);
        domFunctions.openModal();
    },
    newCliente: () => {
        share.actualAction = 'new';
        domFunctions.clearModal();
        domFunctions.openModal();
    },
    deleteCliente: async (id) => {
        if(confirm("Deseja realmente deletar esse cliente?")) {
            var deletedCliente = await fetchFunctions.fetchDeleteCliente(id);
            actionFunctions.starApplication();
        }else {
            return false;
        }
    },
    cepOnChange: (val) => {
        if(val.length != 9) {
            return false;
        }else{
            var cep = val.replace('-', '');
            fetchFunctions.fetchCEP(cep);
        }
    },
    sendForm: () => {
        share.validateForm()
        .then((x) => {
            if(share.actualAction == "new") {
                actionFunctions.sendNewClient();    
            }else if(share.actualAction == "edit") {
                actionFunctions.sendEditClient();
            }
        })
        .catch((x)=> console.log('error'));
    },
    sendNewClient: async () => {
        var form = share.buildForm();
        var clienteSaved = await fetchFunctions.fetchSendCliente(form);
        domFunctions.closeModal();
        actionFunctions.starApplication();
    },
    sendEditClient: async () => {
        var form = share.buildForm();
        var clienteEdited = await fetchFunctions.fetchEditCliente(share.actualCliente.id, form);
        domFunctions.closeModal();
        actionFunctions.starApplication();
    },
    starApplication: async() => {
        domFunctions.setLoading(true);
        var clientes = await fetchFunctions.fetchAll();
        domFunctions.fillTable(clientes.data);
    }
}