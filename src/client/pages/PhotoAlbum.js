import { GoogleGenerativeAI } from "@google/generative-ai";
import './PhotoAlbum.css';

// const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

async function run() {
  // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
  // const result = await model.generateContent(["Explain how AI works"]);
  // console.log(result.response.text());
}
run();

export default function PhotoAlbum() {
    return <h1>This is the Photo Album</h1>
}