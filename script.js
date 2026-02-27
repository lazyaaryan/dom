let main = document.querySelector('main');
let btn = main.querySelector('button');

btn.addEventListener('click',function(){
    let div = document.createElement('div');
    div.style.height='67px'
    div.style.width='67px'


    var x = Math.random()*100
    var y = Math.random()*100
    div.style.position='absolute'
    div.style.top=y+'%'
    div.style.left=x+'%'

    var c1 = Math.floor(Math.random()*256)
    var c2 = Math.floor(Math.random()*256)
    var c3 = Math.floor(Math.random()*256)
    div.style.backgroundColor=`rgb(${c1},${c2},${c3})`;

    var rot = Math.random()*360
    var scale = Math.random()*4
    div.style.scale=scale
    div.style.rotate=rot+'deg'



    main.appendChild(div)
})