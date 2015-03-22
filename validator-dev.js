	$.fn.validator = function(obj) {
		_requiredMSg="can't be blank";
		_invalidEmail="invalid email ID";
		_invalidPhone="invalid phone number";
		if(obj){
			_requiredMSg=obj.errorMessages.required;
			_invalidEmail=obj.errorMessages.invalidEmail;
			_invalidPhone=obj.errorMessages.invalidPhone;
		}
	_errors=0;
	var _email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	_inputs=$(this).find('input[type=text]');
	$.each(_inputs,function(){
		_val=$(this).val().trim();
		console.log($(this).attr('validator-email'));
		//empty check
		if($(this).attr('validator-required')!= undefined)
		{
			if(_val.trim()==""){
				$(this).next('.validator-error').text(_requiredMSg);
				_errors++;
			}
			else{
				$(this).next('.validator-error').text('');
			}
		}
		//email check
		if($(this).attr('validator-email')!= undefined && _val.trim()!="")
		{
			if(_email_regex.test(_val)){
				$(this).next('.validator-error').text('');
			}
			else{
				$(this).next('.validator-error').text(_invalidEmail);
				_errors++;
			}
		}
		//phone check
		if($(this).attr('validator-phone')!= undefined  && _val.trim()!=""){
			if(_val.length!= +$(this).attr('validator-phone-size') || isNaN(_val)){
				$(this).next('.validator-error').text(_invalidPhone);
				_errors++;
			}
			else{
				$(this).next('.validator-error').text('');
			}
		}

	});
	if(_errors!=0){
		return false;
	}
	else{
		return true;
	}

};