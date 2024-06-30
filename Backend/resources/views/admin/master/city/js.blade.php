<script type="text/javascript">
	/*Start ajax Country Wise State*/
    function getState(country){
        let country_id  = country.value;
        $.ajax({
            url: ' {{ url('master/country-wise-state') }}',
            method: "GET",
            data: {
                "_token": "{{ csrf_token() }}",
                "country_id": country_id
            },
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success: function (data) {
                $('#state_id').empty(); 
                $('#state_id').append(data);
                
            }
        })   
      
    }
    function getZone(state){
        let state_id  = state.value;
        $.ajax({
            url: ' {{ url('master/state-wise-zone') }}',
            method: "GET",
            data: {
                "_token": "{{ csrf_token() }}",
                "state_id": state_id
            },
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success: function (data) {
                $('#zone_id').empty(); 
                $('#zone_id').append(data);
                
            }
        })   
      
    }
    /*End ajax Country Wise State */
      function onlyAlphabets(e, t) {
            try {
                if (window.event) {
                    var charCode = window.event.keyCode;
                }
                else if (e) {
                    var charCode = e.which;
                }
                else { return true; }
                if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
                    return true;
                else
                    return false;
            }
            catch (err) {
                alert(err.Description);
            }
        }
</script>