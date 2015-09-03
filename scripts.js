$( document ).ready(function() {
    var waypoint = $('.project').waypoint(function(direction) {
        $('.project').removeClass('on-screen');
        $(this.element).addClass('on-screen');
        console.log("added");
    },{offset:'15%'});
var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-23019901-1']);
    _gaq.push(['_setDomainName', "bootswatch.com"]);
    _gaq.push(['_setAllowLinker', true]);
    _gaq.push(['_trackPageview']);

    (function() {
        var ga = document.createElement('script');
        ga.type = 'text/javascript';
        ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ga, s);
    })();
    var cw = $('#docviewer').width();
    $('#docviewer').css({'height':cw+'px'});
    $(function() {
      $('#slides').slidesjs({
        width: 940,
        height: 528,
        navigation: false
      });
      $('#slides2').slidesjs({
        width: 940,
        height: 528,
        navigation: false
      });
      $('#slides3').slidesjs({
        width: 940,
        height: 528,
        navigation: false
      });
      $('#slides4').slidesjs({
        width: 940,
        height: 528,
        navigation: false
      });
    });
    $("img.project-img").on("click", function() {
        var x = $(this).parent().parent().parent().parent().parent();        $('#imageView').attr('src', $(this).attr('src')); // here asign the image to the modal when the user click the enlarge link
        $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
        $('#myModalLabel').html(x.children("div.col-md-12").children().html());
    });
    /* <![CDATA[ */
    (function() {
        try {
            var s, a, i, j, r, c, l = document.getElementsByTagName("a"),
                t = document.createElement("textarea");
            for (i = 0; l.length - i; i++) {
                try {
                    a = l[i].getAttribute("href");
                    if (a && a.indexOf("/cdn-cgi/l/email-protection") > -1 && (a.length > 28)) {
                        s = '';
                        j = 27 + 1 + a.indexOf("/cdn-cgi/l/email-protection");
                        if (a.length > j) {
                            r = parseInt(a.substr(j, 2), 16);
                            for (j += 2; a.length > j && a.substr(j, 1) != 'X'; j += 2) {
                                c = parseInt(a.substr(j, 2), 16) ^ r;
                                s += String.fromCharCode(c);
                            }
                            j += 1;
                            s += a.substr(j, a.length - j);
                        }
                        t.innerHTML = s.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                        l[i].setAttribute("href", "mailto:" + t.value);
                    }
                } catch (e) {}
            }
        } catch (e) {}
    })();
});
