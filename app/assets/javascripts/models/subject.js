// for more details see: http://emberjs.com/guides/models/defining-models/

ClinicalResearch.Subject = DS.Model.extend({
  name: DS.attr('string'),
  age: DS.attr('number')
});
