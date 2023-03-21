 src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js">
src="https://code.jquery.com/jquery-3.6.0.min.js">

  var app = new Vue({
    el: "#usuarios",
    data: function () {
      return {
        users: [],
      };
    },
    mounted() {
      this.loadUsers();
    },
    methods: {
      loadUsers() {
        $.ajax({
          url: "https://reqres.in/api/users?per_page=03",
          type: "GET",
          success: (response) => {
            this.users = response.data;
          },
        });
      },
    },
  });
