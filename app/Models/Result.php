<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Student;

class Result extends Model
{
    use HasFactory;
    
    protected $table = 'results';
}
