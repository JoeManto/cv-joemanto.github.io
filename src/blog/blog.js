import React from "react";
import "../styles.css";

export function BlogPost() {

    return (
      <div style={{position:"fixed",top:"40%",left:"30%"}}>
          <h1>Page is not ready yet 👨🏽‍🚀</h1>
          <p>Working on adding blog posts</p>

          <p>In the meantime enjoy a random quote <strong>"Reading without reflecting is like eating without digesting."</strong> - Edmund Burke </p>
      </div>
    );

  /*return (
    <div className="App">
      <Header name={"header-name"} subtitle={"this is a subtitle"} />
      <ContentPlain>
          <ContentText text = {`
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
          `}/>
        <ContentText text = {`
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
          `}/>

        <JMImage src={image} alt={"image"} subtitle={"this is a subtitle"} />

        <JMCode
          code={`function JMImage(props) {
            return (
              <div className={"image"}>
                <img src={props.src} width={"100%"} height={"100%"} alt={props.alt} />
                {props.subtitle !== "" && (
                  <label className={"image-subtitle"}>{props.subtitle}</label>
                )}
              </div>
            );
          }`}
          language={"javascript"}
        />
      </ContentPlain>
    </div>
  );*/
}
