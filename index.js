


$(document).ready(function () {


    // //IF YOU WANT TO TEST AUTOMATICALLY UNCOMMENT THIS SECTION 

    // //test arrays 
    // var arr1 = [3, 2, 6, 12, 34, 5, 24, 67, 78];
    // var arr2 = [3, 234, 35, 13, 67, 35, 23, 99, 55, 3, 6, 33, 36, 46];
    // var arr3 = [100, 300, 700, 600, 1200];


    // // //SORT THE ARRAY
    // arr2.sort(function (a, b) { return a - b });

    // //LOOP THROUGH ARRAY TO MAKE LOGIC FOR EACH INTERGER
    // arr2.map(number => {
    //     console.log('NUMBER Looped :  ', number);

    //     //NUMBER MAGIC

    //     if (number % 2 == 0 && number % 3 == 0) {
    //         console.log('THIS NUMBER IS DIVISIBLE BY 2 AND 3');
    //         $("#shape").append('<div class="triangle mt-3"></div>');

    //         return
    //     }

    //     if (number % 2 == 0) {
    //         console.log('THIS NUMBER IS DIVISIBLE BY 2')
    //         // $(".shape").toggleClass("square");

    //         $("#shape").append('<div class="square mt-3"></div>');
    //         return
    //     }

    //     if (number % 3 == 0) {
    //         console.log('THIS NUMBER IS DIVISIBLE BY 3')
    //         $("#shape").append('<div class="circle mt-3"></div>');
    //         return
    //     }


    //     console.log('THIS NUMBER IS NOT DIVISBLE BY 2 OR 3');

    // });


    // Get value on button click and show figures
    $("#myBtn").click(function () {
        //value from user
        var str = $("#myInput").val();

        //turn user value into an array
        let userArray = $("#myInput").val().split(',');

        //sort the array ascending order
        userArray.sort(function (a, b) { return a - b });

        //loop through the array
        userArray.map(number => {


            //number logic

            if (number % 2 == 0 && number % 3 == 0) {
                console.log('THIS NUMBER IS DIVISIBLE BY 2 AND 3. THIS SHOULD BE A TRIANGLE');

                //USE JQUERY APPEND FUNCTION TO GET THE DIV WITH ID #SHAPE AND ATTATCH A NEW DIV INSIDE WITH THE CLASS .TRIANGLE
                $("#shape").append('<div class="triangle mt-3"></div>');

                return
            }

            if (number % 2 == 0) {

                console.log('THIS NUMBER IS DIVISIBLE BY 2')
                //USE JQUERY APPEND FUNCTION TO GET THE DIV WITH ID #SHAPE AND ATTATCH A NEW DIV INSIDE WITH THE CLASS .SQUARE

                $("#shape").append('<div class="square mt-3"></div>');
                return
            }

            if (number % 3 == 0) {
                console.log('THIS NUMBER IS DIVISIBLE BY 3')
                //USE JQUERY APPEND FUNCTION TO GET THE DIV WITH ID #SHAPE AND ATTATCH A NEW DIV INSIDE WITH THE CLASS .CIRCLE
                $("#shape").append('<div class="circle mt-3"></div>');
                return
            }

            //DEFAULT, IF THE NUMBER IS NOT DIVISIBLE BY ANY, DONT DO ANYTHING
            console.log('THIS NUMBER IS NOT DIVISBLE BY 2 OR 3');
        })
    });
});

