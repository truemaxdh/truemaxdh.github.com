<h3>AppList</h3>
<ul>
  {% for post in site.posts %}
    <li>
      <div class="card">
        <img src="{{ post.thumb }}" align="left" class="img">
        <h3>{{ post.title }}</h3>
        <hr>
        <p>{{ post.short-description }}</p>
        <p class="detail">
          {{ post.description }}<br>
          <a class="cta" href="{{ post.url }}">View</a>
        </p>
      </div>
    </li>
  {% endfor %}
</ul>
<h3>About</h3>
<p>truemaxdh's works of coding.</p>
<p>Here are shown some his personal works.</p>
<p>He is a developer of C #, C ++, Java, HTML / Javascript and Computer Vision.</p>
