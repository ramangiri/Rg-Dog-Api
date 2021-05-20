
//Get funtion
function GET() {
    var apiurl = "https://dog.ceo/api/breeds/image/random"; //dog api
    var img = document.getElementById("dog-img"); 
    fetch(apiurl)
      .then((res) => res.json())
      .then((data) => {
        img.src = data.message; //to get image of dog
      });
  }
