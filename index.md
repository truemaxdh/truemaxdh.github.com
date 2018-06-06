### Coding is Fun
- [Pentix](https://truemaxdh.github.io/CodingIsFun/game_pentix/www/)
- [Sky Miner](https://truemaxdh.github.io/CodingIsFun/game_shooting/www/)
- [Jumping Car](https://truemaxdh.github.io/CodingIsFun/game_hscroll_car/)
- [Straight-Bouncing Balls](https://truemaxdh.github.io/CodingIsFun/lab_straight-bouncing_balls/)
- [SimpleGraph.JS](https://truemaxdh.github.io/simpleGraph.js/)


<ul>
  {% for post in site.posts %}
    <li>
      <div class="card">
        <img src="{{ post.thumb }}" align="left" class="img">
        <h3>{{ post.title }}</h3>
        <hr>
        {{ post.excerpt }}
        <a href="{{ post.url }}">View</a>
      </div>
    </li>
  {% endfor %}
  {% for page in site.pages %}
    <li>
      <div class="card">
        <img src="{{ page.thumb }}" align="left" class="img">
        <h3>{{ page.title }}</h3>
        <hr>
        {{ page.excerpt }}
        <a href="{{ page.url }}">View</a>
      </div>
    </li>
  {% endfor %}
</ul>
