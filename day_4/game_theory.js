function canWin(number_of_stones) {      
    let losenums = [0, 1]  
    let options = [2, 3, 5]  

    function check_win(number, whose_turn) {
        if (whose_turn === 'opponents') {
            whose_turn = 'mine'  
        } else if (whose_turn === 'mine') {
            whose_turn = 'opponents' 
        }
        for (let i = 0; i < options.length; i++) {
            let next_number = number - options[i]
            if (next_number < 0) {                
                if (whose_turn === 'mine') {
                    if (!losenums.includes(number)) {
                        return 'I will win'
                    } else {
                        return 'I will lose'
                    } 
                } else if (whose_turn === 'opponents') {
                    if (!losenums.includes(number)) {
                        return 'I will lose'
                    } else {
                        return 'I will win'
                    }
                }
            }

            let win_status = check_win(next_number, whose_turn)  

            if (whose_turn === 'mine' && win_status === 'I will win') {
                return 'I will win'
            } else if (whose_turn === 'opponents' && win_status === 'I will lose') {
                return 'I will lose'
            }
        }
        if (whose_turn === 'mine') {   
            return 'I will lose'
        } else if (whose_turn === 'opponents') {
            return 'I will win'
        }
    }

    let final_win_status = check_win(number_of_stones, 'opponents')
    return final_win_status === 'I will win'
}

for (let i = 0; i < 40; i++) {   // for pattern recognition
    console.log(canWin(i))
}
function can_win_alt(number_of_stones) {    // based on pattern       
    return number_of_stones%7 >= 2
}



