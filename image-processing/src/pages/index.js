import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

class Index extends React.Component {
  render() {
    const data = this.props.data;
    const images = data.allImageSharp.edges;

    const fluid = data.fluidImages.childImageSharp.fluid;

    const fixed = data.fixedImages.childImageSharp.fixed;

    const cropDefault = data.cropDefault.childImageSharp.resize;
    const cropBottomLeft = data.cropBottomLeft.childImageSharp.resize;
    const cropEntropy = data.cropEntropy.childImageSharp.resize;
    const cropCenter = data.cropCenter.childImageSharp.resize;

    const fluidDuotoneOriginal = data.fluidDuotoneOriginal.childImageSharp.fluid;

    const fluidDuotone25 = data.fluidDuotone25.childImageSharp.fluid;
    const fluidDuotone50 = data.fluidDuotone50.childImageSharp.fluid;
    const fluidDuotone75 = data.fluidDuotone75.childImageSharp.fluid;
    const fluidDuotone = data.fluidDuotone.childImageSharp.fluid;

    return (
      <div>

        {/* ВСЕ ИЗОБРАЖЕНИЯ - МАЛЕНЬКИЕ */}
          {/* {images.map((image) => (
            <li>
              <img
                src={image.node.resize.src}
              />
            </li>
          ))} */}


          {/* ФОТО ЧЕЛОВЕКА ЧБ маленькое */}
        {/* <ul style={{ ...styles.ul, ...styles.row }}>
          <li style={styles.column25}>
            <img
              src={cropDefault.src}
            />
          </li>
          <li style={styles.column25}>
            <img
              src={cropBottomLeft.src}
            />
          </li>
          <li style={styles.column25}>
            <img
              src={cropEntropy.src}
            />
          </li>
          <li>
            <img
              src={cropCenter.src}
            />
          </li>
        </ul> */}

        <Img fluid={fluid} />
        <div style={styles.row}>
          {/* <div style={styles.column20}>
            <Img fluid={fluidDuotoneOriginal} />
          </div>
          <div style={styles.column20}>
            <Img fluid={fluidDuotone25} />
          </div>
          <div style={styles.column20}>
            <Img fluid={fluidDuotone50} />
          </div>
          <div style={styles.column20}>
            <Img fluid={fluidDuotone75} />
          </div> */}
          <div style={styles.column20}>
            <Img fluid={fluidDuotone} />
          </div>
        </div>
        {/* <Img fixed={fixed} /> */}
      </div>
    );
  }
}

const styles = {};

styles.row = {
  display: `flex`,
  flexWrap: `wrap`,
  margin: `8px -4px 1rem`,
};

styles.ul = {
  padding: `0`,
  listStyle: `none`,
};

styles.column20 = {
  flexShrink: 0,
  flexGrow: 0,
  color: `#999`,
  width: `20%`,
  padding: `0 4px`,
  margin: 0,
};

styles.column25 = {
  flexShrink: 0,
  flexGrow: 0,
  color: `#999`,
  width: `25%`,
  padding: `0 4px`,
  margin: 0,
};

export default Index;

export const pageQuery = graphql`
  query {
    allImageSharp {
      edges {
        node {
          ... on ImageSharp {
            resize(width: 125, height: 125, rotate: 180) {
              src
            }
          }
        }
      }
    }
    fluidImages: file(
      relativePath: { regex: "/fecolormatrix-kanye-west.jpg/" }
    ) {
      childImageSharp {
        fluid(
          duotone: { highlight: "#f00e2e", shadow: "#192550" }
          traceSVG: {
            color: "#f00e2e"
            turnPolicy: TURNPOLICY_MINORITY
            blackOnWhite: false
          }
          toFormat: PNG
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    fluidDuotone: file(
      relativePath: { regex: "/fecolormatrix-kanye-west.jpg/" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 120
          duotone: { highlight: "#0ec4f1", shadow: "#192550" }
          traceSVG: { color: "#1E2151" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    fluidDuotone50: file(
      relativePath: { regex: "/fecolormatrix-kanye-west.jpg/" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 120
          duotone: { highlight: "#0ec4f1", shadow: "#192550", opacity: 50 }
          traceSVG: { color: "#A7DEF6" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    fluidDuotone75: file(
      relativePath: { regex: "/fecolormatrix-kanye-west.jpg/" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 120
          duotone: { highlight: "#0ec4f1", shadow: "#192550", opacity: 75 }
          traceSVG: { color: "#0ec4f1" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    fluidDuotone25: file(
      relativePath: { regex: "/fecolormatrix-kanye-west.jpg/" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 120
          traceSVG: { color: "#D1EFFB" }
          duotone: { highlight: "#0ec4f1", shadow: "#192550", opacity: 25 }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    fluidDuotoneOriginal: file(
      relativePath: { regex: "/fecolormatrix-kanye-west.jpg/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 120, traceSVG: { color: "#e7f7fe" }, toFormat: PNG) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    fixedImages: file(relativePath: { regex: "/lol.jpg/" }) {
      childImageSharp {
        fixed(grayscale: true, width: 500) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    cropDefault: file(relativePath: { regex: "/f-scott.jpg/" }) {
      childImageSharp {
        resize(width: 180, height: 180) {
          src
        }
      }
    }
    cropBottomLeft: file(relativePath: { regex: "/f-scott.jpg/" }) {
      childImageSharp {
        resize(width: 180, height: 180, cropFocus: SOUTHWEST) {
          src
        }
      }
    }
    cropEntropy: file(relativePath: { regex: "/f-scott.jpg/" }) {
      childImageSharp {
        resize(width: 180, height: 180, cropFocus: ENTROPY) {
          src
        }
      }
    }
    cropCenter: file(relativePath: { regex: "/f-scott.jpg/" }) {
      childImageSharp {
        resize(width: 180, height: 180, cropFocus: CENTER) {
          src
        }
      }
    }
  }
`;
