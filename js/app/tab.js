define(["data"], function(data) {
    function Tab(opt) {
        this.ul = opt.ul
        this.data = data
        this.num = opt.num
        this.ul2 = opt.ul2
        console.log(this.ul2)
        this.init()
    }
    Tab.prototype.init = function() {
        this.render()
        this.render2()
    }
    Tab.prototype.render = function() {
        var html = ""
        var nam = Math.ceil(this.data.length / this.num)
        for (var i = 1; i <= nam; i++) {
            html += `<li class="${i===1?"active":""}">${i}</li>`
        }
        this.ul2.innerHTML = html
    }
    Tab.prototype.render2 = function() {
        var data2 = this.data.slice(0, this.num)
        console.log(data2)
        this.ul.innerHTML = data2.map(function(item) {
            return `<li ind="${item.code}">${item.name}`
        }).join("")
    }
    return Tab
});