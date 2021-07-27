const fibonacci = num => {
    
    const result = [0, 1]
  
    for(let i = 2; i <= num; i++) {
      
      const prevNum1 = result[i - 1]
      const prevNum2 = result[i - 2]
      result.push(prevNum1 + prevNum2)
    }
    
    return result[num]
  }

  console.log(fibonacci(11))