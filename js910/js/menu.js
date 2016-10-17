/**
 * Created by agent on 17.10.2016.
 */
$(document).ready(function(){
    $('.first-level .dropdown').on('mouseover', function () {
        $('.second-level').show();
    });

    $('.first-level .dropdown').on('mouseout', function () {
        $('.second-level').hide();
    });

    $('.second-level .dropdown').on('mouseover', function () {
        $('.third-level').show();
    });

    $('.second-level .dropdown').on('mouseout', function () {
        $('.third-level').hide();
    });

    $('.third-level .dropdown').on('mouseover', function () {
        $('.forth-level').show();
    });

    $('.third-level .dropdown').on('mouseout', function () {
        $('.forth-level').hide();
    });
});