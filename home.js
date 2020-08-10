function deleteChat() {
    if( confirm("clear conversation!")){
        var parent = document.getElementById('chat');
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
}

