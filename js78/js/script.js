/**
 * Created by agent on 04.10.2016.
 */
$(function () {
    var button1 = $('li:first-child a');
    var button2  = $('li:nth-child(2) a');
    var button3  = $('li:nth-child(3) a');

    var tab1 = $('#tabs-1');
    var tab2 = $('#tabs-2');
    var tab3 = $('#tabs-3');

    button1.click(function () {
        button1.addClass('active-tab');
        tab2.hide();
        tab3.hide();
        tab1.show();
        button2.removeClass('active-tab');
        button3.removeClass('active-tab');

    });
    button2.click(function () {
        tab1.hide();
        tab3.hide();
        tab2.show();
        button1.removeClass('active-tab');
        button2.addClass('active-tab');
        button3.removeClass('active-tab');

    });
    button3.click(function () {
        tab1.hide();
        tab2.hide();
        tab3.show();
        button1.removeClass('active-tab');
        button2.removeClass('active-tab');
        button3.addClass('active-tab');
    });

    $('tabs').attr('scrollTop', 200);

    var label1 = $('fieldset div:first-child label');
    var input1 = $('#firstname');

    var label2 = $('fieldset div:nth-child(2) label');
    var input2 = $('#lastname');

    var label3 = $('fieldset div:nth-child(3) label');
    var input3 = $('#address');
    console.log(title1);


});