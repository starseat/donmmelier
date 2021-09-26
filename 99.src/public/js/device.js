function checkMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}


function getOsInfo() {

    // OS 버전 보기 
    var uanaVigatorOs = navigator.userAgent;
    var AgentUserOs = uanaVigatorOs.replace(/ /g, '');
    var OSName = "";

    // This script sets OSName variable as follows: 
    // "Windows" for all versions of Windows 
    // "MacOS" for all versions of Macintosh OS 
    // "Linux" for all versions of Linux 
    // "UNIX" for all other UNIX flavors 
    // "Unknown OS" indicates failure to detect the OS 
    new function() {
        var OsNo = navigator.userAgent.toLowerCase();
        jQuery.os = { Linux: /linux/.test(OsNo), Unix: /x11/.test(OsNo), Mac: /mac/.test(OsNo), Windows: /win/.test(OsNo) }
    }

    function OSInfoDev() {
        if ($.os.Windows) {
            if (AgentUserOs.indexOf("WindowsPhone") != -1) OSName = "Windows Phone";
            else { OSName = "Windows"; }

        } else if ($.os.Linux) {
            if (AgentUserOs.indexOf("Android") != -1) {
                OSName = getAndroidDevName();
            } else if (AgentUserOs.indexOf("BlackBerry") != -1) OSName = "BlackBerry";
            else if (AgentUserOs.indexOf("Symbian") != -1) OSName = "Symbian";
            else if (AgentUserOs.indexOf("Ubuntu") != -1) OSName = "Ubuntu";
            else if (AgentUserOs.indexOf("PDA") != -1) OSName = "PDA";
            else if (AgentUserOs.indexOf("NintendoWii") != -1) OSName = "Nintendo Wii";
            else if (AgentUserOs.indexOf("PSP") != -1) OSName = "PlayStation Portable";
            else if (AgentUserOs.indexOf("PS2;") != -1) OSName = "PlayStation 2";
            else if (AgentUserOs.indexOf("PLAYSTATION3") != -1) OSName = "PlayStation 3";
            else OSName = "Linux";
        } else if ($.os.Unix) {
            OSName = "UNIX";
        } else if ($.os.Mac) {
            if (AgentUserOs.indexOf("iPhone") != -1) {
                OSName = "iPhone";
            } else if (AgentUserOs.indexOf("iPad") != -1) {
                OSName = "iPad";
            } else if (AgentUserOs.indexOf("MacOS") != -1) {
                OSName = "MacOS";
            } else {
                OSName = "MacOS (Unknown)";
            }
        } else {
            OSName = "Unknown OS";
        }

        return OSName;
    }

    return OSInfoDev();
}