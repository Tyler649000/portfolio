function spanify(string) {
    let spans = [];
    for (let letter = 0; letter < string.length; letter++) {
        let span = document.createElement('span');
        span.innerHTML = string.charAt(letter);
        spans.push(span);
    }
    return spans;
}
for (let title of document.querySelectorAll('.title')) {
    let titleString = title.innerHTML;
    title.innerHTML = '';
    for (let span of spanify(titleString)) title.appendChild(span);
}

for (let video of document.getElementsByTagName('video')) {
    var play = function () {
        video.play();
        video.playbackRate = 2;
    };
    
    video.parentElement.addEventListener('mouseenter', play());
    video.parentElement.addEventListener('touchstart', play());
      
    video.parentElement.addEventListener('mouseleave', function() {
        video.pause();
        video.currentTime = 0;
    });

    video.addEventListener('ended', function() {
        video.play();
    });
}
