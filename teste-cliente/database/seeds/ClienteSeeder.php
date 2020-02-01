<?php

use Illuminate\Database\Seeder;

class ClienteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cliente')->insert([
            'nome' => "Diego Marcelo",
            'data_nascimento' => "99-09-09",
            'sexo' => "masculino",
            'endereco' => "Rua estacio de sa",
            'cep' => "870050-120",
            'numero' => "1550",
            'complemento' => "apto",
            'bairro' => "Jd. vila bosque",
            'estado' => "Paraná",
            'cidade' => "Maringá",
        ]);
    }
}
