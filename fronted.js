const response =await fetch('https://api.example.com/data',{
    method:'post',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({name:'json',age:30})
});