function voterIdValidation (voterId) {
    
    if(!voterId){
        return false
    } 

    let pattern = /^[a-zA-Z]+$/ig;
    let result = pattern.test(voterId);

    if(!result){
        return false
    }

    return true
   
}

module.exports = voterIdValidation