function scrollToMap(){
    const map = document.getElementById('tajMap');
    map.scrollIntoView({behavior: "smooth"});
    map.classList.add("highlight");

    // Remove highlight after 3 seconds
    setTimeout(()=>{ map.classList.remove("highlight"); }, 3000);
}