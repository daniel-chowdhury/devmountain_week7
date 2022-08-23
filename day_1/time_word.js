function convert(num) {
    let nums = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']

let higher_nums = ['twenty', 'thirty', 'forty', 'fifty']
    let output = ''
    if (num > 20) {
        let right_digit = num%10
        let left_digit = (num - right_digit)/10
        output = `${higher_nums[left_digit - 2]} ${nums[right_digit - 1]}`
    } else if (num === 0) {
        output = ''
    } else {
        output = nums[num - 1]
    }

    return output
}


function time_words(string) {
    if (string === '00:00') {
        return 'midnight'
    } else if (string === '12:00') {
        return 'noon'
    }
    string_arr = string.split(':')
    let ampm = ''
    let hour = Number(string_arr[0])
    if (hour > 12) {
        ampm = 'pm'
        hour = hour - 12
    } else {
        ampm = 'am'
    }
    let minute = Number(string_arr[1])
    let hour_string = convert(hour)
    let minute_string = convert(minute)
    
    
    return `${hour_string} ${minute_string} ${ampm}`
}

console.log(time_words('23:30'))