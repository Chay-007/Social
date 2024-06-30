<?php

namespace App\Exports;

use App\Models\Product\Orders;
use Maatwebsite\Excel\Concerns\FromCollection;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class ExportOrders implements FromView
{
    # call traits
    private $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function view(): View
    {
      try
        {
          return view('admin.exports.order',$this->data);
      }catch(\Exception $ex)
      {
          toastr()->success($ex->getMessage());
          return back()->with('error', $ex->getMessage());
      }
  }
}
