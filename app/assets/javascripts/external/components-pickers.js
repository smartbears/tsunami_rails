var ComponentsPickers = function () {

    var handleDatePickers = function () {

        if (jQuery().datepicker) {
            $('.date-picker').datepicker({
                rtl: false,
                autoclose: true
            });
            $('body').removeClass("modal-open"); // fix bug when inline picker is used in modal
        }
    }
  

    return {
        //main function to initiate the module
        init: function () {
            handleDatePickers();
            handleTimePickers();
            handleDatetimePicker();
            handleDateRangePickers();
            handleClockfaceTimePickers();
            handleColorPicker();
        }
    };

}();