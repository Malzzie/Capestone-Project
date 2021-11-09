//JQuery for loading process
$(document).ready(function () {
    //Alert message when the website loads
    alert("Ready to Dress Up")
    //JQuery for the drop menu 
    $(document).ready(function () {
        $("#drpmenu").hide()
    })
    //JQuery for when the mouse is pointing at the quote in the index page
    $(".quotes").mouseover(function () {
        $("#alater").show()
    })
    //JQuery for when the mouse stops pointing at the quote in the index page
    $(".quotes").mouseleave(function () {
        $("#alater").hide()
    })
    //JQuery for when the mouse is pointing at the first image in the index page
    $(".images").mouseover(function () {
        $("#blater").show()
    })
    //JQuery for when the mouse is stops pointing at the first image in the index page
    $(".images").mouseleave(function () {
        $("#blater").hide()
    })
    //JQuery for when the mouse is pointing at the second image in the index page
    $(".images").mouseover(function () {
        $("#clater").show()
    })
    //JQuery for when the mouse is stops pointing at the second image in the index page
    $(".images").mouseleave(function () {
        $("#clater").hide()
    })
    //JQuery for when the mouse is pointing at the third image in the index page
    $(".images").mouseover(function () {
        $("#dlater").show()
    })
    //JQuery for when the mouse is stops pointing at the third image in the index page
    $(".images").mouseleave(function () {
        $("#dlater").hide()
    })
    //JQuery for when the mouse is pointing at the fourth image in the index page
    $(".images").mouseover(function () {
        $("#elater").show()
    })
    //JQuery for when the mouse is stops pointing at the fourth image in the index page
    $(".images").mouseleave(function () {
        $("#elater").hide()
    })
    //JQuery for when the mouse is pointing at the fifth image in the index page
    $(".images").mouseover(function () {
        $("#flater").show()
    })
    //JQuery for when the mouse is stops pointing at the fifth image in the index page
    $(".images").mouseleave(function () {
        $("#flater").hide()
    })
    //JQuery for when the mouse is pointing at the sixth image in the index page
    $(".images").mouseover(function () {
        $("#glater").show()
    })
    //JQuery for when the mouse is stops pointing at the sixth image in the index page
    $(".images").mouseleave(function () {
        $("#glater").hide()
    })
    //JQuery for when the mouse is pointing at the quote in the casual page
    $(".quotes2").mouseover(function () {
        $("#galater").show()
    })
    //JQuery for when the mouse stops pointing at the quote in the casual page
    $(".quotes2").mouseleave(function () {
        $("#galater").hide()
    })
    //JQuery for when the mouse is pointing at the first image in the casual page
    $(".images2").mouseover(function () {
        $("#hlater").show()
    })
    //JQuery for when the mouse stops pointing at the first image in the casual page
    $(".images2").mouseleave(function () {
        $("#hlater").hide()
    })
    //JQuery for when the mouse is pointing at the second image in the casual page
    $(".images2").mouseover(function () {
        $("#ilater").show()
    })
    //JQuery for when the mouse stops pointing at the second image in the casual page
    $(".images2").mouseleave(function () {
        $("#ilater").hide()
    })
    //JQuery for when the mouse is pointing at the third image in the casual page
    $(".images2").mouseover(function () {
        $("#jlater").show()
    })
    //JQuery for when the mouse stops pointing at the third image in the casual page
    $(".images2").mouseleave(function () {
        $("#jlater").hide()
    })
    //JQuery for when the mouse is pointing at the fourth image in the casual page
    $(".images2").mouseover(function () {
        $("#klater").show()
    })
    //JQuery for when the mouse stops pointing at the fourth image in the casual page
    $(".images2").mouseleave(function () {
        $("#klater").hide()
    })
    //JQuery for when the mouse is pointing at the fifth image in the casual page
    $(".images2").mouseover(function () {
        $("#llater").show()
    })
    //JQuery for when the mouse stops pointing at the fifth image in the casual page
    $(".images2").mouseleave(function () {
        $("#llater").hide()
    })
    //JQuery for when the mouse is pointing at the sixth image in the casual page
    $(".images2").mouseover(function () {
        $("#mlater").show()
    })
    //JQuery for when the mouse stops pointing at the sixth image in the casual page
    $(".images2").mouseleave(function () {
        $("#mlater").hide()
    })
    //JQuery for when the mouse is pointing at the quote in the formal page
    $(".quotes3").mouseover(function () {
        $("#nlater").show()
    })
    //JQuery for when the mouse stops pointing at the quote in the formal page
    $(".quotes3").mouseleave(function () {
        $("#nlater").hide()
    })
    //JQuery for when the mouse is pointing at the first image in the formal page
    $(".images3").mouseover(function () {
        $("#olater").show()
    })
    //JQuery for when the mouse stops pointing at the first image in the formal page
    $(".images3").mouseleave(function () {
        $("#olater").hide()
    })
    //JQuery for when the mouse is pointing at the second image in the formal page
    $(".images3").mouseover(function () {
        $("#plater").show()
    })
    //JQuery for when the mouse stops pointing at the second image in the formal page
    $(".images3").mouseleave(function () {
        $("#plater").hide()
    })
    //JQuery for when the mouse is pointing at the third image in the formal page
    $(".images3").mouseover(function () {
        $("#qlater").show()
    })
    //JQuery for when the mouse stops pointing at the third image in the formal page
    $(".images3").mouseleave(function () {
        $("#qlater").hide()
    })
    //JQuery for when the mouse is pointing at the fouth image in the formal page
    $(".images3").mouseover(function () {
        $("#rlater").show()
    })
    //JQuery for when the mouse stops pointing at the fourth image in the formal page
    $(".images3").mouseleave(function () {
        $("#rlater").hide()
    })
    //JQuery for when the mouse is pointing at the fifth image in the formal page
    $(".images3").mouseover(function () {
        $("#slater").show()
    })
    //JQuery for when the mouse stops pointing at the fifth image in the formal page
    $(".images3").mouseleave(function () {
        $("#slater").hide()
    })
    //JQuery for when the mouse is pointing at the sixth image in the formal page
    $(".images3").mouseover(function () {
        $("#tlater").show()
    })
    //JQuery for when the mouse stops pointing at the sixth image in the formal page
    $(".images3").mouseleave(function () {
        $("#tlater").hide()
    })
    //JQuery for the when the drop down is clicked
    $("#styles").click(function () {
        $("#drpmenu").show()
    })
    //JQuery for when the mouse stops point on the drop down
    $("#drpmenu").mouseleave(function () {
        $(this).hide()
    })
    //JQuery animation and chained events for the first thumbs-like
    $("#like1").click(function () {

        $(this).animate({
            width: "50px"
        }).animate({
            width: "20px"
        })

    })
    //JQuery animation and chained events for the second thumbs-like
    $("#like2").click(function () {
        $(this).animate({
            width: "50px"
        }).animate({
            width: "20px"
        })
    })
    //JQuery animation and chained events for the third thumbs-like
    $("#like3").click(function () {
        $(this).animate({
            width: "50px"
        }).animate({
            width: "20px"
        })
    })
    //JQuery animation and chained events for the fourth thumbs-like
    $("#like4").click(function () {
        $(this).animate({
            width: "50px"
        }).animate({
            width: "20px"
        })
    })
    //JQuery animation and chained events for the fifth thumbs-like
    $("#like5").click(function () {
        $(this).animate({
            width: "50px"
        }).animate({
            width: "20px"
        })
    })
    //JQuery animation and chained events for the sixth thumbs-like
    $("#like6").click(function () {
        $(this).animate({
            width: "80px"
        }).animate({
            width: "50px"
        })
    })
    //JQuery animation and chained events for the seventh thumbs-like
    $("#like7").click(function () {
        $(this).animate({
            width: "50px"
        }).animate({
            width: "20px"
        })
    })
    //JQuery animation and chained events for the eigth thumbs-like
    $("#like8").click(function () {
        $(this).animate({
            width: "50px"
        }).animate({
            width: "20px"
        })
    })
    //JQuery animation and chained events for the nineth thumbs-like
    $("#like9").click(function () {
        $(this).animate({
            width: "50px"
        }).animate({
            width: "20px"
        }) //jquery chained events
    })
    //JQuery animation and chained events for the tenth thumbs-like
    $("#like10").click(function () {
        $(this).animate({
            width: "50px"
        }).animate({
            width: "20px"
        })
    })
    //JQuery animation and chained events for the eleventh thumbs-like
    $("#like11").click(function () {
        $(this).animate({
            width: "50px"
        }).animate({
            width: "20px"
        })
    })
    //JQuery animation and chained events for the twelth thumbs-like
    $("#like12").click(function () {
        $(this).animate({
            width: "50px"
        }).animate({
            width: "20px"
        })
    })
    //JQuery animation and chained events for the thirteenth thumbs-like
    $("#like13").click(function () {
        $(this).animate({
            width: "50px"
        }).animate({
            width: "20px"
        })
    })
    //JQuery animation and chained events for the fourteenth thumbs-like
    $("#like14").click(function () {
        $(this).animate({
            width: "50px"
        }).animate({
            width: "20px"
        })
    })
    //JQuery animation and chained events for the fifteenth thumbs-like
    $("#like15").click(function () {
        $(this).animate({
            width: "50px"
        }).animate({
            width: "20px"
        })
    })
    //JQuery animation and chained events for the sixteenth thumbs-like
    $("#like16").click(function () {
        $(this).animate({
            width: "50px"
        }).animate({
            width: "20px"
        })
    })
    //JQuery animation and chained events for the seventeenth thumbs-like
    $("#like17").click(function () {
        $(this).animate({
            width: "50px"
        }).animate({
            width: "20px"
        })
    })
    //JQuery animation and chained events for the eighteenth thumbs-like
    $("#like18").click(function () {
        $(this).animate({
            width: "50px"
        }).animate({
            width: "20px"
        })
    })
    //JQuery animation and chained events for the nineteenth thumbs-like
    $("#like19").click(function () {
        $(this).animate({
            width: "50px"
        }).animate({
            width: "20px"
        })
    })
    //JQuery animation and chained events for the twenteeth thumbs-like
    $("#like20").click(function () {
        $(this).animate({
            width: "50px"
        }).animate({
            width: "20px"
        })
    })
    //JQuery animation and chained events for the twenty-first thumbs-like
    $("#like21").click(function () {
        $(this).animate({
            width: "50px"
        }).animate({
            width: "20px"
        })
    })
    //grabbing the '.tsend' class from the HTML page
    let bookmark = document.querySelectorAll('.tsend');
    let bookmarked = "";
    //Array to save values from the pages
    let saved = [{
            value: "Men’s fashions all start as sports clothes and progress to the great occasions of state. The tailcoat, which started out as a hunting coat, is just finishing such a journey. The tracksuit is just beginning one.",
            inCart: 0,
        },
        //picture 1 to be saved in save for later page and count
        {
            value: "picture1.jpg",
            inCart: 0,

        },
        //picture 2 to be saved in save for later page and count
        {
            value: "picture2.jpg",
            inCart: 0,

        },
        //picture 3 to be saved in save for later page and count
        {
            value: "picture3.jpg",
            inCart: 0,

        },
        //picture 4 to be saved in save for later page and count
        {
            value: "picture4.jpg",
            inCart: 0,

        },
        //picture 5 to be saved in save for later page and count
        {
            value: "picture5.jpg",
            inCart: 0,

        },
        //picture 6 to be saved in save for later page and count
        {
            value: "picture6.jpg",
            inCart: 0,

        },
        //picture 7 to be saved in save for later page and count
        {
            value: "picture7.jpg",
            inCart: 0,

        },
        //second quote to be saved in save for later page and count
        {


            value: "The man who, as is often said, can get away with wearing a trench coat over his dinner jacket, or an old school tie for a belt, is the one who in fact understands best the rules of proper dress and can bend them to suit his own personality and requirements.",
            inCart: 0,

        },
        //picture 8 to be saved in save for later page and count
        {
            value: "picture8.jpg",
            inCart: 0,

        },
        //picture 9 to be saved in save for later page and count
        {
            value: "picture9.jpg",
            inCart: 0,

        },
        //picture 10 to be saved in save for later page and count
        {
            value: "picture10.jpg",
            inCart: 0,

        },
        //picture 11 to be saved in save for later page and count
        {
            value: "picture11.jpg",
            inCart: 0,

        },
        //picture 12 to be saved in save for later page and count
        {
            value: "picture12.jpg",
            inCart: 0,

        },
        //picture 13 to be saved in save for later page and count
        {
            value: "picture13.jpg",
            inCart: 0,

        },
        //third quote to be saved in save for later page and count
        {
            value: "We define a metrosexual as someone who really takes care of themselves in terms of grooming and style. There is nothing wrong with that. But I think you need to have some other values. It’s cool to incorporate some traditional values into metrosexuality. Then it becomes a good lifestyle.",
            inCart: 0,

        },
        //picture 14 to be saved in save for later page and count
        {
            value: "picture14.jpg",
            inCart: 0,
        },
        //picture 15 to be saved in save for later page and count
        {
            value: "picture15.jpg",
            inCart: 0,
        },
        //picture 16 to be saved in save for later page and count
        {
            value: "picture16.jpg",
            inCart: 0,
        },
        //picture 17 to be saved in save for later page and count
        {
            value: "picture17.jpg",
            inCart: 0,
        },
        //picture 18 to be saved in save for later page and count
        {
            value: "picture18.jpg",
            inCart: 0,
        },
        //picture 19 to be saved in save for later page and count
        {
            value: "picture19.jpg",
            inCart: 0,
        },
    ];
    //Interating through '.tsend' adding +1
    for (let i = 0; i < bookmark.length; i++) {
        //click event listner and function for alert message 
        bookmark[i].addEventListener('click', function () {
            bookMarkNum(saved[i]);
            alert('check the number under the bookmark tab for how many items are in the bookmark page')
        })

    }
    //function to load items in the save for later page
    function onLoadBookMark() {
        bookmarked = localStorage.getItem('bookMarkNum');
        if (bookmarked) {

            document.querySelector('.bmpage span').textContent = bookmarked;

        }
    }
    //function to save items to local storage.
    function bookMarkNum(saved) {
        let bookmarked = localStorage.getItem('bookMarkNum');
        bookmarked = parseInt(bookmarked);
        if (bookmarked) {
            localStorage.setItem('bookMarkNum', bookmarked + 1);
            document.querySelector('.bmpage span').textContent = bookmarked + 1;
        } else {
            localStorage.setItem('bookMarkNum', 1);
            document.querySelector('.bmpage span').textContent = 1;
        }
        setItems(saved);
    }

    //fucntion for saved items in the save for later page
    function setItems(saved) {
        let savedItems = localStorage.getItem('savedInCart');
        savedItems = JSON.parse(savedItems);

        if (savedItems != null) {
            if (savedItems[saved.value] == undefined) {
                savedItems = {
                    ...savedItems,
                    [saved.value]: saved
                }
            }
            savedItems[saved.value].inCart += 1;
        } else {
            saved.inCart = 1;
            savedItems = {
                [saved.value]: saved
            }
            console.log(savedItems);
        }

        localStorage.setItem("savedInCart", JSON.stringify(savedItems));
    }
    //display function pulling  values from the objects "saved"
    function displayBM() {
        let savedItems = localStorage.getItem("savedInCart");
        savedItems = JSON.parse(savedItems);
        let container = document.querySelector('.bm-items');
        if (savedItems && container) {
            container.innerHTML = '';
            Object.values(savedItems).map(item => {
                container.innerHTML += `
        <div class="bookMark">
            <ion-icon name="add-circle"></ion-icon>
            <span>${item.value}</span>                  
            <span>${item.inCart}</span>
            </div>
        `
            })
        }
    }

    //function for liked items
    function liked() {
        $('.like').click(function () {
            var thumbid = $(this).attr('class');
            $(this).toggleClass('like');

            if (!$(this).hasClass('like')) {
                localStorage.setItem(thumbid, "unliked")
                localStorage.removeItem(($(this.parentNode.parentNode).find))
            }
        })
    }
    //Methods to call created functions
    displayBM();
    liked();
    onLoadBookMark();
})