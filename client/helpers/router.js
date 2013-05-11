Meteor.Router.add({
  '/': {
    to: 'home',
    and: function() { Session.set("activeNav", Meteor.Router.page()); }
  },
  '/about': {
    to: 'about',
    and: function() { Session.set("activeNav", Meteor.Router.page()); }
  },
  '/contact': {
    to: 'contact',
    and: function() { Session.set("activeNav", Meteor.Router.page()); }
  },
  '/magic': {
    to: 'magic',
    and: function() { Session.set("activeNav", Meteor.Router.page()); }
  }
});

Handlebars.registerHelper("activeNav", function (nav) {
  return Session.equals("activeNav", nav) ? "active" : "";
});