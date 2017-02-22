$(document).ready(function() {

	$('#feedback-valid-1').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-valid-1')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
							window.location.href = "thx1.html";
							$.fancybox.close()
							var message = $('.modal');
							$.fancybox(message);

						}
					}  
				}); 
		}
	});

	$('#feedback-valid-2').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-valid-2')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
							window.location.href = "thx1.html";
							$.fancybox.close()
							var message = $('.modal');
							$.fancybox(message);

						}
					}  
				}); 
		}
	});

	$('#feedback-valid-3').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-valid-3')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
							window.location.href = "thx1.html";
							$.fancybox.close()
							var message = $('.modal');
							$.fancybox(message);

						}
					}  
				}); 
		}
	});

	$('#feedback-valid-4').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-valid-4')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
							window.location.href = "thx1.html";
							$.fancybox.close()
							var message = $('.modal');
							$.fancybox(message);

						}
					}  
				}); 
		}
	});

});
