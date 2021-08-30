const inputUrl = document.getElementById('input-img-url');
const displayImage= document.getElementById('display-meme-img');
// Dom declared for upload from local
const imgUpload= document.getElementById('img-upload');

// Dom From top text Input

const topTextInput= document.getElementById('top-text-input')
const topText= document.getElementById('top-text')

// Function for Top Text Input
function topTextInputFunction(value){
    // document.getElementById('meme').innerHTML=`<h3 class="top-text" id="top-text">${value}</h3>`
    topText.innerText=value;
}
// Function for bottom Text Input
const bottomTextInput= document.getElementById('bottom-text-input');
const bottomText= document.getElementById('bottom-text');

function bottomTextInputFunction(value){
    bottomText.innerText=value;
}

// Function for input URL
function inputUrlFunction(link){
    displayImage.setAttribute("src", link );
}

// Function to upload image from local disk #pending for now
function uploadfromlocalFunction(file){
    console.log(file)
    displayImage.setAttribute("src", file );
    console.log(displayImage.scr);
}

// Dom For the font Size
function topTextSizeFn(value){
    // console.log(value);
    topText.style.fontSize=`${value}px`;
}

function bottomTextSizeFn(value){
    bottomText.style.fontSize=`${value}px`;

}
// color Change function

function changecolorfn(value){
    topText.style.color=value;
}

// Define the function 
// to screenshot the div
function takeshot() {
    event.preventDefault()
    let div =document.querySelector('#img-parent')
    console.log("function call")

    // Use the html2canvas
    // function to take a screenshot
    // and append it
    // to the output div
    html2canvas(div).then(
        function (canvas) {
            document
            .getElementById('output')
            // .appendChild(canvas)
            var img = canvas.toDataURL('image/png');
            var link = document.createElement("a");
            link.download = 'Meme-Img';
            link.href = img;
            link.click();
            console.log("Done Shot")
        })
}
