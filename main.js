$(document).ready(function() {


    var Module = (function() {

        var arr = $('.wrapper').children(),
            result = $('#result span'),
            level = $('#level span'),
            timer = $('#timer span'),
            currentScore = $('#score span'),
            totalScore = $('#total span'),
            record = $('#record span'),
            boxIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // We'll shuffle those indexes on line 24.
            font1 = $('#font1'),
            font2 = $('#font2'),
            font3 = $('#font3'),
            fontArr, // Will dynamically be changed each level and will contain 3 different fonts that will be randomly chosen.
            sum, // sum and sum2 will be combined "total score" + "current score" for each level after they're switched to type of Number.
            sum2,
            name, // Will hold the string value of the new top record player's name.
            finish, // Holds the total score value after finishing the game.
            j = record.html(), // Top record string.
            t, // will be our interval function
            randomIndex = shuffle(boxIndex),
            k = Number(j.replace(/[^0-9]/g, '')); // Gets only the number in the "Top record" string and turns it into a Number type.


        function updateRecord(id, x) {
            var xr = new XMLHttpRequest();
            var url = x;
            var text = document.getElementById(id).innerHTML;
            var vars = "newText=" + text;

            xr.open("POST", url, true);
            xr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xr.send(vars);
        }

        function shuffle(arr) {
            for (var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
            return arr;
        }

        function setDifficulty(difficulty, index) {
            for (var i = 0, len = arr.length; i < len; i++) {
                arr[i].innerHTML = Math.floor((Math.random() * difficulty) + 1);
                result.html(arr[randomIndex[index]].innerHTML);
            }
        }

        function levelFunc() {
            switch (level.html()) {
                case '1':
                    setDifficulty(150, 0);
                    break;
                case '2':
                    setDifficulty(300, 1);
                    break;
                case '3':
                    setDifficulty(450, 2);
                    break;
                case '4':
                    setDifficulty(1650, 3);
                    break;
                case '5':
                    setDifficulty(3450, 4);
                    break;
                case '6':
                    setDifficulty(6400, 5);
                    break;
                case '7':
                    setDifficulty(14000, 6);
                    break;
                case '8':
                    setDifficulty(17000, 7);
                    break;
                case '9':
                    setDifficulty(20000, 8);
                    break;
                case '10':
                    setDifficulty(100000, 9);
                    break;
                case '11':
                    setDifficulty(500000, 10);
                    break;
                case '12':
                    setDifficulty(1000000, 11);
                    break;
            }
        }

        function reset() {
            $('.wrapper div').css({
                'background': 'blue',
                'color': 'white',
                'font-family': fontArr[Math.floor(Math.random() * 3)]
            });

            clearInterval(t);
            if (timer.html() < 0) {
                alert('Out of time!');
            } else {
                alert('Wrong answer!');
            }
            $('.wrapper div').css({
                'font-family': 'serif'
            });
            level.html('1');
            timer.html('unlimited');
            totalScore.html('0');
            currentScore.html('0');
            levelFunc();
        }

        function complete(result) {
            if (result) {
                clearInterval(t);
                finish = totalScore.html();
                $('.wrapper div').toggleClass('rotate');

                if (Number(finish) < k) {
                    name = prompt('New Record!!! Please fill your name below!');
                    setTimeout(function() {

                        record.html(name + ', ' + 'finished in ' + finish + ' seconds!');
                        $(record).attr('contenteditable', 'true');
                        record.focus();
                        record.blur();
                        $(record).attr('contenteditable', 'false');

                    }, 2000);

                }

            }
        }

        function levelChange(result, url1, url2, url3, nameArr, nextLevel, time) {
            if (result) {
                clearInterval(t);
                timer.html('re-calculating...');
                setTimeout(function() {
                    font1.attr('href', url1);
                    font2.attr('href', url2);
                    font3.attr('href', url3);
                    fontArr = nameArr;

                    $('.wrapper div').css({
                        'background': 'blue',
                        'color': 'white',
                        'font-family': fontArr[Math.floor(Math.random() * 3)]
                    });
                    $('.wrapper div').toggleClass('rotate');

                    level.html(nextLevel);
                    sum = Number(totalScore.html());
                    sum2 = Number(currentScore.html());
                    totalScore.html(sum + sum2);
                    var count = time,
                        cScore = 0;
                    t = setInterval(function() {
                        timer.html(count);
                        currentScore.html(cScore);
                        count--;
                        cScore++;

                        if (timer.html() < 0) {
                            reset();
                        }


                    }, 1000);
                    levelFunc();
                }, 3000);

                $('.wrapper div').toggleClass('rotate');


            } else if (!result) {
                reset();
            }
        }

        function successColor() {
            if (this.innerHTML == result.html()) {
                $(this).css({
                    'background': 'Chartreuse',
                    'color': 'red'
                });
            }
        }

        record.blur(function() {
            updateRecord('topRecord', 'saveNewText.php');

        });



        // Public API

        return {
            levelFunc: levelFunc,
            level: level,
            timer: timer,
            levelChange: levelChange,
            successColor: successColor,
            result: result,
            complete: complete
        };




    }());




    $('.wrapper div').toggleClass('rotate');

    // Initializing the game.
    Module.levelFunc();


    $('.wrapper div').on('click', function() {
        $(this).addClass('rotate');

        switch (Module.level.html()) {
            case '1':
                Module.levelChange(this.innerHTML == Module.result.html(), 'https://fonts.googleapis.com/css?family=Rock Salt', 'https://fonts.googleapis.com/css?family=Vast Shadow', 'https://fonts.googleapis.com/css?family=Yeseva One', ['Rock Salt', 'Vast Shadow', 'Yeseva One'], 2, 20);
                Module.successColor.call(this);
                break;
            case '2':
                Module.levelChange(this.innerHTML == Module.result.html(), 'https://fonts.googleapis.com/css?family=Monofett', 'https://fonts.googleapis.com/css?family=Nosifer', 'https://fonts.googleapis.com/css?family=Over the Rainbow', ['Monofett', 'Nosifer', 'Over the Rainbow'], 3, 18);
                Module.successColor.call(this);

                break;
            case '3':
                Module.levelChange(this.innerHTML == Module.result.html(), 'https://fonts.googleapis.com/css?family=Armata', 'https://fonts.googleapis.com/css?family=Black Ops One', 'https://fonts.googleapis.com/css?family=Aladin', ['Armata', 'Black Ops One', 'Aladin'], 4, 15);
                Module.successColor.call(this);

                break;
            case '4':
                Module.levelChange(this.innerHTML == Module.result.html(), 'https://fonts.googleapis.com/css?family=Alex Brush', 'https://fonts.googleapis.com/css?family=Allerta Stencil', 'https://fonts.googleapis.com/css?family=Amatic SC', ['Alex Brush', 'Allerta Stencil', 'Amatic SC'], 5, 13);
                Module.successColor.call(this);

                break;
            case '5':
                Module.levelChange(this.innerHTML == Module.result.html(), 'https://fonts.googleapis.com/css?family=Annie Use Your Telescope', 'https://fonts.googleapis.com/css?family=Arizonia', 'https://fonts.googleapis.com/css?family=Astloch', ['Annie Use Your Telescope', 'Arizonia', 'Astloch'], 6, 12);
                Module.successColor.call(this);

                break;
            case '6':
                Module.levelChange(this.innerHTML == Module.result.html(), 'https://fonts.googleapis.com/css?family=Atomic Age', 'https://fonts.googleapis.com/css?family=Barrio', 'https://fonts.googleapis.com/css?family=Bonbon', ['Atomic Age', 'Barrio', 'Bonbon'], 7, 9);
                Module.successColor.call(this);

                break;
            case '7':
                Module.levelChange(this.innerHTML == Module.result.html(), 'https://fonts.googleapis.com/css?family=Bungee', 'https://fonts.googleapis.com/css?family=Bungee Outline', 'https://fonts.googleapis.com/css?family=Bungee Shade', ['Bungee', 'Bungee Outline', 'Bungee Shade'], 8, 8);
                Module.successColor.call(this);

                break;
            case '8':
                Module.levelChange(this.innerHTML == Module.result.html(), 'https://fonts.googleapis.com/css?family=Butcherman', 'https://fonts.googleapis.com/css?family=Cabin Sketch', 'https://fonts.googleapis.com/css?family=Caesar Dressing', ['Butcherman', 'Cabin Sketch', 'Caesar Dressing'], 9, 7);
                Module.successColor.call(this);

                break;
            case '9':
                Module.levelChange(this.innerHTML == Module.result.html(), 'https://fonts.googleapis.com/css?family=Chathura', 'https://fonts.googleapis.com/css?family=Codystar', 'https://fonts.googleapis.com/css?family=Dr Sugiyama', ['Chathura', 'Codystar', 'Dr Sugiyama'], 10, 6);
                Module.successColor.call(this);

                break;
            case '10':
                Module.levelChange(this.innerHTML == Module.result.html(), 'https://fonts.googleapis.com/css?family=Ewert', 'https://fonts.googleapis.com/css?family=Fascinate', 'https://fonts.googleapis.com/css?family=Faster One', ['Ewert', 'Fascinate', 'Faster One'], 11, 5);
                Module.successColor.call(this);

                break;
            case '11':
                Module.levelChange(this.innerHTML == Module.result.html(), 'https://fonts.googleapis.com/css?family=Fredericka the Great', 'https://fonts.googleapis.com/css?family=Geostar', 'https://fonts.googleapis.com/css?family=Give You Glory', ['Fredericka the Great', 'Geostar', 'Give You Glory'], 12, 4);
                Module.successColor.call(this);

                break;
            case '12':
                Module.levelChange(this.innerHTML == Module.result.html(), 'https://fonts.googleapis.com/css?family=Hanalei', 'https://fonts.googleapis.com/css?family=Herr Von Muellerhoff', 'https://fonts.googleapis.com/css?family=League Script', ['Hanalei', 'Herr Von Muellerhoff', 'League Script'], 'Final Stage!', 3);
                Module.successColor.call(this);

                break;
            case 'Final Stage!':
                Module.complete(this.innerHTML == Module.result.html());
                Module.successColor.call(this);
                $('.wrapper div').toggleClass('rotate');
                Module.level.html('Game Complete!');
                Module.result.html('Nothing else to find!');
                Module.timer.html('You\'ve beated the time!');
                break;
        }


    });



    // Made & rebuilt completely by Dennis Ilyaev.

});
