const API_BASE_URL = process.env.REACT_APP_LARLEW_BASE_URL;

const checkFetchResponse = (fetchResponse) => {
    if (!fetchResponse.ok) {
        console.error("Fetch error:", fetchResponse.statusText);
      throw new Error("Network response was not ok");
    }
}

export const mathService = {

  calculateSum: async (a, b) => {
    const response = await fetch(`${API_BASE_URL}/math/sum?a=${a}&b=${b}`);
    checkFetchResponse(response);

    return await response.json();
  },

  calculateDifference: async (a, b) => {
    const response = await fetch(`${API_BASE_URL}/math/difference?a=${a}&b=${b}`);
    checkFetchResponse(response);

    return await response.json();
  },

  calculateProduct: async (a, b) => {
    const response = await fetch(`${API_BASE_URL}/math/product?a=${a}&b=${b}`);
    checkFetchResponse(response);

    return await response.json();
  },

  calculateQuotient: async (a, b) => {
    const response = await fetch(`${API_BASE_URL}/math/quotient?a=${a}&b=${b}`);
    checkFetchResponse(response);

    return await response.json();
  }

};
