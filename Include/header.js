let header;
if (typeof cookieBread==="undefined") { 
  header = "<div id='header'>" +
           "  <div id='title'>" +
           "    <a onclick='toggleStaticCont();'>▤</a> Coding Sketchbook" +
           "  </div>" +
           "  <div id='menu'>" +
           "    <a href='/2020/02/29/About.html'>About</a> | " +
           "    <a href='https://pgmaru.tistory.com'>Tistory</a> | " +
           "    <a href='http://pgmaru.blogspot.com/'>Blog</a> | " +
           "    <a href='https://github.com/truemaxdh'>GitHub</a>" +
           "  </div>" +
           //"  <hr>" +
           "</div>";
} else {
  header = "<div id='header'>" +
           "  <div id='title'>" +
           "    <a href='https://truemaxdh.github.io'>▤</a> <span id='title'>Coding Sketchbook</span>" +
           "  </div>" +
           "  <div id='menu'>" +
           "    <a href='https://truemaxdh.github.io'>Home</a>" + cookieBread + " | " +
           "    <a href='https://pgmaru.tistory.com'>Tistory</a> | " +
           "    <a href='http://pgmaru.blogspot.com/'>Blog</a> | " +
           "    <a href='https://github.com/truemaxdh'>GitHub</a>" +
           "  </div>" +
           //"  <hr>" +
           "</div>";
}
document.write(header);
