var tabBtn;
var tabContent;


window.onload=function() {
    tabContent=document.getElementsByClassName('tabContent');
    tabBtn=document.getElementsByClassName('tabBtn');
    hideTabsContent(1);
} 

function hideTabsContent(a) {
    for (var i=a; i<tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add("hide");
        tabBtn[i].classList.remove('active');
    }
}

document.getElementById('tab-links').onclick= function (event) {
    var target=event.target;
    if (target.className=='tabBtn') {
       for (var i=0; i<tabBtn.length; i++) {
           if (target == tabBtn[i]) {
               showTabsContent(i);
               break;
}}}}

function showTabsContent(b){
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tabBtn[b].classList.add('active');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}
