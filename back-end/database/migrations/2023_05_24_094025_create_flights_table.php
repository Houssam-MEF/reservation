<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateFlightsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('flights', function (Blueprint $table) {
            $table->id();
            $table->string('airline');
            $table->string('departure_airport');
            $table->string('destination_airport');
            $table->dateTime('departure_time');
            $table->dateTime('arrival_time');
            $table->float('price');
            $table->timestamps();
        });
        DB::table('flights')->insert([
            [

                'airline' => 'Airarabia',
                'departure_airport' => 'Airport MedV,Casablanca',
                'destination_airport' => 'Airport Abu Dhabi',
                'departure_time' => '2023-05-24 10:00:00',
                'arrival_time' => '2023-05-25 12:00:00',

                'price' => 15050,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [

                'airline' => 'Airline turkish',
                'departure_airport' => 'Airport ibnbatouta',
                'destination_airport' => 'Airport Istanbul',
                'departure_time' => '2023-05-25 14:00:00',
                'arrival_time' => '2023-05-25 23:00:00',

                'price' => 20075,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Add more sample data as needed
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('flights');
    }
}
