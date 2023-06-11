import fetch  from "node-fetch";

 function getTodo(){
    const data = new Promise((resolve,reject) => {
        resolve(fetch("https://jsonplaceholder.typicode.com/posts"));
        reject((error) => {
            console.log("error",error);
        });
    });
    data
        .then((res) => res.json())
        .then(data => {
            data.forEach(function (element) {
                element.image = "https://tse1.mm.bing.net/th?id=OIP.NbfPECA64xbFnmW58MbWDQHaEo&pid=Api&P=0&h=180";
              })
              console.log("data",data)
        })
 }


 getTodo();