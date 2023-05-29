<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        foreach (range(1,10) as $index)
        {
            DB::table('users')->insert([
            'name' => $faker->name,
            'email' => $faker->email,
            'email_verified_at' => $faker->date,
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'gender' => $faker->randomElement(['homme', 'femme', 'gay']),
            'address' => $faker->address,
            'phone' => rand(1111111, 9999999),
            'date-n' => $faker->date,
            'cardbancaire' => rand(1111111, 9999999),
            'ccv' => "ccv",
            'expiration' => $faker->date,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
    }
    }
}
