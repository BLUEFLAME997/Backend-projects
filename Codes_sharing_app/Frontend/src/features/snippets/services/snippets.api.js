import axios from 'axios';
import { LANGUAGE_VERSIONS } from '../contants/languages';
import { CODE_SNIPPETS } from '../contants/languages';

const API = axios.create({
  baseURL: "https://ce.judge0.com",
  headers: {
    "Content-Type": "application/json"
  }
});

export async function executeCode(sourceCode, language) {
  try {
    const encodedCode = btoa(sourceCode);

    const { data } = await API.post("/submissions?base64_encoded=true", {
      source_code: encodedCode,
      language_id: LANGUAGE_VERSIONS[language]
    });

    const token = data.token;

    let result;

    while (true) {
      const res = await API.get(`/submissions/${token}`, {
        params: { base64_encoded: "true" }
      });

      result = res.data;

      if (result.status.id >= 3) break;

      await new Promise((r) => setTimeout(r, 1000));
    }

    return {
      stdout: result.stdout ? atob(result.stdout) : "",
      stderr: result.stderr ? atob(result.stderr) : "",
      compile_output: result.compile_output
        ? atob(result.compile_output)
        : ""
    };
  } catch (error) {
    console.error("Error executing code:", error);
    return {
      stdout: "",
      stderr: "Execution failed"
    };
  }
}