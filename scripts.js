$(document).ready(function() {

    console.log('This is being built')

    // SPA Functionality
    $('.aboutButton').on('click', function() {
        console.log('about was clicked')
        $('')
    })

    $('.portfolioButton').on('click', function() {
        console.log('portfolio was clicked')
    })

    $('.contactButton').on('click', function() {
        console.log('contact was clicked')
    })

    $(".annieButton").on("click", function() {
        $(".annieButton").hide();
        $(".annieContent").removeClass('hidden');
        console.log("Annie's Button")
    })

    $(".giftButton").on("click", () => {
        $(".gifts").removeClass("hidden");
        $(".giftButton").hide();

    })

})
