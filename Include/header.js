var header;
if (typeof cookieBread==="undefined") { 
  header = "<div id='header'>" +
             "  <font color='#73AD21'>" +
             "    <b><a style='text-decoration:none;color:#73AD21;cursor:hand;' onclick='showStaticCont();'>▤</a>truemaxdh</b>" +
             "    <a href='#'>AboutMe</a>" +
             "    <a href='https://pgmaru.tistory.com'>Tistory</a>" +
             "    <a href='http://pgmaru.blogspot.com/'>Blog</a>" +
             "    <a href='https://github.com/truemaxdh'>GitHub</a>" +
             "    <hr>" +
             "  </font>" +
             "</div>";
} else {
  header = "<div id='header'>" +
             "  <font color='#73AD21'>" +
             "    <b><a style='text-decoration:none;color:#73AD21;cursor:hand;' href='https://truemaxdh.github.io'>▤</a>truemaxdh</b>" +
             "    <a href='https://truemaxdh.github.io'>Home</a>" + cookieBread +
             "    <a href='https://pgmaru.tistory.com'>Tistory</a>" +
             "    <a href='http://pgmaru.blogspot.com/'>Blog</a>" +
             "    <a href='https://github.com/truemaxdh'>GitHub</a>" +
             "    <hr>" +
             "  </font>" +
             "</div>";
}
document.write(header);
