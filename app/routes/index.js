import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({questions: this.store.findAll('question')});
    },

    actions: {
        saveQuestion(params) {
            console.log("final step");
            var newQuestion = this.store.createRecord('question', params);
            newQuestion.save();
            this.transitionTo('index');
        }
    }
});
