<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Drawing extends Model
{
    use HasFactory;

    protected $table = 'drawings';

    //Disable the updatet_at and created_at
    public $timestamps = false;
}
