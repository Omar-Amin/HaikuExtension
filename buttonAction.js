(function(){
  //alert("Hola!");
  document.getElementsByTagName('button')[14].click();

  //We get the data from top haiku
  //The data is written in json
  //Only visible in console (Look for 'Object')
  async function fetchTopFive() {
  const URL = `https://www.reddit.com/r/youtubehaiku/top/.json?limit=5`; // Will return a 404
  const fetchResult = fetch(URL)
  const response = await fetchResult;
  if (response.ok) {
    const jsonData = await response.json();
    console.log(jsonData);
    } else {
      throw Error(response.statusText);
    }
  }

fetchTopFive();
})();
