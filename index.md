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
        <a href="{{ post.url }}">{{ post.title }}</a>
      </div>
    </li>
  {% endfor %}
</ul>
