let allOptions = document.getElementsByClassName('inner-sideBar2')
let home = document.getElementById('home-sideBar2')
let profile = document.getElementById('profile-sideBar2')
let post = document.getElementById('sidebar1-ele7-btn')
let navBtn = document.getElementById('nav-btn')

let logout = document.getElementById('logout')

let homeBtn = document.getElementById('home-btn')
let sportsBtn = document.getElementById('sports-btn')
let clubBtn = document.getElementById('club-btn')
let libraryBtn = document.getElementById('library-btn')
let gamingBtn = document.getElementById('gaming-btn')
let profileBtn = document.getElementById('profile-btn')

let crossBtn = document.getElementById('cross-btn')



// User to get width of device for responsiveness -------->
const viewportWidth = window.innerWidth;



allBroadcast();



// All function starts from here ----->

function allBroadcast() {
    document.getElementById('home-sideBar2').innerHTML = ''
    for (let i = 1; i < localStorage.length; i++) {
        let dataFetched = JSON.parse(localStorage[i])
        let loginedPerson = dataFetched.logined
        let username = dataFetched.username
        let broadcasts = dataFetched.broadCast
        if (broadcasts.length > 0) {
            for (let j = 0; j < broadcasts.length; j++) {
                if (loginedPerson == 1) {
                    document.getElementById('home-sideBar2').innerHTML +=
                        `
        <li class="sidebar2-ele">
                <div id="writer">
                    <img src="../images/profileIcon.svg" alt="">
                    <p>@${username}</p>
                </div>
                <div id="title">
                    <p>${broadcasts[j].title}</p>
                </div>
                <div id="destination">
                    <p>${broadcasts[j].destination}</p>
                </div>
                <div id="time">
                    <p>${broadcasts[j].time}</p>
                    <div>
                        <button id="interested">I'm Interested</button>
                        <button class="delete">
                            <img src="../images/delete.svg" alt="">
                        </button> 
                    </div>
                </div>
            </li>
        `;
                }
                else {
                    document.getElementById('home-sideBar2').innerHTML +=
                        `
            <li class="sidebar2-ele">
                    <div id="writer">
                        <img src="../images/profileIcon.svg" alt="">
                        <p>@${username}</p>
                    </div>
                    <div id="title">
                        <p>${broadcasts[j].title}</p>
                    </div>
                    <div id="destination">
                        <p>${broadcasts[j].destination}</p>
                    </div>
                    <div id="time">
                        <p>${broadcasts[j].time}</p>
                        <div>
                            <button id="interested">I'm Interested</button>
                            <!--<button class="delete">
                                <img src="../images/delete.svg" alt="">
                            </button>--> 
                        </div>
                    </div>
                </li>
            `;
                }
            }
        }
    }
}

document.querySelectorAll('.sidebar1-ele').forEach((btn,index)=>{
    btn.addEventListener('click',function(e){
        document.querySelectorAll('.sidebar1-ele').forEach((btn,index)=>{
            btn.style.border='none'
        })
       let button= e.target.closest('.sidebar1-ele')
       button.style.border = '2px solid white'
    })
})

function broadcastByCategory(category) {
    document.getElementById('home-sideBar2').innerHTML = ''
    for (let i = 1; i < localStorage.length; i++) {
        let dataFetched = JSON.parse(localStorage[i])
        let loginedPerson = dataFetched.logined
        let username = dataFetched.username
        let broadcasts = dataFetched.broadCast
        if (broadcasts.length > 0) {
            for (let j = 0; j < broadcasts.length; j++) {
                if (broadcasts[j].category == category) {
                    if (loginedPerson == 1) {
                        document.getElementById('home-sideBar2').innerHTML +=
                            `
                <li class="sidebar2-ele">
                    <div id="writer">
                        <img src="../images/profileIcon.svg" alt="">
                        <p>@${username}</p>
                    </div>
                    <div id="title">
                        <p>${broadcasts[j].title}</p>
                    </div>
                    <div id="destination">
                        <p>${broadcasts[j].destination}</p>
                    </div>
                    <div id="time">
                        <p>${broadcasts[j].time}</p>
                        <div>
                            <button id="interested">I'm Interested</button>
                            <button class="delete">
                                <img src="../images/delete.svg" alt="">
                            </button> 
                        </div>
                    </div>
                </li>
            `;
                    }
                    else {
                        document.getElementById('home-sideBar2').innerHTML +=
                            `
                    <li class="sidebar2-ele">
                        <div id="writer">
                            <img src="../images/profileIcon.svg" alt="">
                            <p>@${username}</p>
                        </div>
                        <div id="title">
                            <p>${broadcasts[j].title}</p>
                        </div>
                        <div id="destination">
                            <p>${broadcasts[j].destination}</p>
                        </div>
                        <div id="time">
                            <p>${broadcasts[j].time}</p>
                            <div>
                                <button id="interested">I'm Interested</button>
                                <!--<button class="delete">
                                    <img src="../images/delete.svg" alt="">
                                </button>--> 
                            </div>
                        </div>
                    </li>
                `;
                    }
                }
            }
        }
    }
}

function historyPosts() {
    document.getElementById('inner-posts').innerHTML = ''
    for (let i = 1; i < localStorage.length; i++) {
        let dataFetched = JSON.parse(localStorage[i])
        let loginedPerson = dataFetched.logined
        let username = dataFetched.username
        let broadcasts = dataFetched.broadCast
        if (broadcasts.length > 0) {
            for (let j = 0; j < broadcasts.length; j++) {
                if (loginedPerson == 1) {
                    document.getElementById('inner-posts').innerHTML +=
                        `
        <li class="sidebar2-ele">
                <div id="writer">
                    <img src="../images/profileIcon.svg" alt="">
                    <p>@${username}</p>
                </div>
                <div id="title">
                    <p>${broadcasts[j].title}</p>
                </div>
                <div id="destination">
                    <p>${broadcasts[j].destination}</p>
                </div>
                <div id="time">
                    <p>${broadcasts[j].time}</p>
                    <div>
                        <button id="interested">I'm Interested</button>
                        <button class="delete">
                            <img src="../images/delete.svg" alt="">
                        </button> 
                    </div>
                </div>
            </li>
        `;
                }
            }
        }
    }
}

function crossButton() {
    document.getElementById('outer-post-form').style.display = 'none'
}

function navOpenClose() {
    let navEle = document.getElementsByClassName('sidebar1-ele')
    for (let i = 0; i < navEle.length; i++) {
        if (navEle[i].style.display != 'flex') {
            navEle[i].style.display = 'flex'
            document.getElementById('page1').style.height = '180vh'
            document.getElementById('sideBar1').style.height = '45%'
        }
        else {
            navEle[i].style.display = 'none'
            document.getElementById('page1').style.height = '85vh'
            document.getElementById('sideBar1').style.height = '55px'
        }
    }
}

function logOut() {
    for (let i = 1; i < localStorage.length; i++) {
        let verifyRollNum = JSON.parse(localStorage[i])
        if (verifyRollNum.logined == 1) {
            verifyRollNum.logined = 0;
            localStorage.setItem(i, JSON.stringify(verifyRollNum));
            window.location = "../html/login.html"
        }
    }
}



//  All Event listeners starts from here ------> 

homeBtn.addEventListener('click', function () {
    profile.style.display = 'none'
    home.style.display = 'flex';
    allBroadcast()
    if (viewportWidth < 440) {
        navOpenClose()
    }
})

sportsBtn.addEventListener('click', function () {
    profile.style.display = 'none'
    home.style.display = 'flex'
    broadcastByCategory('sports')
    if (viewportWidth < 440) {
        navOpenClose()
    }
})

clubBtn.addEventListener('click', function () {
    profile.style.display = 'none'
    home.style.display = 'flex'
    broadcastByCategory('club')
    if (viewportWidth < 440) {
        navOpenClose()
    }
})

libraryBtn.addEventListener('click', function () {
    profile.style.display = 'none'
    home.style.display = 'flex'
    broadcastByCategory('library')
    if (viewportWidth < 440) {
        navOpenClose()
    }
})

gamingBtn.addEventListener('click', function () {
    profile.style.display = 'none'
    home.style.display = 'flex'
    broadcastByCategory('gaming')
    if (viewportWidth < 440) {
        navOpenClose()
    }
})

profileBtn.addEventListener('click', function () {
    for (let i = 0; i < allOptions.length; i++) {
        allOptions[i].style.display = 'none'
    }
    profile.style.display = 'flex';
    if (viewportWidth < 440) {
        navOpenClose()
    }

    for (let i = 1; i < localStorage.length; i++) {
        let dataFetched = JSON.parse(localStorage[i])
        if (dataFetched.logined == 1) {
            document.getElementById('profile-username').innerHTML = dataFetched.username;
            document.getElementById('rollno').innerHTML = dataFetched.rollNum;
            document.getElementById('hostelName').innerHTML = dataFetched.hostelName;
        }
    }
    historyPosts()
})

post.addEventListener('click', function () {
    document.getElementById('outer-post-form').style.display = 'flex'
})

logout.addEventListener('click', logOut)

crossBtn.addEventListener('click', crossButton)

navBtn.addEventListener('click', navOpenClose)

document.getElementById('post-submit-btn').addEventListener('click', function (event) {
    event.preventDefault();
    let postData = {
        'title': document.getElementById('post-title').value,
        'destination': document.getElementById('post-destination').value,
        'time': document.getElementById('post-time').value,
        'category': document.getElementById('post-category').value
    }

    for (let i = 1; i < localStorage.length; i++) {
        let dataFetched = JSON.parse(localStorage[i])
        if (dataFetched.logined == 1) {
            dataFetched.broadCast.push(postData)
            localStorage.setItem(i, JSON.stringify(dataFetched));
        }
    }
    document.getElementById('post-title').value = ""
    document.getElementById('post-destination').value = ""
    document.getElementById('post-time').value = ""
    document.getElementById('post-category').value = ""
    allBroadcast();
    crossButton();
})



// Delete element query written here ---->

let allDeleteBtn = document.querySelectorAll('.delete')
allDeleteBtn.forEach((btn, index) => {
    btn.addEventListener('click', function (e) {
        for (let i = 1; i < localStorage.length; i++) {
            let dataFetched = JSON.parse(localStorage[i])
            if (dataFetched.logined == 1) {
                let myArray = dataFetched.broadCast
                myArray.splice(index, 1);
                dataFetched.broadCast = myArray
                localStorage.setItem(i, JSON.stringify(dataFetched))
                allBroadcast();
            }
        }
    })
})