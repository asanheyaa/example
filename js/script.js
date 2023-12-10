jQuery(document).ready(function(jQuery) {

    // There is no need to change the helper function, if you do, the form will stop going next.
    // For new forms, call the function with the new class like this nextOnFormsHelper('newclasshere');

    // Akshat Form
    nextOnFormsHelper('akshat_form');

    // Akshat2 Form
    nextOnFormsHelper('Akshat2');

    //Helper function to go next on forms, Do not Edit
    function nextOnFormsHelper(newFormClass) {
        var stepClicked = {
            1: false,
            2: false,
            3: false,
            4: false
        };

        // Function to reset click flags for the first four steps
        function resetClickFlags() {
            stepClicked = {
                1: false,
                2: false,
                3: false,
                4: false
            };
        }

        // Define a function to safely navigate to the first four pages
        function goToNextPage(pageNumber, event) {
            if (!stepClicked[pageNumber]) {
                console.log("Clicked element on step " + pageNumber + ":", event.target);
                stepClicked[pageNumber] = true;
                jQuery('.' + newFormClass + ' .wpforms-page-' + pageNumber + ' .wpforms-page-next').click();
            }
        }

        // Handling clicks for the first four pages
        jQuery('.' + newFormClass + ' .wpforms-page-1 ul li input').click((event) => goToNextPage(1, event));
        jQuery('.' + newFormClass + ' .wpforms-page-2 ul li input').click((event) => goToNextPage(2, event));
        jQuery('.' + newFormClass + ' .wpforms-page-3 ul li input').click((event) => goToNextPage(3, event));
        jQuery('.' + newFormClass + ' .wpforms-page-4 ul li input').click((event) => goToNextPage(4, event));

        // Handling the auto-click for pages 5 and 6
        // Step 5
        jQuery('.' + newFormClass + ' .wpforms-page-4 ul li').click((event) => {
            console.log("Auto advancing from step 4 to 5, clicked element:", event.target);
            setTimeout(() => {
                jQuery('.wpforms-page-5 .wpforms-page-next').click();
            }, 2000); // Adjust the timeout as needed
        });

        // Step 6 - Triggered after the completion of Step 5
        jQuery('.wpforms-page-5 .wpforms-page-next').click((event) => {
            console.log("Auto advancing from step 5 to 6");
            setTimeout(() => {
                jQuery('.wpforms-page-6 .wpforms-page-next').click();
            }, 2100); // Adjust the timeout as needed
        });

        // Assuming there is a page 7 for submission
        // Trigger submission after Step 6 is completed
        jQuery('.wpforms-page-6 .wpforms-page-next').click((event) => {
            console.log("Auto advancing for submission from step 6");
            setTimeout(() => {
                jQuery('.' + newFormClass + ' .wpforms-submit-container button').click();
            }, 300); // Adjust the timeout as needed
        });
    }
    //Helper Function Ends



    jQuery('#wpforms-1582-field_1_1').on('click', function() {
        //alert( this.value ); // or jQuery(this).val()
        if (this.value == "Yes") {
            jQuery("#wpforms-1582-field_2-container .wpforms-page-next").trigger("click");
        }

    });
    jQuery('#wpforms-1582-field_1_2').on('click', function() {
        //alert( this.value ); // or jQuery(this).val()
        if (this.value == "No") {
            jQuery("#wpforms-1582-field_2-container .wpforms-page-next").trigger("click");
        }

    });

    jQuery('#wpforms-1582-field_5_1').on('click', function() {
        //alert( this.value ); // or jQuery(this).val()
        if (this.value == "Yes") {
            jQuery("#wpforms-1582-field_6-container .wpforms-page-next").trigger("click");
        }

        setInterval(nextStep3, 2000);

    });

    jQuery('#wpforms-1582-field_5_2').on('click', function() {
        //alert( this.value ); // or jQuery(this).val()
        if (this.value == "No") {
            jQuery("#wpforms-1582-field_6-container .wpforms-page-next").trigger("click");
        }

        setInterval(nextStep3, 2000);
    });

    function nextStep3() {
        //	alert('hi');
        jQuery("#wpforms-1582-field_14-container .wpforms-page-next").trigger("click");
        setInterval(nextStep4, 3000);
    }

    function nextStep4() {
        jQuery("#wpforms-1582-field_16-container .wpforms-page-next").trigger("click");
        jQuery("#wpforms-submit-1582").trigger("click");
    }


    /* New form id-2502 */

    jQuery('#wpforms-2502-field_1_1').on('click', function() {
        //alert( this.value ); // or jQuery(this).val()
        if (this.value == "Yes") {
            jQuery("#wpforms-2502-field_2-container .wpforms-page-next").trigger("click");
        }

    });
    jQuery('#wpforms-2502-field_1_2').on('click', function() {
        //alert( this.value ); // or jQuery(this).val()
        if (this.value == "No") {
            jQuery("#wpforms-2502-field_2-container .wpforms-page-next").trigger("click");
        }

    });

    jQuery('#wpforms-2502-field_5_1').on('click', function() {
        //alert( this.value ); // or jQuery(this).val()
        if (this.value == "Yes") {
            jQuery("#wpforms-2502-field_6-container .wpforms-page-next").trigger("click");
        }

        setInterval(nextStep3_2502, 2000);

    });

    jQuery('#wpforms-2502-field_5_2').on('click', function() {
        //alert( this.value ); // or jQuery(this).val()
        if (this.value == "No") {
            jQuery("#wpforms-2502-field_6-container .wpforms-page-next").trigger("click");
        }

        setInterval(nextStep3_2502, 2000);
    });

    function nextStep3_2502() {
        jQuery("#wpforms-2502-field_14-container .wpforms-page-next").trigger("click");
        setInterval(nextStep4_2502, 3000);
    }

    function nextStep4_2502() {
        jQuery("#wpforms-2502-field_16-container .wpforms-page-next").trigger("click");
        jQuery("#wpforms-submit-2502").trigger("click");
    }

    /******* Spanish Form ******/

    jQuery('#wpforms-1959-field_1_1').on('click', function() {
        //alert( this.value ); // or jQuery(this).val()
        if (this.value == "Sí") {
            jQuery("#wpforms-1959-field_2-container .wpforms-page-next").trigger("click");
        }

    });
    jQuery('#wpforms-1959-field_1_2').on('click', function() {
        //alert( this.value ); // or jQuery(this).val()
        if (this.value == "No") {
            jQuery("#wpforms-1959-field_2-container .wpforms-page-next").trigger("click");
        }

    });

    jQuery('#wpforms-1959-field_5_1').on('click', function() {
        //alert( this.value ); // or jQuery(this).val()
        if (this.value == "Sí") {
            jQuery("#wpforms-1959-field_6-container .wpforms-page-next").trigger("click");
        }

        setInterval(nextStepSpan3, 2000);

    });

    jQuery('#wpforms-1959-field_5_2').on('click', function() {
        //alert( this.value ); // or jQuery(this).val()
        if (this.value == "No") {
            jQuery("#wpforms-1959-field_6-container .wpforms-page-next").trigger("click");
        }

        setInterval(nextStepSpan3, 2000);
    });

    function nextStepSpan3() {
        jQuery("#wpforms-1959-field_14-container .wpforms-page-next").trigger("click");
        setInterval(nextStepSpan4, 3000);
    }

    function nextStepSpan4() {
        jQuery("#wpforms-1959-field_16-container .wpforms-page-next").trigger("click");
        jQuery("#wpforms-submit-1959").trigger("click");
    }


    /********* New form id-7538 = 9-6-2023 *********/

    jQuery('#wpforms-7538-field_1_1').on('click', function() {
        //alert( this.value ); // or jQuery(this).val()
        if (this.value == "Yes") {
            jQuery("#wpforms-7538-field_2-container .wpforms-page-next").trigger("click");
        }

    });
    jQuery('#wpforms-7538-field_1_2').on('click', function() {
        //alert( this.value ); // or jQuery(this).val()
        if (this.value == "No") {
            jQuery("#wpforms-7538-field_2-container .wpforms-page-next").trigger("click");
        }

    });

    jQuery('#wpforms-7538-field_5_1').on('click', function() {
        //alert( this.value ); // or jQuery(this).val()
        if (this.value == "Yes") {
            jQuery("#wpforms-7538-field_6-container .wpforms-page-next").trigger("click");
        }
    });
    jQuery('#wpforms-7538-field_5_2').on('click', function() {
        //alert( this.value ); // or jQuery(this).val()
        if (this.value == "No") {
            jQuery("#wpforms-7538-field_6-container .wpforms-page-next").trigger("click");
        }
    });


    jQuery('#wpforms-7538-field_29_1').on('click', function() {
        //alert( this.value ); // or jQuery(this).val()
        if (this.value == "Yes") {
            jQuery("#wpforms-7538-field_28-container .wpforms-page-next").trigger("click");
        }
        setInterval(nextStep3_7538, 2000);

    });

    jQuery('#wpforms-7538-field_29_2').on('click', function() {
        //alert( this.value ); // or jQuery(this).val()
        if (this.value == "No") {
            jQuery("#wpforms-7538-field_28-container .wpforms-page-next").trigger("click");
        }
        setInterval(nextStep3_7538, 2000);
    });

    function nextStep3_7538() {
        jQuery("#wpforms-7538-field_14-container .wpforms-page-next").trigger("click");
        setInterval(nextStep4_7538, 3000);
    }

    function nextStep4_7538() {
        jQuery("#wpforms-7538-field_16-container .wpforms-page-next").trigger("click");
        jQuery("#wpforms-submit-7538").trigger("click");
    }


    /**************/

    var time = 119; // seconds
    var originalRotate = -90;
    var cntDwn = 59;
    var rotatePerSec = 360 / time;
    var rotateQuarter = time / 4;
    // console.log("rr..."+rotateQuarter);
    function myTimer() {
        // console.log('time...' + time + 'cntDwn...' + cntDwn + 'originalRotate...' + originalRotate);
        //console.log('time...' + time + 'cntDwn...' + cntDwn + 'originalRotate...' + originalRotate);
        if (cntDwn == 0) {
            // console.log("cdn zero");
            // 
            if (time == 0) {
                cntDwn = 0;
            } else {
                cntDwn = 59;
            }

            time = time - cntDwn;
        } else {
            cntDwn--;
            if (cntDwn < 10) {
                cntDwn = "0" + cntDwn;
            }
            // console.log("cdn --");
        }

        if (time >= 240 && time < 300) {
            // console.log("test1");
            jQuery("#timer").html("04:" + cntDwn);
        } else if (time >= 180 && time < 240) {
            jQuery("#timer").html("03:" + cntDwn);
        } else if (time >= 120 && time < 180) {
            jQuery("#timer").html("02:" + cntDwn);
        } else if (time >= 60 && time < 120) {
            jQuery("#timer").html("01:" + cntDwn);
        } else if (time >= 0 && time < 60) {
            if (time > 0) {
                jQuery("#timer").html("0:" + cntDwn);
            } else {
                //console.log("time is zero");
                jQuery("#timer").html("0:0");
            }
        } else if (time < 0) {

            jQuery(".animate-75-100-b").css("transform", "rotate(0deg)");
        }

        if (originalRotate <= 0) {
            originalRotate = originalRotate + 1.2;
        } else {
            originalRotate = -88.8;
        }
        console.log(time);
    }
    var myVar = setInterval(function() {
        myTimer();
        if (time < 1) {
            //console.log("Stop");
            clearInterval(myVar);
            jQuery(".animate-75-100-b").css("transform", "rotate(0deg)");
            jQuery("#timer").html("0:01");
        }
    }, 1000);

    /*jQuery('.wpforms-field-container .wpforms-page-1 ul li').children().on('click', function() {
      //alert( this.value ); // or jQuery(this).val()
      if(this.value == "Yes") { 
        var data_formid = jQuery( ".wpforms-page-next" ).attr("data-formid");
        var data_field_id = jQuery( ".next1" ).attr("data-field-id");
        console.log("data formid"+data_formid);
        console.log("data field id"+data_field_id);
        //jQuery( ".wpforms-field-pagebreak .wpforms-page-next" ).trigger("click"); 
        jQuery( "#wpforms-"+data_formid+"-field_"+data_field_id+"-container .wpforms-page-next" ).trigger("click");
      }   
    });
    jQuery('.wpforms-field-container .wpforms-page-2 ul li').children().on('click', function() {
      alert( this.value ); // or jQuery(this).val()
      if(this.value == "Yes") { 
        var data_formid = jQuery( ".wpforms-page-next" ).attr("data-formid");
        var data_field_id = jQuery( ".wpforms-field-radio" ).attr("data-field-id");
        console.log("data formid"+data_formid);
        console.log("data field id"+data_field_id);
        //jQuery( ".wpforms-field-pagebreak .wpforms-page-next" ).trigger("click"); 
        jQuery( "#wpforms-"+data_formid+"-field_"+data_field_id+"-container .wpforms-page-next" ).trigger("click");
      }   
    });*/

});




//steps js
jQuery(document).ready(function() {
    jQuery('#show-more-content').hide();

    jQuery('#show-more').click(function() {
        jQuery('#show-more-content').show(300);
        jQuery('#show-less').show();
        jQuery('#show-more').hide();
    });

    jQuery('#show-less').click(function() {
        jQuery('#show-more-content').hide(150);
        jQuery('#show-more').show();
        jQuery(this).hide();
    });
    /*time*/
    var now = new Date;
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMinutes((new Date).getMinutes() > 30 ? 90 : 60);
    var timenow = now.toLocaleTimeString().replace(/:\d{2} /, ' ');
    document.querySelectorAll('.time').forEach(function(time) {
        time.innerText = timenow;
    });

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = jQuery("fieldset").length;

    setProgressBar(current);

    jQuery(".next").click(function() {

        current_fs = jQuery(this).parent();
        next_fs = jQuery(this).parent().next();

        //Add Class Active
        jQuery("#progressbar li").eq(jQuery("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({
            opacity: 0
        }, {
            step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({
                    'opacity': opacity
                });
            },
            duration: 500
        });
        setProgressBar(++current);
    });

    jQuery(".previous").click(function() {

        current_fs = jQuery(this).parent();
        previous_fs = jQuery(this).parent().prev();

        //Remove class active
        jQuery("#progressbar li").eq(jQuery("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({
            opacity: 0
        }, {
            step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({
                    'opacity': opacity
                });
            },
            duration: 500
        });
        setProgressBar(--current);
    });

    function setProgressBar(curStep) {
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        jQuery(".progress-bar")
            .css("width", percent + "%")
    }

    jQuery(".submit").click(function() {
        return false;
    })

    jQuery('.before_mtcng_vbt').click(function() {
        setTimeout(function() {
            jQuery('.matching').html('Matching with best option');
        }, 2500);
        setTimeout(function() {
            jQuery('.matching').html('Confirming Eligiblity');
        }, 3500);
        setTimeout(function() {

            jQuery('.toggling_box').hide();
            jQuery('.toggling_box_after').fadeIn();
            jQuery('.progress_bar').hide(); +
            jQuery('.form-card').css('margin-top', '0');
        }, 4200);
    });

    /*timer*/
    var time = 119; // seconds
    var originalRotate = -90;
    var cntDwn = 59;
    var rotatePerSec = 360 / time;
    var rotateQuarter = time / 4;
    // console.log("rr..."+rotateQuarter);
    function myTimer() {
        // console.log('time...' + time + 'cntDwn...' + cntDwn + 'originalRotate...' + originalRotate);
        //console.log('time...' + time + 'cntDwn...' + cntDwn + 'originalRotate...' + originalRotate);
        if (cntDwn == 0) {
            // console.log("cdn zero");
            cntDwn = 59;
        } else {
            cntDwn--;
            if (cntDwn < 10) {
                cntDwn = "0" + cntDwn;
            }
            // console.log("cdn --");
        }

        if (time >= 240 && time < 300) {
            // console.log("test1");
            jQuery(".timer").html("04:" + cntDwn);
        } else if (time >= 180 && time < 240) {
            jQuery(".timer").html("03:" + cntDwn);
        } else if (time >= 120 && time < 180) {
            jQuery(".timer").html("02:" + cntDwn);
        } else if (time >= 60 && time < 120) {
            jQuery(".timer").html("01:" + cntDwn);
        } else if (time >= 0 && time < 60) {
            if (time > 0) {
                jQuery(".timer").html("0:" + cntDwn);
            } else {
                //console.log("time is zero");
                jQuery(".timer").html("0:0");
            }
        } else if (time < 0) {

            jQuery(".animate-75-100-b").css("transform", "rotate(0deg)");
        }

        if (originalRotate <= 0) {
            originalRotate = originalRotate + 1.2;
        } else {
            originalRotate = -88.8;
        }

    }
    var myVar = setInterval(function() {
        myTimer();
        if (time < 1) {
            //console.log("Stop");
            clearInterval(myVar);
            jQuery(".animate-75-100-b").css("transform", "rotate(0deg)");
            jQuery(".timer").html("0:01");
        }
    }, 1000);
});