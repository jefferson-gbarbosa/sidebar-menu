const toggleBtn = document.querySelector(".toggle-btn");
let sidebar =  document.querySelector(".sidebar");
let list = document.querySelectorAll('.list');
// toggle button
toggleBtn.onclick = function (){
    sidebar.classList.toggle("active");
    toggleBtn.classList.toggle("active");
}

// add active class in selected list item
for (let i = 0; i < list.length; i++) {
    list[i].onclick = function(){
        let j = 0;
        while(j < list.length){
            list[j++].className = 'list';
        }
        list[i].className = 'list active'
    }
}
