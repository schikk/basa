$(document).ready(function() {

    $('#stage-filter input[type="checkbox"]').on('change', function() {
       $('input[type="checkbox"]').not(this).prop('checked', false);
    });
    // Square filter
    $('input[name=square]').nativeMultiple({
        stylesheet: "slider",
        onCreate: function() {
            console.log(this);
        },
        onChange: function(first_value, second_value) {
            $('#val-range-squareL').html(first_value);
            $('#val-range-squareR').html(second_value);
        },
        onSlide: function(first_value, second_value) {
            $('#val-range-squareL').html(first_value);
            $('#val-range-squareR').html(second_value);
        }
    });
    // Number of rooms filter
     $('input[name=rooms]').nativeMultiple({
        stylesheet: "slider",
        onCreate: function() {
            console.log(this);
        },
        onChange: function(first_value, second_value) {
            $('#val-range-roomsL').html(first_value);
            $('#val-range-roomsR').html(second_value);
        },
        onSlide: function(first_value, second_value) {
            $('#val-range-roomsL').html(first_value);
            $('#val-range-roomsR').html(second_value);
        }
    });
    // Floor filter
     $('input[name=floor]').nativeMultiple({
        stylesheet: "slider",
        onCreate: function() {
            console.log(this);
        },
        onChange: function(first_value, second_value) {
            $('#val-range-floorL').html(first_value);
            $('#val-range-floorR').html(second_value);
        },
        onSlide: function(first_value, second_value) {
            $('#val-range-floorL').html(first_value);
            $('#val-range-floorR').html(second_value);
        }
    });
    // Clear filter
    $('#clear-filter-btn').click(function(event) {
        event.preventDefault();
        location.reload();
    });
    // Fixed filter
    function fixedFilter() {
        $(window).scroll(function (event) {
            if ($(window).scrollTop() > $(document).height() - $('.main-footer').outerHeight() - $(window).height()) {
                $('.cat-apartments-left-col').addClass('hidden');
            } else {
                $('.cat-apartments-left-col').removeClass('hidden');
            }
        });
    }
    ;

    if ($(window).width() > 767) {
        fixedFilter();
    }

    // Mobile scripts
    if ( $(window).width() < 767 ) {
        $('.category-apartments-filter').addClass('onload');
        $('.top-row-filter-container, .cat-apartments-left-col').appendTo('.mobile-filter-window-wrapper');
        $('.mobile-filter-btn').click(function(event) {
            event.preventDefault();
            $('.mobile-filter-window').addClass('active');
            $('body').addClass('overflow');
        });
        $('.apply-filter-btn').click(function(event) {
            $('.mobile-filter-window').removeClass('active');
            $('body').removeClass('overflow');
        });
        $(document.elementFromPoint(80, 40)).click(function(event) {
            $('.mobile-filter-window').removeClass('active');
            $('body').removeClass('overflow');
        });
    }
})