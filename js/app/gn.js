define(["data", "tab"], function(data, Tab) {
    function Fn(opt) {
        this.arr = opt.arr
        this.data = data
        this.sel = opt.sel
        this.ul2 = opt.ul2
        this.ul = opt.ul
        this.nr
        this.right = opt.right
        console.log(this.data)
        this.init()
    }
    Fn.prototype.init = function() {
        this.inputs()
        this.render()
        this.fyq()
        var qu = this.data.slice(0, 5)

        this.render2(qu)
        this.dj()
        this.dj2()

    }
    Fn.prototype.fyq = function() {
        this.nr = this.sel.value
        var num = Math.ceil(this.data.length / this.nr)
        console.log(this.nr)
        var html = ""
        for (var i = 1; i <= num; i++) {
            html += ` <li ind="${i}" class="${i===1?"active":""}">${i}</li>`
        }
        this.ul2.innerHTML = html
    }
    Fn.prototype.render = function() {
        this.sel.innerHTML = this.arr.map(function(item) {
            return `<option value="${item}" >${item}</option>`
        }).join("")
    }
    Fn.prototype.render2 = function(data) {
        this.ul.innerHTML = data.map(function(item) {
            return `<li ind="${item.code}">${item.name}</li>`
        }).join("")
    }
    Fn.prototype.dj = function() {
        var that = this
        this.ul2.onclick = function(e) {
            var tar = e.target
            if (tar.nodeName === "LI") {
                tar.parentNode.querySelector(".active").classList.remove("active")
                tar.classList.add("active")
                console.log(1)
                var num = tar.innerHTML - 1
                var data1 = that.data.slice(num * that.nr, (num + 1) * that.nr)
                that.render2(data1)
            }
        }
    }
    Fn.prototype.dj2 = function() {
        var that = this
        this.ul.onclick = function(e) {
            var tar = e.target
            if (tar.nodeName === "LI") {
                var code = tar.getAttribute("ind")
                console.log(code)
                var arr = that.data.filter(function(item) {
                    return item.code === code
                })
                console.log(arr)
                console.log(arr[0].cities[0].cities)
                that.right.innerHTML = arr[0].cities[0].cities.map(function(item) {
                    return `<span>${item.name}</span>`
                }).join("")

            }
        }
    }
    Fn.prototype.inputs = function() {
        var that = this
        this.sel.onchange = function() {
            that.nr = that.sel.value
            console.log(that.sel.value)
            var num = this.value
                // console.log(num)
            new Tab({
                num: num,
                ul2: that.ul2,
                ul: that.ul
            })

        }
    }
    return Fn

});