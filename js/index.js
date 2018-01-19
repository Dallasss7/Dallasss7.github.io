
(function(){
  var app = {};

  app.contentModel = Backbone.Model.extend({});

  app.contentCollection = Backbone.Collection.extend({
    model: app.contentModel,
    comparator: 'cid'
  });

  app.contentInstance = new app.contentCollection();


  app.ContentMainView = Backbone.View.extend({
    el: '#body',
    template: _.template(

      '<nav id="nav">' +
        '<ul>' +
           '<li id="work">Work</li>' +
          '<li id="about">About</li>' +
        '</ul>' +
      '</nav>' +
      '<div id="home"></div>' +
      '<div id="content">' +
        '<div id="welcome"> <p>Hi, I am Dallas <span id="easter">Summers</span>,<br>' +
        'and I am a Web Developer.</p></div>' +
      '</div>'),
      render: function () {
        this.$el.html(this.template);
        app.aboutViewInstance = new app.AboutView({collection: this.collection});
        app.workViewInstance = new app.WorkView({collection: this.collection});
        app.easterViewInstance = new app.EasterView({collection: this.collection});
        app.workViewInstance.render();
      }
  });

  app.AboutView = Backbone.View.extend({
    el: '#body',
    events: {
      'click #about': 'aboutContent'
    },
    template: _.template(
        '<div class="about_section">' +
          '<img src="lib/dallas.jpg" alt="photo" class="profile-photo">' +
          '<section class="about_text">' +
          '<p>I am Passionate about solving problems for clients and partners and positvely impacting my community through growing technologies.</p>' +
          '<p>I am detail oriented, and driven. Specializing in HTML, CSS, and JavaScript, I am always looking at growing my knowledge of programming languages. With a careful approach to design, and development, I seek to enrich the lives of those around me through everyday interactions. Let me work with you in making a difference. Feel free to contact me. <br></p>' +
          '<p><strong>Skills:</strong> Angular2, Vanilla JavaScript, jQuery, Backbone.js, Node.js, Basecamp, Harvest, Squarespace, Terminal, WordPress, SVN, XML, HTML, HTML5, CSS, CSS3, Git, JIRA</p>' +
          '</section>' +
        '</div>'
      ),
    aboutContent: function (event) {
      event.preventDefault();
      var $aboutBody = $(this.el).find('#content');
      $('#work').removeClass('selected');
      $('#about').addClass('selected');
      $aboutBody.html(this.template);
    }
  });

  app.WorkView = Backbone.View.extend({
    el: '#body',
    events: {
      'click #work': 'workContent'
    },
    template: _.template(
      '<ul id="gallery">' +
        '<li>' +
          '<a href="http://atna.herokuapp.com" target="_blank">' +
            '<img src="lib/atna.jpg"/>' +
          '</a>' +
          '<p>A web app for Best Picture Nominees</p>' +
          '<p id="sub_text" style="color: #99968E;">Node, Orchestrate.io, Backbone</p>' +
        '</li>' +
        '<li>' +
          '<a href="http://martin-goebel.squarespace.com/" target="_blank">' +
            '<img src="lib/mobeiusllc.jpg"/>' +
          '</a>' +
          '<p>Moebius Partners LLC</p>' +
          '<p id="sub_text" style="color: #99968E;">Custom CSS, Squarespace</p>' +
        '</li>' +
        '<li>' +
          '<a href="http://dallasss7.github.io/cardGame" target="_blank">' +
              '<img src="lib/greenPaper.jpg"/>' +
          '</a>' +
          '<p>Matching card game</p>' +
          '<p id="sub_text" style="color: #99968E;">Backbone, jQuery</p>' +
        '</li>' +
        '<li>' +
          '<a href="http://dallasss7.github.io/cobra/cobraIndex.html" target="_blank">' +
            '<img src="lib/massage.jpg">' +
          '</a>' +
            '<p>Telling Touch Massage</p>' +
            '<p id="sub_text" style="color: #99968E;">My first website. Bootstrap, jQuery</p>' +
        '</li>' +
      '<ul>'
      ),
    workContent: function (event) {
      event.preventDefault();
      var $aboutBody = $(this.el).find('#content');
      $('#about').removeClass('selected');
      $('#work').addClass('selected');
      $aboutBody.html(this.template);
    }
  });

  app.EasterView = Backbone.View.extend({
    el: '#body',
    events: {
      'dblclick #easter': 'easterContent'
    },
    template: _.template(
       '<iframe width="560" height="315" src="https://www.youtube.com/embed/GaoLU6zKaws" frameborder="0" allowfullscreen></iframe>'
      ),
    easterContent: function (event) {
      event.preventDefault();
      var $aboutBody = $(this.el).find('#content');
      $aboutBody.html(this.template);
    }
  });

  app.HeaderView = Backbone.View.extend({
    el: '#header',
    template: _.template('<h3>Dallas Summers</h3>' +
      '<p>{Developer}</p>'),
    render: function () {
      this.$el.on('click', function(){
        app.contentViewInstance.render();
      })
      this.$el.html(this.template);
    }

  });

  $(function () {
    app.contentViewInstance = new app.ContentMainView({collection: app.contentInstance});
    app.headerViewInstance = new app.HeaderView({});
    app.contentViewInstance.render();
    app.headerViewInstance.render();
    app.workViewInstance.render();

  });
})();

