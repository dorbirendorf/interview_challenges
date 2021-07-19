const palindrome = str => {

    str = str.toLowerCase()
    return str === str.split('').reverse().join('')
  }

  console.log(palindrome('fsdfsdfds'))

  console.log(palindrome('lkabbbakl'))