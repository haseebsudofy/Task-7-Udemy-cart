var array = [];

if (localStorage.getItem('courseDetails')) {
    array = JSON.parse(localStorage.getItem('courseDetails'));
}

function addNewCourse() {
    document.location.href = "add-new-course.html";
}

function formDetails(event) {
    event.preventDefault();
    var courseName = document.getElementById('courseName').value;
    var courseType = document.getElementById('courseType').value;
    var coursePrice = document.getElementById('coursePrice').value;
    var authorName = document.getElementById('authorName').value;
    var courseRating = document.getElementById('courseRating').value;
    var courseImg = document.getElementById('courseImg').value;

    var formDetailsObject = {
        courseName: courseName,
        courseType: courseType,
        coursePrice: coursePrice,
        authorName: authorName,
        courseRating: courseRating,
        courseImg : courseImg
    }

    console.log(formDetailsObject);

    array.push(formDetailsObject);
    console.log('Array of courses : ', array);
    localStorage.setItem('courseDetails', JSON.stringify(array));
    document.location.href = "view-course.html";

}

var getData = [];

function getCourseDetails() {
    for (i = JSON.parse(localStorage.getItem('courseDetails')).length - 1; i >= 0; i--) {

        getData = JSON.parse(localStorage.getItem('courseDetails'));
        var cartDiv = document.createElement('div');
        var imgDiv = document.createElement('div');

        // cartDiv.innerHTML = "<b> COURSE DETAILS <b> <br> <br>" + "Course Name : " + getData[i].courseName + "<br> <br> Course type : " + getData[i].courseType + "<br> <br> Price : " + getData[i].coursePrice + "<br> <br> Author : " + getData[i].authorName + " <br> <br> Rating : " + getData[i].courseRating;
        cartDiv.className = "cartClass";    
        imgDiv.className = "cartImg";
        
        // var text = document.createTextNode("hellooo world!!");
        // imgDiv.appendChild(text);
        cartDiv.appendChild(imgDiv);

        var img = document.createElement('img');
        console.log(getData[i].courseImg);
        img.setAttribute('src',getData[i].courseImg);
        // img.innerHTML = 'getData[i].courseImg';
        imgDiv.appendChild(img);
        var div1 = document.createElement('h2');
        var div1Text = document.createTextNode('Course Details ');
        div1.appendChild(div1Text);
        cartDiv.appendChild(div1);
        var div2 = document.createElement('p');
        var div2Text = document.createTextNode("Course Name : " + getData[i].courseName);
        div2.appendChild(div2Text);
        cartDiv.appendChild(div2);
        var div3 = document.createElement('p');
        var div3Text = document.createTextNode("Course Type : " + getData[i].courseType);
        div3.appendChild(div3Text);
        cartDiv.appendChild(div3);
        var div4 = document.createElement('p');
        var div4Text = document.createTextNode("Course Type : " + getData[i].coursePrice);
        div4.appendChild(div4Text);
        cartDiv.appendChild(div4);
        var div5 = document.createElement('p');
        var div5Text = document.createTextNode("Course Type : " + getData[i].authorName);
        div5.appendChild(div5Text);
        cartDiv.appendChild(div5);
        var div6 = document.createElement('p');
        var div6Text = document.createTextNode("Course Type : " + getData[i].courseRating);
        div6.appendChild(div6Text);
        cartDiv.appendChild(div6);
        // cartDiv.style.height = "270px";
        // cartDiv.style.width = "900px";
        // cartDiv.style.border = "2px solid white";
        // cartDiv.style.marginTop = "20px";
        // cartDiv.style.background = "steelblue";
        // cartDiv.style.textAlign = "center";
        // cartDiv.style.paddingTop = "20px";
        // cartDiv.style.fontFamily = "sans-serif";
        // cartDiv.style.color = "white";
        // cartDiv.style.margin = "10px auto";
        // cartDiv.style.opacity= "1";

        document.getElementById('cart').appendChild(cartDiv);

        //  

        // var paragraph = document.createElement('p');
        // var text = document.createTextNode("skjbdbjksabd ljfewkdfw");
        // var x = document.createTextNode(getData);
        // cartDiv.appendChild(paragraph);
        // paragraph.appendChild(text);
        // cart.appendChild(cartDiv);
        // console.log(cartDiv);

    }


}

function myfunc(event) {
    console.log('event : ',event.target.value)
}

function viewCourses() {
    document.location.href = "view-course.html";
}

