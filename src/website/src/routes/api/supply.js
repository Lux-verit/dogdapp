export async function get(request) {
  console.log("API endpoint hit");
  return {
    body: "1000000",
    headers: {
      "Content-Type": "text/plain",
    },
  };
}
