//make sure module is installed through
//npm install bcryptjs --save
//needs to be in the package.json on github
//only way for azure to run it
const bcrypt = require('bcryptjs');

//bcrypt hashing algorithm before further
//server side hashing
function hash(pass){
    const saltRounds = 10;
    return bcrypt.hashSync(pass,saltRounds);
}

//universal request options
//for all requests made
requestOptions = {
    method: 'POST',
    credentials: 'include',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${btoa('s2500339' + ':' + 's2500339')}` 
    },
    body: params  
}

//function to send a registration request as a funding manager
//response code 0 for success
//errors will be indicated with text explanations
export async function registerManager(name, surname, email, password, company){
    const postData = {
        first_name: name,
        surname: surname,
        email_address: email,
        password: hash(password),
        company: company
    }

    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(postData)){
        params.append(key, value);
    }

    const req = await fetch('https://lamp.ms.wits.ac.za/home/s2500339/registerManager.php', requestOptions);
    const response = req.text();
    console.log('Response:', response);
    return response;
}

//function to send a registration request as an applicant
//response code 0 for success
//errors will be indicated with text explanations
export async function registerApplicant(name, surname, email, password){
    const postData = {
        first_name: name,
        surname: surname,
        email_address: email,
        password: hash(password)
    }

    const params = new URLSearchParams();
    for (const [key,value] of Object.entries(postData)){
        params.append(key, value);
    }

    const req = await fetch('https://lamp.ms.wits.ac.za/home/s2500339/registerApplicant.php', requestOptions);
    const response = req.text();
    console.log('Response:', response);
    return response;
}

//important to specify 'admin', 'fund_managers', or 'applicants' here
//tells server what table to use
//sends request to authenticate user
//response code 0 for success
//errors will be indicated with text explanations
export async function login(email, password, user){
    const postData = {
        email_address: email,
        password: hash(password),
        user: user        
    }

    const params = new URLSearchParams();
    for (const [key,value] of Object.entries(postData)){
        params.append(key, value);
    }

    const req = await fetch('https://lamp.ms.wits.ac.za/home/s2500339/login.php', requestOptions);   
    const response = req.text();
    console.log('Response:', response);
    return response;
}