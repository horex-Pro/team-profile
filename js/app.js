const heading = "Please Meet Our Team"
let i = 0;

console.log(heading.length);

const typing = function(){
    if (i < heading.length ) {
        document.querySelector('.heading').innerHTML += heading.charAt(i);
        i++;
        setTimeout(typing, 200)
    }
}

typing();