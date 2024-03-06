const cursor = document.querySelector(".cursor")
console.log(cursor)

const page1Content = document.querySelector(".page1-content")
console.log(page1Content)

page1Content.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x: dets.x,
        y: dets.y
    })
})

page1Content.addEventListener("mouseenter", function(){
    gsap.to(cursor, {
        scale: 1,
        opacity: 1
    })
})

page1Content.addEventListener("mouseleave", function() {
    gsap.to(cursor, {
        scale: 0,
        opacity: 0
    })
})

const yourVideos = document.querySelector(".your-videos")
console.log(yourVideos);

const yourVideosBtn = document.querySelector(".YourVideoBtn")
console.log(yourVideosBtn)

yourVideosBtn.addEventListener("click", function() {
    yourVideos.style.display = "block"
    console.log("plz");
})

const registrationForm = document.querySelector(".registration-page")
console.log(registrationForm)

const RegistrationBtn = document.querySelector(".Register-signIn")
RegistrationBtn.addEventListener("click", function() {
    registrationForm.style.display = "block"
})

const feedback = document.querySelector(".feedbackDiv")
const feedbackcont = document.querySelector(".container-feedback")
console.log(feedbackcont)
feedback.addEventListener("click", function() {
    feedbackcont.style.display = "block"
    document.getElementsByClassName(Register-signIn).addEventListener('click', function(){

window.location.href="http://127.0.0.1:5500/Yoga/index.html"

    })
})

const Attendance = document.querySelector(".Attendance")
const AttendanceCont = document.querySelector(".Attendance-container")
Attendance.addEventListener("click", function() {
    AttendanceCont.style.display = "block"


})



