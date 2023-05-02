function emailValidation(email){
    if(!email){
        return false
    }

    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ig;
    let result = pattern.test(email);

    if(!result){
        return false
    }


    return true

}

module.exports  = emailValidation