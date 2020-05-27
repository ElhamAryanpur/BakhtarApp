window.getData = function () {
    const data = this.localStorage.getItem("data");
    if (data == null) {
        window.downloadData();
        return [{
            title: "N/A",
            data: "No Data Exist!",
        }, ];
    } else {
        try {
            return this.JSON.parse(data);
        } catch {
            return [{
                title: "N/A",
                data: "No Data Exist!",
            }, ];
        }
    }
};

function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    };
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

window.downloadData = function () {
    this.httpGetAsync("/data.xml", function (data) {
        const x2js = new X2JS();
        localStorage.setItem("data", JSON.stringify(x2js.xml_str2json(data).content.subject));
        location.reload();
    });
};