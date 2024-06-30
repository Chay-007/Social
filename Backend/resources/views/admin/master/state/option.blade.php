 <option value="">---Select State---</option>
 @if(isset($states))
 @foreach($states as $state)
 <option value="{{$state->id}}">{{$state->name}}</option>
 @endforeach
 @endif