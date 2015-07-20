// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require ember
//= require ember-data
//= require active-model-adapter
//= require ./external/moment
//= require ./external/bootstrap
//= require ./external/bootstrap-datepicker
//= require ./external/components-pickers
//= require ./external/responsive-menu
//= require_self
//= require ./clinical_research

// for more details see: http://emberjs.com/guides/application/
ClinicalResearch = Ember.Application.create({
        rootElement: '#view-container',
        LOG_TRANSITIONS: true,
        LOG_TRANSITIONS_INTERNAL: true
    });


