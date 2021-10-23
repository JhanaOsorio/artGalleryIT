(function(){
    const separatorLine = document.querySelector(".service-description__separator-line");
    const lineWidth = separatorLine.offsetWidth;
    
    document.addEventListener('scroll', function(e) {
        separatorLine.style.width =  lineWidth + window.scrollY/2;
    });
    console.log(lineWidth);
})()