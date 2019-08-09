define(function() {
    function get(zi, fu) {
        fu = fu || document
        return typeof zi === "string" ? fu.querySelector(zi) : zi
    }

    function gets(zi, fu) {
        fu = fu || document
        return typeof zi === "string" ? fu.querySelectorAll(zi) : zi
    }
    return {
        get: get,
        gets: gets
    }
});