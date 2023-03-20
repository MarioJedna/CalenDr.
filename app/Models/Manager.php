<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Manager extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->hasOne(User::class);
    }

    public function clinic()
    {
        return $this->hasOne(Clinic::class);
    }

    public function doctors()
    {
        return $this->hasMany(Doctor::class);
    }
}
