//Id,Start time,Completion time,Email,Name,Name1,Upload,Year,Category,Description,Colour,Rating
//0..1..........2...............3....4.....5.....6..... 7....8........9...........10.....11....
var table;
var tableMultiArray;
var entries = [];
var imgLinks = [];
var preloadedImgs = [];
var preparedImgs = [];

var img;

function preload() {
  table = loadTable('csv/test007.csv', 'csv', 'header', table => 
  {
    tableMultiArray = table.getArray();

    for (let row = 0; row < tableMultiArray[0].length; row++)
    {
      entries[row] = tableMultiArray[row];
      if(entries[row] != null){
        imgLinks[row] = entries[row][6];

        print("IMAGE NUMBER : " + row + " SOURCE:" + imgLinks[row]);
                                // /preloadedImgs[row] = loadImage(imgLinks[row]);
        // HACK these 2 lines helps with CORS
        //preloadedImgs[row] = new p5.Image(1000,1000); 
       // preloadedImgs[row].srcy = imgLinks[row];
        preloadedImgs[row]= loadImage(imgLinks[row], success, fail);
      }
    }
  }); 
}

function success(){
  print("success");
}

function fail(){
  print("fail");
}

function setup() {
  //displayImages(imgLinks);

  createCanvas(1280, 800);
  background(153);

  print("TYPE: " + typeof(preloadedImgs[0]))
  print("SOURCE: " + preloadedImgs[0].srcy)
  print("WIDTH: " + preloadedImgs[0].width)
  //preloadedImgs[0].Save("photo.jpg");

  //let preparedImg = createImg(imgLinks[i], entries[9]);
}

function draw() {
    ellipse(50,50,80,80);
    text(entries[0][8], 50, 50)
    let width = 1000;
    let height = 1000;
    let img = preloadedImgs[0];

    image(img, 0, 0, width, height, 0, 0, img.width, img.height, CONTAIN);

}

function displayImages(imgLinks){
    for(let i = 0; i < imgLinks.length; i++){
      preparedImg = createImg(imgLinks[i], entries[9]);
      preparedImgs[4] = preparedImg;
    }
}

//, [crossOrigin],



//["Goat", "Leopard", "Zebra"]

//cycle through the table
//for (let r = 0; r < table.getRowCount(); r++)
//  for (let c = 0; c < table.getColumnCount(); c++) {
//    print(table.getString(r, c));
///  }
//describe(`randomly generated text from a file,
//  for example "i smell like butter"`);
//count the columns
//  print(table.getRowCount() + ' total rows in table');
//  print(table.getColumnCount() + ' total columns in table');

//  print(table.getColumn('name'));


//console.log(tableMultiArray[0],[5]);
//console.log(nameColumnIndex);
//console.log(typeof(table.getColumn("Name1")));

//console.log(test);
//console.log(table.getColumn('Name1')[1]);
//console.log(typeof(table));
