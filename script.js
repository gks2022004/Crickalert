async function getMatchData() {


    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=187248d2-e567-4384-8f30-b72b744f36fc&offset=0")
       .then(data => data.json())
       .then(data => {
        if (data.status != "success")return;

        const matchesList = data.data;

        if(!matchesList)return [];
         
         //filter(match =>match.series_id=="54c98d97-de6c-4bac-893f-6ad6e41c9e75")
         // this is used the filter and display,the match series or tournament we want by getting the series_id

        const relevantData = matchesList.map(match => `${match.name}, ${match.status}`);

        console.log({relevantData});

        document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match} </li>`).join('');

        return relevantData;


       })
       .cache(e=> console.log(e));
}

getMatchData();