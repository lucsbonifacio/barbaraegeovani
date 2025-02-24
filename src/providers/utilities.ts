export const openLink = (link, target) => {
    window.open(link, target);
}

export const smoothScroll = (section) => {
    const element = document.querySelector(`#${section}`);

    if (!element)  return;
    element.scrollIntoView({ behavior: 'smooth' });
}

export const isMobilePlatform = () => { 
    if( 
        navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ){
       return true;
    }

    return false;
}