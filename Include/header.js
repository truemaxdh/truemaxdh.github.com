var header;
if (typeof cookieBread==="undefined") { 
  header = "<div id='header'>" +
           "  <a onclick='toggleStaticCont();'>▤</a>truemaxdh" +
           "  <a href='#'>AboutMe</a>" +
           "  <a href='https://pgmaru.tistory.com'>Tistory</a>" +
           "  <a href='http://pgmaru.blogspot.com/'>Blog</a>" +
           "  <a href='https://github.com/truemaxdh'>GitHub</a>" +
           "  <hr>" +
           "</div>";
} else {
  header = "<div id='header'>" +
           "  <a href='https://truemaxdh.github.io'>▤</a>truemaxdh" +
           "  <a href='https://truemaxdh.github.io'>Home</a>" + cookieBread +
           "  <a href='https://pgmaru.tistory.com'>Tistory</a>" +
           "  <a href='http://pgmaru.blogspot.com/'>Blog</a>" +
           "  <a href='https://github.com/truemaxdh'>GitHub</a>" +
           "  <hr>" +
           "</div>";
}
document.write(header);
