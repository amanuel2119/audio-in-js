const trackName =[
    {name:"track1", track:"https://file-examples.com/storage/fe7bb0e37864d66f29c40ee/2017/11/file_example_MP3_700KB.mp3"}
    
    {name:"track2", track:"https://samples-files.com/samples/Audio/mp3/sample-file-1.mp3"}

]
const track = document.getElementById("track");
const myTable = document.querySelector("#myTable");

for (let index = 0; index < trackName.length; index++) {
    const element = trackName[index];

    const tr = document.createElement("tr");
    const nameTd = document.createElement("td");

    nameTd.innerHTML = element.name;
     const trackTd = document.createElement("td");

     trackTd.innerHTML = element.track;
     
     tr.appendChild(nameTd);
     tr.appendChild(trackTd);

    myTable.appendChild(tr);
    
}
