let resultdiv = document.getElementById("result")
let player_count_div = document.getElementById("players")
let player_name_div = document.getElementById("names")

function get_player_count() {
    return Number(player_count_div.textContent)
}
function getnames() {
    text = player_name_div.value
    // console.log(text);
    return text.split(/\r?\n/)
}
// console.log(getnames());


class Contestant {
    constructor(name,list) {
        this.name = name
        this.posible = list
    }
}
