import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  singleEntry: [
    { "label":"Single", "value":10 }
  ],
  multiEntry: [
    { "label":"One",    "value":1 },
    { "label":"Two",    "value":2 },
    { "label":"Three",  "value":3 },
    { "label":"Four",   "value":4 },
    { "label":"Five",   "value":5, "color": '#006' }
  ],

  singleEntryJson: computed('singleEntry', function() {
    return JSON.stringify(this.get('singleEntry'), null, 2);
  }),

  multiEntryJson: computed('multiEntry', function() {
    return JSON.stringify(this.get('multiEntry'), null, 2);
  })
});
