const axios = require('axios');

module.exports = {
    async beforeCreate(event) {
      const { data } = event.params;
      const response = await axios.post('http://text2p-api.bibalan.com/api/model', {
        text: data.text,
      });
      
      event.params.data.mbti_label = response.data?.label_predicted;
      event.params.data.mbti = response.data?.personality_predicted;
    },
  };