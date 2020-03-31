<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Laracsv\Export;

class Controller extends BaseController
{
    const TYPE_RETURN_CSV = 'csv';

    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;


    protected function returnObjectCsv()
    {
        return new Export();
    }
}
