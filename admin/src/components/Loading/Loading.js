import React from "react";
import './Loading.scss';
const Loading = () => {
    return (
      <section>
        <div class="loader">
          <div class="upper ball"></div>
          <div class="right ball"></div>
          <div class="lower ball"></div>
          <div class="left ball"></div>
        </div>
      </section>
    );
  };
  export default Loading;