<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $table = 'employees';
    protected $fillable = [
        'first_name', 'last_name', 'email', 'school_id', 'user_id', 'role_id'
    ];
    public $timestamps = false;

    // Add group_count column to the employees table
    protected $appends = ['group_count'];

    // get the number of groups that belong to the teacher
    public function getGroupCountAttribute()
    {
        return $this->groups()->count();
    }

    // get all the groups that belong to the teacher from the employees_has_groups table
    public function groups()
    {
        return $this->belongsToMany(Group::class, 'employee_has_groups', 'employee_id', 'group_id');
    }
}
