let apiurl = 'https://us-central1-train-time-api-7eb0f.cloudfunctions.net/api'
console.log(apiurl);
axios.get(apiurl)
        .then(function (response) {
          var url = `//maps.google.com/maps/api/js?key=${response.data}&language=ja`;
          var script = document.createElement('script');
          script.src = url;
          document.getElementsByTagName("head")[0].appendChild(script);
        }).catch(function (error) {
          console.log('error occurred');
        });


