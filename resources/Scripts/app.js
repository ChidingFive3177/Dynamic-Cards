function getCountries() {
    let country = new XMLHttpRequest();
    country.open('GET', "https://restcountries.com/v2/all");
    country.onload = function() {
      if (country.status == 200) {
        let countiresParsed = JSON.parse(country.response);
        countiresParsed.map(res => {
            createListItems(res.name, res.flag, res.languages);
        })
      } else {
        console.log("File not Found");
      }
    };
    country.send();
}

function createListItems(name, flag, languages){
    const mainContainer = document.getElementsByClassName('main-container');

        const li = document.createElement('li');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        let arr = [];

        li.className = "country";
        
        img.src = flag;
        img.alt = name + " flag";

        h3.innerHTML = name;
        
        for(let i = 0 ; i < languages.length ; i++){
            arr.push(" " + languages[i].name)
        }
        p.innerHTML = arr;


        li.append(img);
        li.append(h3);
        li.append(p);

        mainContainer[0].append(li)
        
}

getCountries();