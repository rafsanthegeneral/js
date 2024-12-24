function showAdPopup() {
    const adUrl = "https://affectionparson.com/vpev1nszs?key=08c6dec73e4f1448dbd2745bcae6550e";

    // Open the ad in a new popup window
    const popup = window.open(adUrl, "popupAd", "width=800,height=600,scrollbars=no,resizable=no");

    // Check if the popup was blocked
    if (!popup || popup.closed || typeof popup.closed == 'undefined') {
        alert("If you want to See That News . Please allow all.");
    }
}

// Automatically trigger the popup after a delay
window.onload = function () {
    let count = 0;
    const maxPopups = 50;
    const interval = setInterval(() => {
        if (count >= maxPopups) {
            clearInterval(interval);
        } else {
            showAdPopup();
            count++;
        }
    }, 10000); //  seconds interval
};