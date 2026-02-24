var i = 0;
var r = 0;
var max = 8;

var a = document.querySelectorAll(".interview-btn");
var b = document.querySelectorAll(".rejected-btn");

var x = document.getElementById("interview-count");
var y = document.getElementById("rejected-count");

for (var j = 0; j < a.length; j++) {

    a[j].onclick = function () {

        if (i + r < max) {

            i++;
            x.innerText = i;

            var s = this.parentElement.parentElement.querySelector(".status");
            s.innerText = "INTERVIEW";

            this.disabled = true;

        }

    }

}

for (var j = 0; j < b.length; j++) {

    b[j].onclick = function () {

        if (i + r < max) {

            r++;
            y.innerText = r;

            var s = this.parentElement.parentElement.querySelector(".status");
            s.innerText = "REJECTED";

            this.disabled = true;

        }

    }

}