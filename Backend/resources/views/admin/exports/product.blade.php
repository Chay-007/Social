<table class="table table-bordered">
    <thead>
        <tr>
            <th class="w-min" data-orderable="false">
            </th>
            <th>No</th>
            <th>Category Name</th>
            <th>SubCatagory Name</th>
            <th>Product Name</th>
            <th>MRP</th>
            <th>B2B Price</th>
            <th>B2C Price</th>
            <th>Units</th>
            <th>Size Units</th>
            <th>SKU</th>
            <th>Tax Type</th>
            <th>Tax Percentage</th>
            <th>Brand</th>
            <th>Colors</th>

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

            <td></td>
            <td>{{ $sort*($page-1)+($key+1) }}</td>
            <td>{{ isset($list->category) ? $list->category->name : ''}}</td>
            <td>{{ isset($list->subcategory) ? $list->subcategory->name : ''}}</td>
            <td>{{ isset($list->name) ? $list->name : ''}}</td>
            <td>{{ isset($list->mrp ) ? $list->mrp : ''}}</td>
            <td>{{ isset($list->s_price) ? $list->s_price : ''}}</td>
            <td>{{ isset($list->b_price) ? $list->b_price : ''}}</td>
            <td>{{ isset($list->unit) ? $list->unit : ''}}</td>
            <td>{{ isset($list->total_unit) ? $list->total_unit : ''}}</td>
            <td>{{ isset($list->sku) ? $list->sku : ''}}</td>
            <td>{{ isset($list) ? $list->taxType->name : ''}}</td>
            <td>{{ isset($list) ? $list->tax_percent : ''}}</td>
            <td>{{ isset($list) ? $list->brand->name : ''}}</td>
            <td width="200px">
                <ul>
                    @if(isset($list->productColor))
                    @foreach($list->productColor as $colorkey=>$colorvalue)
                    <li>{{$colorvalue->color_name}}&nbsp;&nbsp;({{$colorvalue->color_unit}} units)</li>
                    <ul>
                        @if(isset($colorvalue->productSize))
                        @foreach($colorvalue->productSize as $sizekey=>$sizevalue)
                        <li>{{$sizevalue->size}}&nbsp;&nbsp;({{$sizevalue->size_unit}} units)</li>
                        @endforeach
                        @endif
                    </ul>
                    @endforeach
                    @endif
                </ul>
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