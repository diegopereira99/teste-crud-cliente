var fetchFunctions = {
        fetchAll:async () => {
            const response = await fetch(`${API}/clientes`, {
                method: 'GET',
            })
            return await response.json();
        },
        fetchById: async (id) => {
            const response = await fetch(`${API}/clientes/${id}`, {
                method: 'GET',
            })
            return await response.json();
        },
        fetchDeleteCliente: async (id) => {
            const response = await fetch(`${API}/clientes/${id}`, {
                method: 'DELETE',
            })
            await response;
            return true;
        },
        fetchEditCliente: async (id, data) => {
            const response = await fetch(`${API}/clientes/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            return await response.json();
        },
        fetchCEP: (cep) => {
            fetch(`${API_CEP}/${cep}/json`, {
                method: 'GET', 
            }).then((response) => {
                return response.json()
            }).catch((error) => {
                console.log(error);
            }).then((data) => {
                domFunctions.fillFieldByCep(data);
            })
        },
        fetchSendCliente: async (data) => {
            const response = await fetch(`${API}/clientes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            return await response.json();
        },

    }