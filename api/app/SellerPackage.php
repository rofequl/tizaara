<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SellerPackage extends Model
{
    protected $fillable = [
        'name', 'amount', 'upload', 'logo', 'duration'
    ];
}
