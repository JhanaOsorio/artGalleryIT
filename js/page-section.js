(function(){
    const separatorLine = document.querySelector(".service-description__separator-line");
    const lineWidth = separatorLine.offsetWidth;
    const windowMinWidth = 1024;

    document.addEventListener('scroll', function(e) {
        const windowWidth = window.innerWidth;
        if( windowWidth >= windowMinWidth)
        { 
            separatorLine.style.width =  lineWidth + window.scrollY/2;
        }
    });
})()