const articles= require ("./articles");

const { Configuration, OpenAIApi } = require("openai");
const dotenv = require('dotenv');
dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
async function main(articles){
    let output1 = [];
    for (let i=12;i< articles.length;i++ ){
  
        let k = articles[i];
        let a = await filter1(k)
        console.log("🚀 ~ file: script.js:17 ~ main ~ a:", a)
        // output1 = [...output1 ,...a ]

    }
 //   console.log("🚀 ~ file: script.js:17 ~ main ~ output1:", output1)

    let output2 = await filter2(output1);

    articles.find

}
main(articles)

// here we are just taking the points out of the body , if they are present other wise do nothing and just return points
async function filter1(x){
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `here i m giving some of data from article ,please find the unstructured data and there will be some points in it , please give me those points as a output in array of that object where points are stored in string field in body , Otherise if there are just points then return me those point in same object structure ,just make those body points converted into an array in same body field. Data will be present in -- this hypens below-${x}-`,
        temperature: 0,
        max_tokens: 150,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
        stop: ["You:"],
      });
      
      
      return(response.data.choices[0].text)
}

async function filter2(x){
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Please go thorugh all the points given below and if any points match more then 90% remove them and return me the array of remaining points. Points are in hpyhen. - ${x} -`,
        temperature: 0,
        max_tokens: 150,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
        stop: ["You:"],
      });
      
      
      return(response.data.choices[0].text)
}




// chapo
// a = [{point: ,
// source: 1}]

// output = [{
//     poitn:
//     sourve:
//     summary"
// }
// ]

// api_key ="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";


//Here i am giving you some data below , please go through it and check if the content is unstructured then there will be some points in it , please give me those points as output in an array of that object where points are stored in string of fileds body \. Otherise if there are just points then return me thohse point in same object structure just make those body points converted into an array in same body field. Data will be present in -- this hypens below 
