var nameInput = document.getElementById('siteName');
var urlInput = document.getElementById('siteUrl');
var addBtn = document.getElementById('addBtn');
var updateBtn = document.getElementById('updateBtn')

var tableBody = document.getElementById('tableBody');

var bookMarks = [];
// ------------------local storage--------------------
if (localStorage.getItem("bookMarks")!=null)
{
    bookMarks = JSON.parse( localStorage.getItem("bookMarks"));
    displayBookMarks(bookMarks);
}
// -------------------for submiting---------------------
function addMark(){

    var bookM = {
        name:nameInput.value ,
        url:urlInput.value ,

    }
    bookMarks.push(bookM); 
    localStorage.setItem("bookMarks" , JSON.stringify(bookMarks))
    displayBookMarks(bookMarks);
    clearForm();
}
// --------------------for clear form--------------------
function clearForm() {
    nameInput.value="";
    urlInput.value="";
}
// --------------------for display------------------------
function displayBookMarks (arr)
{ 
    var box =``;
    for(var i=0 ; i < bookMarks.length ; i++)
    {
        box += `<tr>
        <td>${arr[i].name}</td>
        <td><a href="${arr[i].url} ;"><button onClick="visitBookMark(${i})" class="btn btn-primary btn-sm">Visit</button></a></td>
        <td><button onClick="setFormForUpdate(${i})" class="btn btn-warning btn-sm">Update</button></td>
        <td><button onclick="deleteMark(${i});" class="btn btn-danger btn-sm">Delete</button></button></td>
    </tr>`
    }
    // window.open(link.href, "_blank");
    document.getElementById('tableBody').innerHTML=box;
}
// --------------------for delete----------------------------
function deleteMark(Index){
    bookMarks.splice(Index,1);
    localStorage.setItem("bookMarks", JSON.stringify(bookMarks) )
    displayBookMarks(bookMarks);
}
// ----------------for search------------------------
function searchMarks(term) 
{ 
    var matchedMarks = [] ;
    for (var i = 0; i < bookMarks.length; i++) 
    {
        if (bookMarks[term].name.toLowerCase().includes(term.toLowerCase()))
            {
                matchedMarks.push(bookMarks[term]);
            }
    }
    displayBookMarks(matchedMarks);
}
// ---------------------for update------------------------------
function setFormForUpdate (indexOfLine)
{
    var updateButton = document.getElementById("updateBtn");
    addBtn.classList.replace('d-block' , 'd-none');
    updateBtn.classList.replace('d-none' , 'd-block');
    for (var i = 0; i < bookMarks.length; i++)
    {
    nameInput.value = bookMarks[indexOfLine].name;
    urlInput.value = bookMarks[indexOfLine].url;
    }
    bookMarks = localStorage.setItem("bookMarks", JSON.stringify(bookMarks)) ;
    bookMarks.push(updateForm);
    updateSubmit();
    // bookMarks.push(updateForm);
    // displayProducts(bookMarks);
    // clearForm();
    // updateBtn.classList.replace('d-block' , 'd-none');
    // addBtn.classList.replace('d-none' , 'd-block');
}
function updateSubmit(){
    bookMarks = JSON.parse( localStorage.getItem("bookMarks"));
    // bookMarks.push(updateForm);
    displayProducts(bookMarks);
    clearForm();
    // setFormForUpdate ();
    updateBtn.classList.replace('d-block' , 'd-none');
    addBtn.classList.replace('d-none' , 'd-block');
}

//-----------for visit------------------

function visitBookMark (stared){
    var starredSites = [] ; 
        for (var i = 0; i < bookMarks.length; i++)
        {
            starredSites.push(bookMarks[stared]);
        }
}
