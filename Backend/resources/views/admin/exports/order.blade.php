<table class="table table-bordered">
  <thead>
    <tr>
      <th>S.No</th>
      <th>Invoice Number</th>
      <th>Order No.</th>
      <th>Customer Name</th>
      <th>Customer Mobile Number</th>
      <th>Order Date</th>
      <th>Delivery Date</th>
      <th>Delivery Time</th>
      <th>Total</th>
      <th>Order Status</th>
      <th>Comment</th>
      <th>Payment Type</th>
      <th>Payment Status</th>
      <th>Order From</th>
      <th>Delivery From</th>
      <th>Delivery Boy</th>
    </tr>
    @php
    $page=1;
    if(Request::input('page'))
    $page=Request::input('page');
    $sort = $lists->perPage();
    @endphp
  </thead>
  <tbody>
    @forelse($lists as $key => $list)
    <tr>
      <td>{{ $sort*($page-1)+($key+1) }}</td>
      <td>{{$list->invoice_number}}</td>
      <td>{{$list->id}}</td>
      <td>{{$list->user->name}}</td>
      <td>{{$list->user->mobile_number}}</td>
      <td>{{$list->created_at}}</td>
      <td>{{$list->delivery_date}}</td>
      <td>{{$list->delivery_time}}</td>
      <td>{{$list->amount}}</td>
      <td>
        <a href="#" class="btn btn-xs  {{$list->order_status_id == 1?'btn-danger':''}}{{$list->order_status_id == 2?'btn-warning':''}}{{$list->order_status_id == 3?'btn-primary':''}}{{$list->order_status_id == 4?'btn-success':''}}" title="">{{$list->order_status_id == 1?'New Order':''}}{{$list->order_status_id == 2?'Processing':''}}{{$list->order_status_id == 3?'Shipped':''}}{{$list->order_status_id == 4?'Delivered':''}}{{$list->order_status_id == 5?'Returned':''}}{{$list->order_status_id == 6?'Cancelled':''}}</a>
      </td>
      <td>
        {{ $list->comment}}
      </td>
      <td>
        {{ $list->payment_mode == 'cod'?'Cash On Delivery':'Online'}}

      </td>
      <td>
        <a href="#" class="btn btn-xs {{$list->paymentStats->status == '0'?'btn-danger':'btn-success'}}   button_flow" data-toggle="tooltip" data-placement="top" title="">{{$list->paymentStats->status == '0'?'Unpaid':'Paid'}}</a>

      </td>

      <td>
        web
      </td>

      <td>
        {{$list->userAddress->address_type}} Address
      </td>

      <td>
        @if(isset($list->deliveryAssign->user))
        {{$list->deliveryAssign->user->name}}
        @else
        No Delivery Boy Assigned
        @endif
      </td>


    </tr>
    @empty

    <tr>
      <td colspan="6">Record not found </td>
    </tr>
  </tbody>
  @endforelse

  </tbody>
</table>