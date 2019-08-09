require.config({
    baseUrl: "./js",
    paths: {
        data: "./shuju/data",
        gn: "./app/gn",
        getEl: "./conmon/getEl",
        tab: "./app/tab"
    }
})
require(["data", "gn", "getEl"], function(m1, m2, m3) {
    var arr = ["5", "10", "15"]
    new m2({
        arr: arr,
        sel: m3.get("#sel"),
        ul2: m3.get(".ul2"),
        ul: m3.get(".ul"),
        right: m3.get(".right")
    })
})