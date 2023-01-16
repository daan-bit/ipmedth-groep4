<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    protected $table = 'schools';
    protected $fillable = [
        'id',
        'name',
        'address',
        'postal_code',
        'city'
    ];
    public $timestamps = false;

    use HasFactory;
}
