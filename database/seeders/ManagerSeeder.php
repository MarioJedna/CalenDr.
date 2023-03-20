<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class ManagerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('managers')->truncate();

        $managers = [
            [
                "user_id" => 2,
                "clinic_id" => 1,
            ],
            [
                "user_id" => 6,
                "clinic_id" => 2,
            ],
            [
                "user_id" => 7,
                "clinic_id" => 3,
            ],
        ];

        DB::table('managers')->insert($managers);
    }
}
