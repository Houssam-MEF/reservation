<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    protected $fillable = [
        'name',
        'email',
        'password',

    ];

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }
    }
