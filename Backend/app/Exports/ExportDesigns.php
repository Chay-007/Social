<?php

namespace App\Exports;

use App\Models\Product\Orders;
use Maatwebsite\Excel\Concerns\FromCollection;

class ExportDesigns implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
   
    public function collection()
    {
        return Orders::all();
    }
}
