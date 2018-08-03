//We get the data from top haiku
//The data is written in json
//Only visible in console (Look for 'Object')
async function fetchTop() {
  //Auto joins the lobby
  document.getElementsByTagName('button')[14].click();

  const URL = "https://www.reddit.com/r/youtubehaiku/top/.json?limit=50";
  try {
    const fetchResult = fetch(new Request(URL, { method: 'GET', cache: 'reload' }));
    const response = await fetchResult;
    if (response.ok) {
      const jsonData = await response.json();
      let list = [];
      listOfVids(jsonData,list);
      insertVids(list);
    } else {
      throw Error(response.statusText);
    }
  } catch (e) {
    console.log(e);
  }
}

//Takes each URL and appends it to the list
function listOfVids(json,list){
  const posts = json.data.children;
  return posts.map(post => list.push(post.data.url));
}

//Inserts the videos to the playlist
function insertVids(list){
  for (let i = 0; i < list.length; i++) {
    document.getElementById('playlistAddInput').value=list[i];
    document.getElementsByTagName('button')[12].click();
  }
}

fetchTop();
