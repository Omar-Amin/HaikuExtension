(function(){
  //alert("Hola!");
  document.getElementsByTagName('button')[14].click();

  //We get the data from top haiku
  //The data is written in json
  //Only visible in console (Look for 'Object')
  var list = [];

  async function fetchTop() {
  const URL = `https://www.reddit.com/r/youtubehaiku/top/.json?limit=50`;
  try {
    const fetchResult = fetch(new Request(URL, { method: 'GET', cache: 'reload' }));
    const response = await fetchResult;
    if (response.ok) {
      const jsonData = await response.json();
      listOfVids(jsonData);
    } else {
      throw Error(response.statusText);
      }
    } catch (e) {
      console.log(e);
    }
  }

  //Takes each URL and appends it to the list
  function listOfVids(json){
    const posts = json.data.children;
    return posts.map(post => list.push(post.data.url));
  }

  fetchTop();
  console.log(list);

})();
