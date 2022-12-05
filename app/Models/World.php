<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class World extends Model
{
    protected $table = 'assignments';
    use HasFactory;

    public function hasCompletedAssignnment() {
        return $this->belongsTo(Student::class, 'student_id');
    }
}
