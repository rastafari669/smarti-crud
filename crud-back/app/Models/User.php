<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\model;




class User extends Model
{
    use HasFactory;
     
      protected $fillable = [
       'name',
       'age',
       'breed'
      ];
    
}
