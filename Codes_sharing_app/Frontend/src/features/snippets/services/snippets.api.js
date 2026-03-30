import axios from 'axios';
import { LANGUAGE_VERSIONS } from "./contants";

const API = axios.create({
  baseURL: "https://ce.judge0.com",
  headers: {
    "Content-Type": "application/json"
  }
});

// helper delay
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function executeCode(sourceCode, language) {
  try {
    if (!LANGUAGE_VERSIONS[language]) {
      throw new Error("Unsupported language");
    }
    const encodedCode = btoa(sourceCode);

    const { data } = await API.post(
      "/submissions?base64_encoded=true&wait=false",
      {
        source_code: encodedCode,
        language_id: LANGUAGE_VERSIONS[language],
        stdin: btoa("") 
      }
    );

    const token = data.token;

    let result = null;

    while (true) {
      const res = await API.get(`/submissions/${token}`, {
        params: { base64_encoded: "true" }
      });

      result = res.data;
      if (result.status.id >= 3) break;

      await sleep(1000);
    }

    return {
      status: result.status.description,

      stdout: result.stdout ? atob(result.stdout) : "",
      stderr: result.stderr ? atob(result.stderr) : "",
      compile_output: result.compile_output
        ? atob(result.compile_output)
        : "",

      time: result.time,
      memory: result.memory
    };
  } catch (error) {
    console.error("Error executing code:", error);

    return {
      status: "Error",
      stdout: "",
      stderr: "Execution failed. Please try again."
    };
  }
}