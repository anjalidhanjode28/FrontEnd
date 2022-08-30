let users = [
    { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
    { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
    { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
  ];

  let nam = users.map(function(ele){
    if(ele.place=="Banglore"){
        return (ele.firstName + " "+ele.lastName)
    }
  })

  let x = nam.filter(function(ele){
    return ele!=undefined;
  })

  console.log(x);