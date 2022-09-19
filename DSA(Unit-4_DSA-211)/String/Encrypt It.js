// Description
// Encryption is the process of converting a plaintext message into ciphertext which can be decoded back into the original message. An encryption algorithm along with a key is used in the encryption and decryption of data. There are several types of data encryptions which form the basis of network security. Encryption schemes are based on block or stream ciphers.
// Today, your task is to encrypt and print the encrypted string. You will be given a single line which contains alphabets, numbers and symbols, followed by a number K. You need to encrypt it in a way such that every character in the string is rotated by the given fixed number K.
// Only encrypt Alphabets and Numbers. (A-Z, a-z, and 0-9) . All Symbols, such as - , ; %, should remain unencrypted.

let str = "All-convoYs-9-be:Alert1.4";

function encryptIt(str,k){
    
    let capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let small = "abcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let temp = "";
    
    
    for(let i=0; i<str.length; i++)
    {
        
        if(capital.includes(str[i]))
        {
            let index1 = capital.indexOf(str[i]);
            var cIndex = index1+k;
            
            if(cIndex > 25){
                cIndex = cIndex % 26;
            }
            str[i] = capital[cIndex];
        }
        
        
        if(small.includes(str[i]))
        {
            let index2 = small.indexOf(str[i]);
            var sIndex = index2+k;

            if(sIndex > 25){
                sIndex = sIndex % 26;
            }
            str[i] = small[sIndex];
        }
        
        
        if(num.includes(str[i]))
        {
            let index3 = num.indexOf(str[i]);
            var nIndex = index3+k;
            
            if(nIndex > 9){
                nIndex = nIndex % 10;
            }
            str[i] = num[nIndex];
        }
        
        temp += str[i];
    }
    console.log(temp);
}

function runProgram(input){
    //Input Taking Here
    input = input.trim().split("\n");
    var str = input[0].trim().split("");
    var k = +input[1];
    
    encryptIt(str,k);
}


if(process.env.USER===""){
    runProgram('');
}else{
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read="";
    process.stdin.on("data",function(input){
        read+=input;
    });
    process.stdin.on("end",function(){
        read=read.replace(/\n$/,"");
        read=read.replace(/\n$/,'');
        runProgram(read);
    });
    process.on('SIGINT',function(){
        read=read.replace(/\n$/,"");
        runProgram(read);
        process.exit(0);
    });
}
