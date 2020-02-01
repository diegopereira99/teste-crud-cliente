<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Response;
use App\Cliente;

class ClienteController extends Controller {
    
    public function getClientes() {
        try {
            $clientes = Cliente::all();    
            return Response::json(["status"=> true, "data"=> $clientes]); 
        } catch (\Throwable $th) {
            return Response::json(["status"=> false, "data"=> [], "message"=> "Erro ao buscar clientes"]); 
        }
    }

    public function getClienteById($id) {
        try {
            $cliente = Cliente::find($id);    
            return Response::json(["status"=> true, "data"=>$cliente]); 
        } catch (\Throwable $th) {
            return Response::json(["status"=> false, "data"=> [], "message"=> "Erro ao buscar cliente"]); 
        }
    }
    
    public function updateCliente(Request $request, int $id) {
        try {
            $cliente = Cliente::find($id);
            $cliente->nome = $request->input("nome", $cliente->nome);
            $cliente->data_nascimento = $request->input("data_nascimento", $cliente->data_nascimento);
            $cliente->sexo = $request->input("sexo", $cliente->sexo);
            $cliente->cep = $request->input("cep", $cliente->cep);
            $cliente->endereco = $request->input("endereco", $cliente->endereco);
            $cliente->numero = $request->input("numero", $cliente->numero);
            $cliente->complemento = $request->input("complemento", $cliente->complemento);
            $cliente->bairro = $request->input("bairro", $cliente->bairro);
            $cliente->estado = $request->input("estado", $cliente->estado);
            $cliente->cidade = $request->input("cidade", $cliente->cidade);
            $cliente->save();
            return Response::json(["status"=> true, "data"=> $cliente]);
        } catch (\Throwable $th) {
            return Response::json(["status"=> false, "data"=> [], "message"=> "Erro ao alterar cliente"]);
        }
    }

    public function deleteCliente($id) {
        try {
            $cliente = Cliente::destroy($id);
            Response::json(["status"=> true, "data"=> [], "message"=> "Cliente deletado com sucesso"]);
        } catch (\Throwable $th) {
            Response::json(["status"=> false, "data"=> [], "message"=> "Erro ao deletar cliente"]);
        }
    }


    public function saveCliente(Request $request) {
        try {
            $cliente = Cliente::create($request->all());
            $cliente->save();
            return Response::json(["status"=> true, "data"=> $cliente]);
        } catch (\Throwable $th) {
            return Response::json(["status"=> false, "data"=> [], "message"=> "Erro ao salvar cliente"]);
        }
        
    }
    


}
