<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $table = 'employees';

    // get all the groups that belong to the teacher from the employees_has_groups table
    public function groups()
    {
        return $this->belongsToMany(Group::class, 'employee_has_groups', 'employee_id', 'group_id');
    }
}
