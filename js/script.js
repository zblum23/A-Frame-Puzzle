AFRAME.registerComponent('update-score-text', {
    schema: { type: 'string'
        
    },

    init: function () {
      // Do something when component first attached.
      var stringtoprint = this.data;
      var testBox = document.querySelector("#score-text");
      testBox.setAttribute('value', stringtoprint);
    },

    update: function () {
      // Do something when component's data is updated.
    },

    remove: function () {
      // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.

      
    }

    
});
