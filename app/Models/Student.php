<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Result;

class Student extends Model
{
    protected $table = 'students';

    public $timestamps = false;

    public function StudentResults() {
        return $this->hasMany(\App\Models\Result::class);
    }
    
    use HasFactory;
}
