<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model {
    protected $table = 'cliente';
    protected $fillable = ['nome', 'data_nascimento', 'endereco', 'sexo', 'cep', 'numero', 'complemento', 'bairro', 'estado', 'cidade'];
}
