<?php

use App\Articulo;
use Illuminate\Database\Seeder;

class articulosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Let's truncate our existing records to start from scratch.
        Articulo::truncate();

        $faker = \Faker\Factory::create();

        // And now, let's create a few articulos in our database:
        for ($i = 0; $i < 50; $i++) {
            Articulo::create([
                'titulo' => $faker->sentence,
                'cuerpo' => $faker->paragraph,
            ]);
        }
    }
}
