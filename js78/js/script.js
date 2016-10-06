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


    var label1 = $('fieldset div:first-child label');
    var input1 = $('#firstname');
    var help1 = $('#help1');

    var label2 = $('fieldset div:nth-child(2) label');
    var input2 = $('#lastname');
    var help2 = $('#help2');

    var label3 = $('fieldset div:nth-child(3) label');
    var input3 = $('#address');
    var help3 = $('#help3');

 /*

    input1.mouseover(function () {
        help1.toggle();
    });
    input1.mouseout(function () {
        help1.toggle();
    });*/

    input1.mouseover(function () {
        help1.removeClass('hide');
    });
    input1.mouseout(function () {
        help1.addClass('hide');
    });

    input2.mouseover(function () {
        help2.removeClass('hide');
    });
    input2.mouseout(function () {
        help2.addClass('hide');
    });

    input3.mouseover(function () {
        help3.removeClass('hide');
    });
    input3.mouseout(function () {
        help3.addClass('hide');
    });

    label1.click(function () {
        help1.removeClass('hide');
        help2.addClass('hide');
        help3.addClass('hide');
    });

    label2.click(function () {
        help2.removeClass('hide');
        help1.addClass('hide');
        help3.addClass('hide');
    });

    label3.click(function () {
        help3.removeClass('hide');
        help2.addClass('hide');
        help1.addClass('hide');
    });

    $('button').click(function () {
        help1.removeClass('hide');
        help2.removeClass('hide');
        help3.removeClass('hide');
    });
});
