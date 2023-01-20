<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    use HasFactory;
    protected $fillable = [
    'school_group',
    'school_year',
    'school_id'
    ];

    public $timestamps = false;

    // add student count property to group
    protected $appends = ['student_count'];

    // get the students for the group, from foreign key to group_id in the students table
    public function students()
    {
        return $this->hasMany(Student::class, 'group_id');
    }

    // get the student count for the group, from foreign key to group_id in the students table
    public function getStudentCountAttribute()
    {
        return $this->students()->count();
    }
}
