$(document).ready(function() {


    var arr = $('.wrapper').children(),
        result = $('#result span'),
        level = $('#level span'),
        timer = $('#timer span'),
        currentScore = $('#score span'),
        totalScore = $('#total span'),
        boxIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        font1 = $('#font1'),
        font2 = $('#font2'),
        font3 = $('#font3'),
        fontArr,
        sum,
        sum2;

    //  Shuffle all indexes without duplicates

    function shuffle(arr) {
        for (var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
        return arr;
    }

    var randomIndex = shuffle(boxIndex);


    $('.wrapper div').toggleClass('rotate');

    levelFunc();

    // Checking in which level of the game you're in and setting the difficulty in regard.

    function levelFunc() {


        switch (level.html()) {
            case '1':
                for (var i = 0, len = arr.length; i < len; i++) {
                    arr[i].innerHTML = Math.floor((Math.random() * 150) + 1);
                    result.html(arr[randomIndex[0]].innerHTML);
                }
                break;
            case '2':
                for (var i = 0, len = arr.length; i < len; i++) {
                    arr[i].innerHTML = Math.floor((Math.random() * 300) + 1);
                    result.html(arr[randomIndex[1]].innerHTML);
                }
                break;
            case '3':
                for (var i = 0, len = arr.length; i < len; i++) {
                    arr[i].innerHTML = Math.floor((Math.random() * 450) + 1);
                    result.html(arr[randomIndex[2]].innerHTML);
                }
                break;
            case '4':
                for (var i = 0, len = arr.length; i < len; i++) {
                    arr[i].innerHTML = Math.floor((Math.random() * 1650) + 1);
                    result.html(arr[randomIndex[3]].innerHTML);
                }
                break;
            case '5':
                for (var i = 0, len = arr.length; i < len; i++) {
                    arr[i].innerHTML = Math.floor((Math.random() * 3400) + 1);
                    result.html(arr[randomIndex[4]].innerHTML);
                }
                break;
            case '6':
                for (var i = 0, len = arr.length; i < len; i++) {
                    arr[i].innerHTML = Math.floor((Math.random() * 6000) + 1);
                    result.html(arr[randomIndex[5]].innerHTML);
                }
                break;
            case '7':
                for (var i = 0, len = arr.length; i < len; i++) {
                    arr[i].innerHTML = Math.floor((Math.random() * 14000) + 1);
                    result.html(arr[randomIndex[6]].innerHTML);
                }
                break;
            case '8':
                for (var i = 0, len = arr.length; i < len; i++) {
                    arr[i].innerHTML = Math.floor((Math.random() * 17000) + 1);
                    result.html(arr[randomIndex[7]].innerHTML);
                }
                break;
            case '9':
                for (var i = 0, len = arr.length; i < len; i++) {
                    arr[i].innerHTML = Math.floor((Math.random() * 20000) + 1);
                    result.html(arr[randomIndex[8]].innerHTML);
                }
                break;
            case '10':
                for (var i = 0, len = arr.length; i < len; i++) {
                    arr[i].innerHTML = Math.floor((Math.random() * 100000) + 1);
                    result.html(arr[randomIndex[9]].innerHTML);
                }
                break;
            case '11':
                for (var i = 0, len = arr.length; i < len; i++) {
                    arr[i].innerHTML = Math.floor((Math.random() * 500000) + 1);
                    result.html(arr[randomIndex[10]].innerHTML);
                }
                break;
            case '12':
                for (var i = 0, len = arr.length; i < len; i++) {
                    arr[i].innerHTML = Math.floor((Math.random() * 1000000) + 1);
                    result.html(arr[randomIndex[11]].innerHTML);
                }
                break;

        }

    }

    // Initializing the game.


    $('.wrapper div').on('click', function() {

        $(this).addClass('rotate');

        // Checking whether we've found the right number by the "find" objective. If not, we're back to level 1 with unlimited timer.

        if (this.innerHTML !== result.html()) {
            clearInterval(t);
            alert('Nope!');
            $('.wrapper div').css({ 'font-family': 'serif'});
            level.html('1');
            timer.html('unlimited');
            totalScore.html('0');
            currentScore.html('0');
            levelFunc();
        } else if (level.html() == '1') {

            // If we've found the correct number, we improve farther in levels and difficulty. Each level will contain 1 of 3 random fonts.

            if (this.innerHTML == result.html()) {
                $(this).css({ 'background': 'Chartreuse', 'color': 'red' });
                setTimeout(function() {
                    font1.attr('href', 'https://fonts.googleapis.com/css?family=Rock Salt');
                    font2.attr('href', 'https://fonts.googleapis.com/css?family=Vast Shadow');
                    font3.attr('href', 'https://fonts.googleapis.com/css?family=Yeseva One');
                    fontArr = ['Rock Salt', 'Vast Shadow', 'Yeseva One'];
                    
                    $('.wrapper div').css({ 'background': 'blue', 'color': 'white', 'font-family': fontArr[Math.floor(Math.random() * 3)]});
                    $('.wrapper div').toggleClass('rotate');
 

                    level.html('2');
                    var count = 20,
                        cScore = 0;
                    t = setInterval(function() {
                        timer.html(count);
                        currentScore.html(cScore);
                        count--;
                        cScore++;

                        if (count < -1) {
                            clearInterval(t);
                            alert('Out of time! Back to level 1!');
                            level.html('1');
                            timer.html('unlimited');
                            totalScore.html('0');
                            currentScore.html('0');
                            levelFunc();
                        }


                    }, 1000);
                    levelFunc();
                }, 3000);

                $('.wrapper div').toggleClass('rotate');
            }

        } else if (level.html() == '2') {
            clearInterval(t);
            timer.html('re-calculating...');

            if (this.innerHTML == result.html()) {
                $(this).css({ 'background': 'Chartreuse', 'color': 'red' });
                setTimeout(function() {
                    font1.attr('href', 'https://fonts.googleapis.com/css?family=Monofett');
                    font2.attr('href', 'https://fonts.googleapis.com/css?family=Nosifer');
                    font3.attr('href', 'https://fonts.googleapis.com/css?family=Over the Rainbow');
                    fontArr = ['Monofett', 'Nosifer', 'Over the Rainbow'];
                    $('.wrapper div').css({ 'background': 'blue', 'color': 'white', 'font-family': fontArr[Math.floor(Math.random() * 3)]});
                    $('.wrapper div').toggleClass('rotate');
                    totalScore.html(currentScore.html());
                    level.html('3');
                    var count = 18,
                        cScore = 0;
                    t = setInterval(function() {
                        timer.html(count);
                        currentScore.html(cScore);
                        count--;
                        cScore++;

                        if (count < -1) {
                            clearInterval(t);
                            alert('Out of time! Back to level 1!');
                            level.html('1');
                            timer.html('unlimited');
                            totalScore.html('0');
                            currentScore.html('0');
                            levelFunc();
                        }


                    }, 1000);
                    levelFunc();
                }, 3000);

                $('.wrapper div').toggleClass('rotate');
            }

        } else if (level.html() == '3') {
            clearInterval(t);
            timer.html('re-calculating...');
            if (this.innerHTML == result.html()) {

                $(this).css({ 'background': 'Chartreuse', 'color': 'red' });
                setTimeout(function() {
                    font1.attr('href', 'https://fonts.googleapis.com/css?family=Armata');
                    font2.attr('href', 'https://fonts.googleapis.com/css?family=Black Ops One');
                    font3.attr('href', 'https://fonts.googleapis.com/css?family=Aladin');
                    fontArr = ['Armata', 'Black Ops One', 'Aladin'];
                    
                    $('.wrapper div').css({ 'background': 'blue', 'color': 'white', 'font-family': fontArr[Math.floor(Math.random() * 3)]});
                    $('.wrapper div').toggleClass('rotate');


                    level.html('4');
                    sum = Number(totalScore.html());
                    sum2 = Number(currentScore.html());
                    totalScore.html(sum + sum2);
                    var count = 15,
                        cScore = 0;
                    t = setInterval(function() {
                        timer.html(count);
                        currentScore.html(cScore);
                        count--;
                        cScore++;

                        if (count < -1) {
                            clearInterval(t);
                            alert('Out of time! Back to level 1!');
                            level.html('1');
                            timer.html('unlimited');
                            totalScore.html('0');
                            currentScore.html('0');
                            levelFunc();
                        }


                    }, 1000);
                    levelFunc();
                }, 3000);

                $('.wrapper div').toggleClass('rotate');
            }

        } else if (level.html() == '4') {
            clearInterval(t);
            timer.html('re-calculating...');
            if (this.innerHTML == result.html()) {

                $(this).css({ 'background': 'Chartreuse', 'color': 'red' });
                setTimeout(function() {
                    font1.attr('href', 'https://fonts.googleapis.com/css?family=Alex Brush');
                    font2.attr('href', 'https://fonts.googleapis.com/css?family=Allerta Stencil');
                    font3.attr('href', 'https://fonts.googleapis.com/css?family=Amatic SC');
                    fontArr = ['Alex Brush', 'Allerta Stencil', 'Amatic SC'];
                    $('.wrapper div').css({ 'background': 'blue', 'color': 'white', 'font-family': fontArr[Math.floor(Math.random() * 3)]});
                    $('.wrapper div').toggleClass('rotate');
                    level.html('5');
                    sum = Number(totalScore.html());
                    sum2 = Number(currentScore.html());
                    totalScore.html(sum + sum2);
                    var count = 13,
                        cScore = 0;
                    t = setInterval(function() {
                        timer.html(count);
                        currentScore.html(cScore);
                        count--;
                        cScore++;

                        if (count < -1) {
                            clearInterval(t);
                            alert('Out of time! Back to level 1!');
                            level.html('1');
                            timer.html('unlimited');
                            totalScore.html('0');
                            currentScore.html('0');
                            levelFunc();
                        }


                    }, 1000);
                    levelFunc();
                }, 3000);

                $('.wrapper div').toggleClass('rotate');
            }

        } else if (level.html() == '5') {
            clearInterval(t);
            timer.html('re-calculating...');
            if (this.innerHTML == result.html()) {

                $(this).css({ 'background': 'Chartreuse', 'color': 'red' });
                setTimeout(function() {
                    font1.attr('href', 'https://fonts.googleapis.com/css?family=Annie Use Your Telescope');
                    font2.attr('href', 'https://fonts.googleapis.com/css?family=Arizonia');
                    font3.attr('href', 'https://fonts.googleapis.com/css?family=Astloch');
                    fontArr = ['Annie Use Your Telescope', 'Arizonia', 'Astloch'];

                    $('.wrapper div').css({ 'background': 'blue', 'color': 'white', 'font-family': fontArr[Math.floor(Math.random() * 3)]});
                    $('.wrapper div').toggleClass('rotate');
                    level.html('6');
                    sum = Number(totalScore.html());
                    sum2 = Number(currentScore.html());
                    totalScore.html(sum + sum2);
                    var count = 12,
                        cScore = 0;
                    t = setInterval(function() {
                        timer.html(count);
                        currentScore.html(cScore);
                        count--;
                        cScore++;

                        if (count < -1) {
                            clearInterval(t);
                            alert('Out of time! Back to level 1!');
                            level.html('1');
                            timer.html('unlimited');
                            totalScore.html('0');
                            currentScore.html('0');
                            levelFunc();
                        }


                    }, 1000);
                    levelFunc();
                }, 3000);

                $('.wrapper div').toggleClass('rotate');
            }

        } else if (level.html() == '6') {
            clearInterval(t);
            timer.html('re-calculating...');
            if (this.innerHTML == result.html()) {

                $(this).css({ 'background': 'Chartreuse', 'color': 'red' });
                setTimeout(function() {
                    font1.attr('href', 'https://fonts.googleapis.com/css?family=Atomic Age');
                    font2.attr('href', 'https://fonts.googleapis.com/css?family=Barrio');
                    font3.attr('href', 'https://fonts.googleapis.com/css?family=Bonbon');
                    fontArr = ['Atomic Age', 'Barrio', 'Bonbon'];

                    $('.wrapper div').css({ 'background': 'blue', 'color': 'white', 'font-family': fontArr[Math.floor(Math.random() * 3)]});
                    $('.wrapper div').toggleClass('rotate');
                    level.html('7');
                    sum = Number(totalScore.html());
                    sum2 = Number(currentScore.html());
                    totalScore.html(sum + sum2);
                    var count = 9,
                        cScore = 0;
                    t = setInterval(function() {
                        timer.html(count);
                        currentScore.html(cScore);
                        count--;
                        cScore++;

                        if (count < -1) {
                            clearInterval(t);
                            alert('Out of time! Back to level 1!');
                            level.html('1');
                            timer.html('unlimited');
                            totalScore.html('0');
                            currentScore.html('0');
                            levelFunc();
                        }


                    }, 1000);
                    levelFunc();
                }, 3000);

                $('.wrapper div').toggleClass('rotate');
            }

        } else if (level.html() == '7') {
            clearInterval(t);
            timer.html('re-calculating...');
            if (this.innerHTML == result.html()) {

                $(this).css({ 'background': 'Chartreuse', 'color': 'red' });
                setTimeout(function() {
                    font1.attr('href', 'https://fonts.googleapis.com/css?family=Bungee');
                    font2.attr('href', 'https://fonts.googleapis.com/css?family=Bungee Outline');
                    font3.attr('href', 'https://fonts.googleapis.com/css?family=Bungee Shade');
                    fontArr = ['Bungee', 'Bungee Outline', 'Bungee Shade'];
                    
                    $('.wrapper div').css({ 'background': 'blue', 'color': 'white', 'font-family': fontArr[Math.floor(Math.random() * 3)]});
                    $('.wrapper div').toggleClass('rotate');
                    level.html('8');
                    sum = Number(totalScore.html());
                    sum2 = Number(currentScore.html());
                    totalScore.html(sum + sum2);
                    var count = 8,
                        cScore = 0;
                    t = setInterval(function() {
                        timer.html(count);
                        currentScore.html(cScore);
                        count--;
                        cScore++;

                        if (count < -1) {
                            clearInterval(t);
                            alert('Out of time! Back to level 1!');
                            level.html('1');
                            timer.html('unlimited');
                            totalScore.html('0');
                            currentScore.html('0');
                            levelFunc();
                        }


                    }, 1000);
                    levelFunc();
                }, 3000);

                $('.wrapper div').toggleClass('rotate');
            }

        } else if (level.html() == '8') {
            clearInterval(t);
            timer.html('re-calculating...');
            if (this.innerHTML == result.html()) {

                $(this).css({ 'background': 'Chartreuse', 'color': 'red' });
                setTimeout(function() {
                    font1.attr('href', 'https://fonts.googleapis.com/css?family=Butcherman');
                    font2.attr('href', 'https://fonts.googleapis.com/css?family=Cabin Sketch');
                    font3.attr('href', 'https://fonts.googleapis.com/css?family=Caesar Dressing');
                    fontArr = ['Butcherman', 'Cabin Sketch', 'Caesar Dressing'];
                    
                    $('.wrapper div').css({ 'background': 'blue', 'color': 'white', 'font-family': fontArr[Math.floor(Math.random() * 3)]});
                    $('.wrapper div').toggleClass('rotate');
                    level.html('9');
                    sum = Number(totalScore.html());
                    sum2 = Number(currentScore.html());
                    totalScore.html(sum + sum2);
                    var count = 7,
                        cScore = 0;
                    t = setInterval(function() {
                        timer.html(count);
                        currentScore.html(cScore);
                        count--;
                        cScore++;

                        if (count < -1) {
                            clearInterval(t);
                            alert('Out of time! Back to level 1!');
                            level.html('1');
                            timer.html('unlimited');
                            totalScore.html('0');
                            currentScore.html('0');
                            levelFunc();
                        }


                    }, 1000);
                    levelFunc();
                }, 3000);

                $('.wrapper div').toggleClass('rotate');
            }

        } else if (level.html() == '9') {
            clearInterval(t);
            timer.html('re-calculating...');
            if (this.innerHTML == result.html()) {

                $(this).css({ 'background': 'Chartreuse', 'color': 'red' });
                setTimeout(function() {
                    font1.attr('href', 'https://fonts.googleapis.com/css?family=Chathura');
                    font2.attr('href', 'https://fonts.googleapis.com/css?family=Codystar');
                    font3.attr('href', 'https://fonts.googleapis.com/css?family=Dr Sugiyama');
                    fontArr = ['Chathura', 'Codystar', 'Dr Sugiyama'];
                    
                    $('.wrapper div').css({ 'background': 'blue', 'color': 'white', 'font-family': fontArr[Math.floor(Math.random() * 3)]});
                    $('.wrapper div').toggleClass('rotate');
                    level.html('10');
                    sum = Number(totalScore.html());
                    sum2 = Number(currentScore.html());
                    totalScore.html(sum + sum2);
                    var count = 6,
                        cScore = 0;
                    t = setInterval(function() {
                        timer.html(count);
                        currentScore.html(cScore);
                        count--;
                        cScore++;

                        if (count < -1) {
                            clearInterval(t);
                            alert('Out of time! Back to level 1!');
                            level.html('1');
                            timer.html('unlimited');
                            totalScore.html('0');
                            currentScore.html('0');
                            levelFunc();
                        }


                    }, 1000);
                    levelFunc();
                }, 3000);

                $('.wrapper div').toggleClass('rotate');
            }

        } else if (level.html() == '10') {
            clearInterval(t);
            timer.html('re-calculating...');
            if (this.innerHTML == result.html()) {

                $(this).css({ 'background': 'Chartreuse', 'color': 'red' });
                setTimeout(function() {
                    font1.attr('href', 'https://fonts.googleapis.com/css?family=Ewert');
                    font2.attr('href', 'https://fonts.googleapis.com/css?family=Fascinate');
                    font3.attr('href', 'https://fonts.googleapis.com/css?family=Faster One');
                    fontArr = ['Ewert', 'Fascinate', 'Faster One'];
                    
                    $('.wrapper div').css({ 'background': 'blue', 'color': 'white', 'font-family': fontArr[Math.floor(Math.random() * 3)]});
                    $('.wrapper div').toggleClass('rotate');
                    level.html('11');
                    sum = Number(totalScore.html());
                    sum2 = Number(currentScore.html());
                    totalScore.html(sum + sum2);
                    var count = 5,
                        cScore = 0;
                    t = setInterval(function() {
                        timer.html(count);
                        currentScore.html(cScore);
                        count--;
                        cScore++;

                        if (count < -1) {
                            clearInterval(t);
                            alert('Out of time! Back to level 1!');
                            level.html('1');
                            timer.html('unlimited');
                            totalScore.html('0');
                            currentScore.html('0');
                            levelFunc();
                        }


                    }, 1000);
                    levelFunc();
                }, 3000);

                $('.wrapper div').toggleClass('rotate');
            }

        } else if (level.html() == '11') {
            clearInterval(t);
            timer.html('re-calculating...');
            if (this.innerHTML == result.html()) {

                $(this).css({ 'background': 'Chartreuse', 'color': 'red' });
                setTimeout(function() {
                    font1.attr('href', 'https://fonts.googleapis.com/css?family=Fredericka the Great');
                    font2.attr('href', 'https://fonts.googleapis.com/css?family=Geostar');
                    font3.attr('href', 'https://fonts.googleapis.com/css?family=Give You Glory');
                    fontArr = ['Fredericka the Great', 'Geostar', 'Give You Glory'];
                    
                    $('.wrapper div').css({ 'background': 'blue', 'color': 'white', 'font-family': fontArr[Math.floor(Math.random() * 3)]});
                    $('.wrapper div').toggleClass('rotate');
                    level.html('12');
                    sum = Number(totalScore.html());
                    sum2 = Number(currentScore.html());
                    totalScore.html(sum + sum2);
                    var count = 4,
                        cScore = 0;
                    t = setInterval(function() {
                        timer.html(count);
                        currentScore.html(cScore);
                        count--;
                        cScore++;

                        if (count < -1) {
                            clearInterval(t);
                            alert('Out of time! Back to level 1!');
                            level.html('1');
                            timer.html('unlimited');
                            totalScore.html('0');
                            currentScore.html('0');
                            levelFunc();
                        }


                    }, 1000);
                    levelFunc();
                }, 3000);

                $('.wrapper div').toggleClass('rotate');
            }

        } else if (level.html() == '12') {
            clearInterval(t);
            timer.html('re-calculating...');
            if (this.innerHTML == result.html()) {

                $(this).css({ 'background': 'Chartreuse', 'color': 'red' });
                setTimeout(function() {
                    font1.attr('href', 'https://fonts.googleapis.com/css?family=Hanalei');
                    font2.attr('href', 'https://fonts.googleapis.com/css?family=Herr Von Muellerhoff');
                    font3.attr('href', 'https://fonts.googleapis.com/css?family=League Script');
                    fontArr = ['Hanalei', 'Herr Von Muellerhoff', 'League Script'];
                    
                    $('.wrapper div').css({ 'background': 'blue', 'color': 'white', 'font-family': fontArr[Math.floor(Math.random() * 3)]});
                    $('.wrapper div').toggleClass('rotate');
                    level.html('Final Stage!');
                    sum = Number(totalScore.html());
                    sum2 = Number(currentScore.html());
                    totalScore.html(sum + sum2);
                    var count = 3,
                        cScore = 0;
                    t = setInterval(function() {
                        timer.html(count);
                        currentScore.html(cScore);
                        count--;
                        cScore++;

                        if (count < -1) {
                            clearInterval(t);
                            alert('Out of time! Back to level 1!');
                            level.html('1');
                            timer.html('unlimited');
                            totalScore.html('0');
                            currentScore.html('0');
                            levelFunc();
                        }


                    }, 1000);
                    levelFunc();
                }, 3000);

                $('.wrapper div').toggleClass('rotate');
            }

        } else if (level.html() == 'Final Stage!') {
            clearInterval(t);
            if (this.innerHTML == result.html()) {

                $(this).css({ 'background': 'Chartreuse', 'color': 'red' });
                setTimeout(function() {
                    $('.wrapper div').css({ 'background': 'blue', 'color': 'white' });
                    $('.wrapper div').toggleClass('rotate');
                    level.html('Game Complete!');
                    result.html('Nothing else to find!');
                    timer.html('You\'ve beated the time!');

                }, 3000);

                $('.wrapper div').toggleClass('rotate');
            }

        }


    });


    // Made completely by Dennis Ilyaev.

});
