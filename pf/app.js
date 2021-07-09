function futuraFont()
{
document.getElementById('page').style.fontFamily="futura";
}
function timesFont()
{
document.getElementById('page').style.fontFamily="times new roman";
}
function typeFont()
{
document.getElementById('page').style.fontFamily="courier new";
}
function arialFont()
{
document.getElementById('page').style.fontFamily="arial";
}
function showFonts()
{
document.getElementById('fontPicker').style.visibility="visible";
}
function hideFonts()
{
document.getElementById('fontPicker').style.visibility="hidden";
}
function showColors()
{
document.getElementById('colorPicker').style.visibility="visible";
}
function hideColors()
{
document.getElementById('colorPicker').style.visibility="hidden";
}
function redFunction()
{
document.getElementById('page').style.color="red";
}
function blackFunction()
{
document.getElementById('page').style.color="black";
}
function blueFunction()
{
document.getElementById('page').style.color="blue";
}
function purpleFunction()
{
document.getElementById('page').style.color="purple";
}
function defaultFont()
{
document.getElementById('page').style.fontFamily="";
}
function showSave()
{
document.getElementById('saver').style.visibility="visible";
}
function hideSave()
{
document.getElementById('saver').style.visibility="hidden";
}
function showSize()
{
document.getElementById('sizer').style.visibility="visible";
}
function hideSize()
{
document.getElementById('sizer').style.visibility="hidden";
}
function twelvePixel()
{
document.getElementById('page').style.fontSize="12px";
}
function eighteenPixel()
{
document.getElementById('page').style.fontSize="18px";
}
function thirtyPixel()
{
document.getElementById('page').style.fontSize="30px";
}
function showAlign()
{
document.getElementById('aligner').style.visibility="visible";
}
function hideAlign()
{
document.getElementById('aligner').style.visibility="hidden";
}
function alignLeft()
{
document.getElementById('page').style.textAlign="left";
}
function alignCenter()
{
document.getElementById('page').style.textAlign="center";
}
function alignRight()
{
document.getElementById('page').style.textAlign="right";
}
function copyPage() {
  var copyText = document.getElementById("page");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("The document has been copied.");
}  
function deletePage() 
{
location.reload();
alert("All changes will be deleted.");
}
function boldText()
{
document.getElementById('page').style.fontWeight="bold";
}
function italicText()
{
document.getElementById('page').style.fontStyle="italic";
}
function underlineText()
{
document.getElementById('page').style.textDecoration="underline";
}
function defaultText()
{
document.getElementById('page').style.textDecoration="none";
document.getElementById('page').style.fontStyle="normal";
document.getElementById('page').style.fontWeight="normal";
}

function bigSave()
{
document.getElementById('myStatus').style.visibility="visible";
}
function hideOption()
{
document.getElementById('myStatus').style.visibility="hidden";
}

function saveasFile() {
document.getElementById('textStatus').innerHTML="Saved ✓";
document.getElementById('textStatus').style.color="green";
document.getElementById('textStatus').style.fontWeight="bold";
document.getElementById('textStatus').style.border="2px solid green";
}


function showMenu()
{
document.getElementById('settings').style.visibility="visible";
}  
function myFunction() {
alert('This version needs to be updated. Continue using the new version by downloading it from the app store.');
}

function closeFot()
{
document.getElementById('settings').style.visibility="hidden";
}
function tnrCode()
{
document.getElementById('t').innerHTML="font-family: times new roman;";
}
function aCode()
{
document.getElementById('t').innerHTML="font-family: arial;";
}
function tCode()
{
document.getElementById('t').innerHTML="font-family: courier new;";
}
function fCode()
{
document.getElementById('t').innerHTML="font-family: futura;";
}
function dCode()
{
document.getElementById('t').innerHTML="font-family: donkey;";
}

 // Here the value is stored in new variable x  
  
        function rockFunction() { 
            var x =  
                document.getElementById("page").value; 
            
            document.getElementById( 
              "z").innerHTML = x; 
        } 

function redCode()
{
document.getElementById('u').innerHTML="color: red;";
}
function blackCode()
{
document.getElementById('u').innerHTML="color: black;";
}
function blueCode()
{
document.getElementById('u').innerHTML="color: blue;";
}
function purpleCode()
{
document.getElementById('u').innerHTML="color: purple;";
}

function boldCode()
{
document.getElementById('v').innerHTML="font-weight: bold;";
}
function italicCode()
{
document.getElementById('w').innerHTML="font-style: italic;";
}
function underlineCode()
{
document.getElementById('x').innerHTML="text-decoration: underline;";
}
function defaultCode()
{
document.getElementById('v').innerHTML="font-weight: normal;";
document.getElementById('w').innerHTML="font-style: normal;";
document.getElementById('x').innerHTML="text-decoration: none;";
}
function smallCode()
{
document.getElementById('y').innerHTML="font-size: 12px;";
}
function mediumCode()
{
document.getElementById('y').innerHTML="font-size: 18px;";
}
function largeCode()
{
document.getElementById('y').innerHTML="font-size: 30px;";
}
function leftCode()
{
document.getElementById('a').innerHTML="text-align: left;";
}
function centerCode()
{
document.getElementById('a').innerHTML="text-align: center;";
}
function rightCode()
{
document.getElementById('a').innerHTML="text-align: right;";
}
function bigChungus()
{
document.getElementById('newCode').style.visibility="visible";
alert("Copy the code in the box below and paste it into the Photon Drive code reader to access your saved document. (Code reader can be accessed in the Photon Drive shortcut.)");
}
function closeNew()
{
document.getElementById('newCode').style.visibility="hidden";
}
function welcomeFunction() {
alert("Welcome to PF Editor Pro");
}
function resetSave() {
document.getElementById('textStatus').style.color="red";
document.getElementById('textStatus').style.border="none";
document.getElementById('textStatus').innerHTML="Not saved...";
document.getElementById('textStatus').style.fontWeight="bold";
}

function bigChop()
{
document.getElementById('shortcutColor').style.background="#bad8ff";
}
function littleChop()
{
document.getElementById('shortcutColor').style.background="transparent";
}
function showDownloader()
{
document.getElementById('downloader').style.visibility="visible";
}
function hideDownloader()
{
document.getElementById('downloader').style.visibility="hidden";
}

function saveFot(textToWrite, fileNameToSaveAs)
    {
    	var textFileAsBlob = new Blob([textToWrite], {type:'text/html'}); 
    	var downloadLink = document.createElement("a");
    	downloadLink.download = fileNameToSaveAs;
    	downloadLink.innerHTML = "Download File";
    	if (window.webkitURL != null)
    	{
    		// Chrome allows the link to be clicked
    		// without actually adding it to the DOM.
    		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    	}
    	else
    	{
    		// Firefox requires the link to be added to the DOM
    		// before it can be clicked.
    		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    		downloadLink.onclick = destroyClickedElement;
    		downloadLink.style.display = "none";
    		document.body.appendChild(downloadLink);
    	}
    
    	downloadLink.click();
    }  
    


function octopi(textToWrite, fileNameToSaveAs)
    {
    	var textFileAsBlob = new Blob([textToWrite], {type:'text/html'}); 
    	var downloadLink = document.createElement("a");
    	downloadLink.download = fileNameToSaveAs;
    	downloadLink.innerHTML = "Download File";
    	if (window.webkitURL != null)
    	{
    		// Chrome allows the link to be clicked
    		// without actually adding it to the DOM.
    		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    	}
    	else
    	{
    		// Firefox requires the link to be added to the DOM
    		// before it can be clicked.
    		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    		downloadLink.onclick = destroyClickedElement;
    		downloadLink.style.display = "none";
    		document.body.appendChild(downloadLink);
    	}
    
    	downloadLink.click();
    } 
    
function showShortcut()
{
document.getElementById('capn').style.visibility="visible";
}    
function hideShortcut()
{
document.getElementById('capn').style.visibility="hidden";
}  

function dumbo() {
var x =  
                document.getElementById("newCode").innerHTML; 
            
            document.getElementById( 
              "elFot").value = x; 
        } 
        
function bigGold()
{
document.getElementById('primero').innerHTML="<";
document.getElementById('segundo').innerHTML="p";
document.getElementById('uno').innerHTML="<";
document.getElementById('dos').innerHTML="/";
document.getElementById('tres').innerHTML="p";
document.getElementById('cuatro').innerHTML=">";
}

function salt(textToWrite, fileNameToSaveAs)
    {
    	var textFileAsBlob = new Blob([textToWrite], {type:'text/html'}); 
    	var downloadLink = document.createElement("a");
    	downloadLink.download = fileNameToSaveAs;
    	downloadLink.innerHTML = "Download File";
    	if (window.webkitURL != null)
    	{
    		// Chrome allows the link to be clicked
    		// without actually adding it to the DOM.
    		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    	}
    	else
    	{
    		// Firefox requires the link to be added to the DOM
    		// before it can be clicked.
    		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    		downloadLink.onclick = destroyClickedElement;
    		downloadLink.style.display = "none";
    		document.body.appendChild(downloadLink);
    	}
    
    	downloadLink.click();
    } 
    
function colorButtonn() {
document.getElementById("boostColor").style.background="#bad8ff";
}
function uncolorPuton() {
document.getElementById("boostColor").style.background="transparent";
}
