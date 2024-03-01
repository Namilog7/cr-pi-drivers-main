
const validates = (form,errors,setErrors,property) => {
    switch(property){
        case "name":{
            if(!form.name) setErrors({...errors,name:"Enter Name!"});
           else{
               if(/^[a-zA-Z\s]{1,10}$/.test(form.name)) setErrors({...errors,name:""})
               else setErrors({...errors,name:"Check size and only letters!"})
           }
        };
        break;
        case "lastName":{
            if(!form.lastName) setErrors({...errors,lastName:"Enter lastName!"});
            else{
                if(/^[a-zA-Z\s]{1,10}$/.test(form.lastName)) setErrors({...errors,lastName:""})
                else setErrors({...errors,lastName:"Check size and only letters!"})
           }
        };
        break;

    }
}

export default validates