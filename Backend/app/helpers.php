<?php 
use App\Models\Product\CategoryLanguage;
use App\Models\Product\Product;
use App\Models\Product\ProductImage;
use App\Models\Product\ProductColor;
use App\Models\Product\SubCategory;
use App\Models\Product\Category;
use App\Models\Product\Cart;
use App\Models\Product\CartVariant;
use App\Models\Product\WishList;
use App\Models\Product\Orders;
use App\Models\Product\User;
use App\Models\Banner;
use App\Models\Country;
use App\Models\State;
use App\Models\City;
use Illuminate\Http\Request;
use App\Models\Product\TaxType;
use Carbon\Carbon;

use Illuminate\Support\Facades\Http;

  function fileUpload($path,$file){
    
    $name= $file->getClientOriginalName();
      $file->move($path,$name);
      return $path.'/'.$name;
  }
  function fileUploadVideo($path, $file, $id,$mpath){
    
      $name = $id . $file->getClientOriginalName();
      $file->move($mpath,$name);
      return $path.'/'.$name;
  }
  function fileUploadProfile($path, $file, $id)
  {
    $name = $id . $file->getClientOriginalName();
    $file->move($path, $name);
    return $path . '/' . $name;
  }
  function dateShow($date){
      return date('d/m/Y', strtotime($date));
  }
  function monthDateShow($date){
    return date('j F', strtotime($date));
}
  function dateSave($date){
      return date('Y-m-d', strtotime($date));
  }
   function currentdate(){
      return date('Y-m-d');
  }
  function currentTime(){
    $date = new DateTime();
      $date->setTimeZone(new DateTimeZone("asia/kolkata"));
      $get_datetime = $date->format('H:i:s');
      return  $get_datetime;
  }
 
  
  function timeShow($time){
      return date('h:i:s a' , strtotime($time));
  }
  function monthYearShow($date){
    return date('F Y', strtotime($date));
  }
  function monthShow($date){
    return date('M Y', strtotime($date));
  }
  
  function smsTriger($message,$mobile){
      $curl_handle=curl_init(); 
      
       curl_setopt($curl_handle,CURLOPT_URL,'http://sms.orcainfosolutions.com/api/mt/SendSMS?user=profcyma&password=password1&senderid=PROGBL&channel=Trans&DCS=0&flashsms=0&number='.$mobile.'&text='.$message.'&route=4&PEId=1201168896800164072');
       curl_setopt($curl_handle,CURLOPT_CONNECTTIMEOUT,2);
       curl_setopt($curl_handle,CURLOPT_RETURNTRANSFER,1);
       $buffer = curl_exec($curl_handle);
       curl_close($curl_handle);
       if (empty($buffer)){
        return false;
       }
       else{
        return true;
       }
     }


 function timeSave($date){
    return date('H:i:s', strtotime($date));
}

function catLan($cid,$lid){
  $can = CategoryLanguage::where('category_id',$cid)->where('language_id',$lid)->first();
  return isset($can) ? $can->name : '';
}
function taxlist(){
  $tax = TaxType::all();
  return $tax;
}
#main Navbar
function browseNavbar(){
  $details = [];
        $relation=['subCategory','product'];
        $details=Category::with($relation)->where('status',1)->orderBy('id','ASC')->get();

        return $details;
}
#ids START
function countryID($country){
  $id = Country::where('name',$country)->first();
  $countryid = $id->id;
  return $countryid;
}
function stateID($state){
  $id = State::where('name',$state)->first();
  $stateid = $id->id;
  return $stateid;
}
function cityID($city){
  $id = City::where('name',$city)->first();
  $cityid = $id->id;
  return $cityid;
}

#ids END
#invoice Number Generator
function invoiceNumber(){
  $latest = Orders::orderBy('id' , 'DESC')->first();
  if(isset($latest->invoice_number)){
$r=explode("/",$latest->invoice_number);
    $string = preg_replace("/[^0-9\.]/", '', $r[3]);
    return 'NK/23-24/WA/' . sprintf('%04d', $string+1);
  }else{
    return 'NK/23-24/WA/0001';
  }
}
# Banner Section
function banner(){
  $banner=[];
  $banner = Banner::where('type','web')->get();
  return $banner;
}
#Inquery Popup START
function colorPop(){

  $rel =['productImageOne','productColor'];
  #get all paymentUser resources
  $products = Product::where('created_at','<>','null');
   $details['lists'] = $products->orderBy('id', 'DESC')->with($rel)->where('status',1)->get();
$relation=['subCategory','product'];
$details['detail']=Category::with($relation)->where('status',1)->orderBy('id','ASC')->get();

return $details;
}
#price differ B2C B2B
function priceDiffer($b2c,$b2b){
  $user_type=0;
  if(session()->has('userlogs')){
  $users=session()->get('userlogs');
            foreach($users as $value){
              if($value['type'] == 'consumer'){
                $user_type = $b2c;
              }else{
                $user_type = $b2b;
              }
            }
          }else{
            $user_type = $b2c;
          }
            return $user_type;
}


#Inquery Popup END
#Wish START
function wishCheck($proid){
  $status=false;
  if(session()->has('userlogs')){
    $user_id=getUserId();
    $carts=WishList::where('user_id',$user_id)->get();
    foreach($carts as $key=>$value){
      if($value->product_id == $proid){
        $status=true;
        return $status;
      }
    }
  }
  return $status;
}
function wishNav(){

  $wishDetail=[];
  #wishNavbar
  if(session()->has('userlogs')){
      $user_id=getUserId();
  $wishRelation = ['product','productImageOne'];
  $wishDetail=WishList::with($wishRelation)->where('user_id',$user_id)->get();
  
  }
  return $wishDetail;
      
}
function wishCount(){
  $count=0;
  if(session()->has('userlogs')){
  $user_id=getUserId();
  $carts=WishList::where('user_id',$user_id)->get();
  foreach($carts as $value){
    $count++;
  }
  return $count;
}
  return $count;
}
#Wish END
#Cart Function START
function colorCart($proid,$color){
  $status=null;
if(session()->has('cart')){
  $carts=session()->get('cart');
  foreach($carts as $key=>$value){
    if($key == $proid.$color){
      $status=$key;
      return $status;
    }
  }
}
if(session()->has('userlogs')){
  $user_id=getUserId();
  $cartcheck = Cart::where('user_id',$user_id)->where('product_id',$proid)->first();
  if(isset($cartcheck->id)){
    $carts=CartVariant::where('cart_id',$cartcheck->id)->where('variant',$color)->first();
    if(isset($carts->id)){
      $status=$carts->id;
      return $status;
    }
  }
 
  
}
return $status;
}
function cartCheck($proid){
  $status=null;
if(session()->has('cart')){
  $carts=session()->get('cart');
  foreach($carts as $key=>$value){
    if($value['pid'] == $proid){
      $status=$key;
      return $status;
    }
  }
}else{
  $user_id=getUserId();
  $carts=Cart::where('user_id',$user_id)->get();
  foreach($carts as $value){
    if($value->product_id == $proid){
      $status=$value->id;
      return $status;
    }
  }
}
return $status;
}
function cartQuantity($proid,$color){
  if($color == 'Default'){
    $color = '';
  }
  $status=0;
if(session()->has('cart')){
  $carts=session()->get('cart');
  foreach($carts as $key=>$value){
    if($value['pid'] == $proid && $value['variant'] == $color){
      $status=$value['quantity'];
      return $status;
    }
  }
}else{
  $user_id=getUserId();
  $carts=Cart::where('user_id',$user_id)->where('product_id',$proid)->first();
  if(isset($carts->id)){
    if($carts->variant == 'color'){
      $cartvary=CartVariant::where('cart_id',$carts->id)->where('product_id',$proid)->where('variant',$color)->get();
      foreach($cartvary as $value){
        $status = $value->quantity;
      }
      return $status;
    }else{
      $status=$carts->quantity;
      return $status;
    }
  }

}
return $status;
}
function colorQuantity($proid){
  $status=0;
if(session()->has('cart')){
  $carts=session()->get('cart');
  foreach($carts as $key=>$value){
    if($value['pid'] == $proid){
      $status += $value['quantity'];
    }
  }
}else{
  $user_id=getUserId();
  $carts=Cart::where('user_id',$user_id)->where('product_id',$proid)->first();
  if(isset($carts->id)){
    $cartvary = CartVariant::where('cart_id',$carts->id)->where('product_id',$carts->product_id)->get();
    foreach($cartvary as $value){
        $status += $value->quantity;
    }
  }
  
}
return $status;
}
function cartNav(){

  $cartDetail=[];
  #cartNavbar
  if(session()->has('userlogs')){
      $user_id=getUserId();
  $cartRelation = ['product','productImageOne','cartVariant'];
  $cartDetail=Cart::with($cartRelation)->where('user_id',$user_id)->get();
  
  }
  return $cartDetail;
      
}
function cartCount(){
  $count=0;
  if(session()->has('cart')){
  $carts=session()->get('cart');
  foreach($carts as $value){
    $count++;
  }
  return $count;
}if(session()->has('userlogs')){
  $user_id=getUserId();
  $rel = ['cartVariant'];
  $carts=Cart::where('user_id',$user_id)->with($rel)->get();
  foreach($carts as $value){
    if($value->variant == 'color'){
      foreach($value->cartVariant as $varvalue){
      $count++;
      }
    }else{
      $count++;
    }
  }
  return $count;
}
  return $count;
}
function getZohoId($productid){
    $product_id = 0;
    $product = Product::where('id',$productid)->first();
    $product_id = $product->zoho_item_id;
    return $product_id;
}
#Cart Function END

#User Nav START
function getUserId(){
  $user_id=0;
  if(session()->has('userlogs')){
  $users=session()->get('userlogs');
            foreach($users as $value){
                $user_id=$value['id'];
            }
          }
            return $user_id;
}

#User Nav END

#customer Admin Start
function customerCount(){
  $users = 0;
  $users = User::where('type','customer')->count();
  return $users;
}


#customer Admin END

#Orders Admin Start
function ordersCount(){
  $orders = 0;
  $orders = Orders::count();
  return $orders;
}
function ordersAdmin(){

}
function orderAveragePercent(){
  $orderPercent = 0;
  $date = Carbon::now()->subDays(30);
  $current = Carbon::now();
  $order = Orders::whereBetween('created_at',[$date,$current])->count()/100;
  return $order;
}
function comparedMonth(){
  $date = Carbon::now()->subDays(30);
  $dateFormat = monthShow($date);
  return $dateFormat;
}
function totalSells(){
  $amount = 0;
  $orders = Orders::all();
  foreach($orders as $value){
    $amount += $value->amount;
  }
  return $amount;
}
function amountAveragePercent(){
  $orderPercent = 0;
  $amount = 0;
  $date = Carbon::now()->subDays(30);
  $current = Carbon::now();
  $order = Orders::whereBetween('created_at',[$date,$current])->get();
  foreach($order as $value){
    $amount += $value->amount;
  }
  $average = $amount/100;
  return $average;
}
#Orders Admin END
