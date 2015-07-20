// For more information see: http://emberjs.com/guides/routing/

ClinicalResearch.Router.map(function() {
  // this.resource('posts');
    this.resource('subjects', {path: '/'}, function(){
        //this.route("add", {path:'/add'});
    });
});


ClinicalResearch.SubjectsRoute = Ember.Route.extend({
    model: function() {
        return this.store.findAll('subject');
    }
});