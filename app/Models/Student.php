<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Result;

class Student extends Model
{
    protected $table = 'students';

    public $timestamps = false;
    protected $fillable = [
        'first_name',
        'group_id',
        'user_id'
    ];
    public function StudentResults() {
        return $this->hasMany(\App\Models\Result::class);
    }

    use HasFactory;
}
