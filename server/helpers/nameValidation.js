function nameValidation (name) {
    
    if(!name){
        return false
    } 

    let pattern = /^[a-zA-Z]+$/ig;
    let result = pattern.test(name);

    if(!result){
        return false
    }

    return true
   
}

module.exports = nameValidation