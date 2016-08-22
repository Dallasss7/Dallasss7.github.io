//ASSIGNMENT:
// Look up in the underscore js documentation how to change the
// template settings to use "Mustache.js" style template interpolation
//ANSWER:


//ASSIGNMENT:
// Change the template in the variable compiledTemplate in TodoListView
// to match the new template delimeters
// ASSIGNMENT:
// In a group, compare the string concatenation in example 5 with the use of
// templates here

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
    '<hr>' +
    '<div id="content">' +
      '<div id="welcome"> <p>Hi, I am Dallas Summers,<br>' +
      'and I am a Full-Stack Developer.</p></div>' +
    '</div>'),
    render: function () {
      console.log('main view render function started');

      this.$el.html(this.template);
      app.aboutViewInstance = new app.AboutView({collection: this.collection});
      app.workViewInstance = new app.WorkView({collection: this.collection});
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
        '<p><strong>Skills:</strong> Harvest, Bootstrap,  JavaScript, jQuery, Backbone.js, Node.js, Basecamp, Squarespace, Terminal, WordPress, HTML, HTML5, CSS, Git, JIRA</p>' +
        '</section>' +
      '</div>'
    ),
  aboutContent: function (event) {
    event.preventDefault();
    var $aboutBody = $(this.el).find('#content');
    console.log('About View has rendered  ');
    $aboutBody.html(this.template);
    // var descriptionInput = $description.val();
    // this.collection.add({title: todoInput, description: descriptionInput});
    // $description.val('');
    // $todoInput.val('');
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
        '<p>A web application for Best Picture Nominees</p>' +
        '<p id="sub_text" style="color: #99968E;">Node, Orchestrate.io, Backbone</p>' +
      '</li>' +
      '<li>' +
        '<a href="http://dallasss7.github.io/cobra/cobraIndex.html" target="_blank">' +
          '<img src="lib/massage.jpg">' +
        '</a>' +
          '<p>Telling Touch Massage</p>' +
          '<p id="sub_text" style="color: #99968E;">My first website. Bootstrap, jQuery</p>' +
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
    '<ul>'
    ),
  workContent: function (event) {
    event.preventDefault();
    var $aboutBody = $(this.el).find('#content');
    $aboutBody.html(this.template);
  }
  // initialize: function () {
  //   this.collection.on('add', this.render, this);
  // },
  // render: function () {
  //   var outputHtml = '';
  //   // ANSWER:
  //   var compiledTemplate = _.template('<li><strong><%=title%>: </strong><%=description%></li>');
  //   console.log(compiledTemplate);
  //   this.collection.models.forEach(function (item) {
  //     var data = {};
  //     data.title = item.get('title');
  //     data.description = item.get('description');
  //     outputHtml += compiledTemplate(data);
  //   });

  //   $(this.el).html(outputHtml);
  // }
});
app.HeaderView = Backbone.View.extend({
  el: '#header',
  template: _.template('<h3>Dallas Summers</h3>' +
    '<p>{Developer}</p>'),
  render: function () {
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
