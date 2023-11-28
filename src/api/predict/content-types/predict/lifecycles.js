const axios = require('axios');
const getJsonImage = (mbti) => {
  const mbtiHashMap = {
    'ISTJ': 'ad29a72406',
    'ISFJ': 'b65836aa96',
    'INFJ': '064818d557',
    'INTJ': 'bc2b50c7f6',
    'ISTP': '22b3a3985d',
    'ISFP': 'aad06a874d',
    'INFP': '1cffd9d241',
    'INTP': '64538ac35f',
    'ESTP': '7ecdd0c086',
    'ESFP': '5d9517371b',
    'ENFP': '157443e402',
    'ENTP': '74200d3c27',
    'ESTJ': '2e09a2069d',
    'ESFJ': '24e421c681',
    'ENFJ': 'b3f32691fb',
    'ENTJ': '38f2358a75',
  };
  const mbtiHash = `${mbti}_${mbtiHashMap[mbti]}`
  return [
    {
      type: "image",
      image: {
        ext: ".webp",
        url: `http://text2p.bibalan.com/uploads/${mbtiHash}.webp`,
        hash: mbtiHash,
        mime: "image/webp",
        name: `${mbti}.webp`,
        size: 230.15,
        width: 3543,
        height: 3543,
        caption: null,
        formats: {
          large: {
            ext: ".webp",
            url: `/uploads/large_${mbtiHash}.webp`,
            hash: `large_${mbtiHash}`,
            mime: "image/webp",
            name: `large_${mbti}.webp`,
            path: null,
            size: 60.99,
            width: 600,
            height: 600
          },
          small: {
            ext: ".webp",
            url: `/uploads/small_${mbtiHash}.webp`,
            hash: `small_${mbtiHash}`,
            mime: "image/webp",
            name: `small_${mbti}.webp`,
            path: null,
            size: 26.46,
            width: 400,
            height: 400
          },
          medium: {
            ext: ".webp",
            url: `/uploads/medium_${mbtiHash}.webp`,
            hash: `medium_${mbtiHash}`,
            mime: "image/webp",
            name: `medium_${mbti}.webp`,
            path: null,
            size: 43.69,
            width: 650,
            height: 650
          },
          thumbnail: {
            ext: ".webp",
            url: `/uploads/thumbnail_${mbtiHash}.webp`,
            hash: `thumbnail_${mbtiHash}`,
            mime: "image/webp",
            name: `thumbnail_${mbti}.webp`,
            path: null,
            size: 5.4,
            width: 156,
            height: 156
          }
        },
        provider: "local",
        createdAt: "2023-11-27T04:50:19.602Z",
        updatedAt: "2023-11-27T16:40:57.188Z",
        previewUrl: null,
        alternativeText: `${mbti}.webp`,
        provider_metadata: null
      },
      children: [
        {
          text: "",
          type: "text"
        }
      ]
    }
  ]
}

module.exports = {
    async beforeCreate(event) {
      const { data } = event.params;
      const response = await axios.post('http://text2p-api.bibalan.com/api/model', {
        text: data.text,
      });
      
      event.params.data.mbti_label = response.data?.label_predicted;
      event.params.data.mbti = response.data?.personality_predicted;
      event.params.data.json_description = getJsonImage(response.data?.personality_predicted);
      console.log(event.params.data)
    },
  };