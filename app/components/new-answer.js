import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        response:  this.get('response'),
        author: this.get('author'),
        question: this.get('question')
      };
      this.sendAction('saveAnswer', params);
    }
  }
});
