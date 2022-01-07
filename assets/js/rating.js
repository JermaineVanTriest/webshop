Vue.component('star-rating', {

  data: function() {
    return {
      rating: "",

      currentRating: "",

      currentSelectedRating: "",
    
    }
  },


  methods: {

    setRating: function(rating) {
      this.rating = "You have Selected: " + rating + " stars";
    },
    showCurrentRating: function(rating) {
      this.currentRating = (rating === 0) ? this.currentSelectedRating : "Click to select " + rating + " stars"
    },
    setCurrentSelectedRating: function(rating) {
      this.currentSelectedRating = "You have Selected: " + rating + " stars";
    }
  },


  
  template: `
  <div>
   stars
   </div>
  
  `



});
