function addNewStudent(){

    let newusername = document.querySelector("#userName").value;
    let newpassword = document.querySelector("#pass").value;

        if(newusername=="" ||  newpassword=="")
        {
            alert("Incompete credentials");
            document.getElementById("password").value="";
            document.querySelector("#name").value="";
        }
        
        else if( whois === "student")
        {
            let signUpObj = {
                username: usernameData,
                email: emailData,
                password: passwordData
            };
            
            class User {
                #password;
                constructor(username,password){
                    this.organization = 'Masai';
                    this.username = username;
                    this.#password = password;
                }
            
                validateUsername(username){
                    let value = username.includes("@") ? false : true;
                    return value;
                }
            
                validatePassword(password){
                    let value = password.includes('123') ? false : true;
                    return value;
                }
            
                signUp(username, password){
                    let isValidated = false;
                    isValidated = this.validateUsername(username) && this.validatePassword(password);
            
                    if(isValidated){
                        this.username = username;
                        this.#password = password;
            
                        console.log('User registered successfully');
                        alert("User registered successfully");

                        personInformationData.push(signUpObj);
                        localStorage.setItem("personPassword", JSON.stringify(passwordData));
                        localStorage.setItem("personUsername", usernameData);
                        localStorage.setItem("personInformation", JSON.stringify(personInformationData));  
        
                        document.getElementById("email").value="";
                        document.getElementById("pass").value="";
                        document.querySelector("#userName").value="";          
                        //console.log(personInformationData.length);
    
                         window.location.href="login.html";

                    }else{
                        console.log('please enter correct details');
                        alert("please enter correct details");
        
                        document.getElementById("email").value="";
                        document.getElementById("pass").value="";
                        document.querySelector("#userName").value="";
                    }
                }
            }
            
            let u1 = new User();
            u1.signUp(newusername, newpassword);
}
}