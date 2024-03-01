
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
        case "teams" :{
            if(!form.teams) setErrors({...errors, teams:"Enter Teams!"})
            else{
                setErrors({...errors,teams:""})
           }
        };
        break;
        case "dob":{
            if(!form.dob) setErrors({...errors, dob: "Enter valid date!"})
            else setErrors({...errors,dob:""})
        }
        break;
        case "nationality" :{
            if(!form.nationality) setErrors({...errors, nationality:"Enter nationality!"})
            else setErrors({...errors,nationality:""})
        }


    }
};



export default validates