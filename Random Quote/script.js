async function generateQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    return { quote: data.content, author: data.author, tags: data.tags}; // returns the quote, author and tags
  } catch (error) {
    throw error;
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  // Example usage of generateQuote with async/await
  async function updateQuote() {
    const quoteElement = document.getElementById("quotedom");
    const authorElement = document.getElementById("authordom");
    const tagsdom = document.getElementById("tagsdom")
    try {
      const quoteData = await generateQuote();
      // Truncate the quote if it exceeds a certain length
      const maxLength = 80; // Maximum length of the quote
      const truncatedQuote = quoteData.quote.length > maxLength ? quoteData.quote.substring(0, maxLength) + '...' : quoteData.quote;
      // Access and use the quoteData outside of the function
      authorElement.textContent = quoteData.author;
      quoteElement.textContent = '"' + truncatedQuote + '"';
      tagsdom.innerHTML = ""
      quoteData.tags.forEach(element => {
          let tag  = document.createElement("p")
          tag.innerHTML = element
          console.log(tag, quoteData.tags)
          tagsdom.appendChild(tag)
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };


  updateQuote()

  document.getElementById("redo").addEventListener("click", function(){
    updateQuote()
  });
})