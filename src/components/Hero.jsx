import React from "react";
import { logo } from "../assets";

function Hero() {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() =>
            window.open(
              "https://github.com/noxiousghost/article-summarizer",
              "_blank"
            )
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles Instantly with <br className="max-md:hidden" />
        <span className="orange_gradient ">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Save time and get the gist of any article in seconds. Our AI-powered
        summarizer quickly extracts the main points from any URL, giving you a
        concise and clear summary. Just paste the link and let our tool do the
        rest!
      </h2>
    </header>
  );
}

export default Hero;
