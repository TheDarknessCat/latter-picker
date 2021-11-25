Katakana = 35;
Hiragana = 56;
Katakana_ok = true;
number = 1;
max_limit = Katakana;
if (Katakana_ok == true) {
    max_limit = Katakana;
    // document.getElementById('Which').innerHTML = "Katakana"
} else {
    max_limit = Hiragana;
    // document.getElementById('Which').innerHTML = "Hiragana"
}

function click_me_decrease() {
    if (number > 0) {
        number--;
        document.getElementById("number").innerHTML = number;
    }
}

function click_me_increase() {
    if (number < max_limit) {
        number++;
        document.getElementById("number").innerHTML = number;
    }
}

function get_random_image() {
    if (Katakana_ok == true) {
        random_index = Math.floor(Math.random() * number) + 1;
        selected_image = `Random (${random_index}).png`;
        document.getElementById(
            "image_shower"
        ).src = `./Katakana/${selected_image}`;
    } else {
        random_index = Math.floor(Math.random() * number) + 1;
        selected_image = `Random (${random_index}).png`;
        document.getElementById(
            "image_shower"
        ).src = `./Hiragana/${selected_image}`;
    }
}
window.addEventListener("keydown", key_check);

function key_check(key) {
    // if (key.keyCode == "8") {

    //     alert("75")
    // }
    // if (key.keyCode == "32") {
    //     alert("32")
    //     get_random_image()
    // }

    if (key.keyCode == "75") {
        if (Katakana_ok == false) {
            if (number > Katakana) {
                max_limit = Katakana;
                number = Katakana;
                document.getElementById("number").innerHTML = number;
            } else {
                max_limit = Katakana;
                document.getElementById("number").innerHTML = number;
            }

            Katakana_ok = !Katakana_ok;
            document.getElementById("Which").innerHTML = "Katakana";
        }
    }
    if (key.keyCode == "72") {
        if (Katakana_ok == true) {
            max_limit = Hiragana;
            number = max_limit;
            document.getElementById("number").innerHTML = number;
            Katakana_ok = !Katakana_ok;
            document.getElementById("Which").innerHTML = "Hiragana";
        }
    }
    if (key.keyCode == "13") {
        get_random_image();
    }
}