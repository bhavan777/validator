# validator

simple jquery plugin to perform validations on any html form...
just follow the html markup style specified and then call $("#myformID").validator() which returns true if form is valid and false if invalid ... acordingly submit the form or halt...
sample html markup pattern...
> <form id= "myForm" action="/temp.html" style="width:100px;" >
>	<input type="text" validator-email validator-required   />
>	<span class="validator-error"></span>
>	<input type="text" validator-required validator-phone validator-phone-size="12" />
>	<span class="validator-error"></span>
>	<input type="text" validator-required />
>	<span class="validator-error"></span>
>	<input type="text" validator-required />
>	<span class="validator-error"></span>
>	<input type="submit" id="someID" />
> </form>
include the validator.js below jquery inclusion as this plugin is obviously dependant on jquery... just mention attributes on the input fields...for different validations....

1.validator-required -> checks for empty value validation
2. validator-eamil -> checks for valid email
3. validator-phone -> checks for valid number value
4.validator-phone-size -> needs to be specified on the same input with phone number verification attribute., by default it checks for 10 digit number
 now just call $("#myForm").validator(options) with options included to get a return of true in case of valid form data else false...
 accordingly handle your form submission... one of the ways i follow
 pseudo-code:
  
someID.Click (event)->
 //start
  var isValid= $("#myform").validator();
  if(!isValid){
  	event.preventDefault();
  }
  end//

which would stop the form from submitting incase the isValid value is false which means the form is not valid which returns false so, negation of false is true, which stop the form from submitting.. or it just continues submitting the form...