import React, { useState } from "react"
import { Link, useStaticQuery, graphql, navigate } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Select, { components } from "react-select"
import { linkResolver } from "../../utils/linkResolver"
import { handleLangContent } from "../../utils/handleLangContent"
import SVG from "react-inlinesvg"
import { Helmet } from "react-helmet"
import parse from "html-react-parser"

const Header = (props) => {
  //ReactDOMServer.renderToString(<Handler />)
  //const helmet = Helmet.renderStatic()
  //console.log("header", props)
  const { allPrismicHeader, allPrismicNavigation } = useStaticQuery(graphql`
    query {
      allPrismicHeader {
        nodes {
          lang
          data {
            logo {
              gatsbyImageData
            }
            languages {
              label
              value
              icon {
                alt
                url
              }
              enabled
            }
            button_label
            links {
              label
              link {
                lang
                uid
                type
              }
            }
            custom_scripts {
              label
              code
            }
          }
        }
      }
    }
  `)
  //const headerData = allPrismicHeader.nodes[0].data
  const headerData = handleLangContent(
    allPrismicHeader.nodes,
    props.activeDocMeta.lang
  )
  console.log("headerData", headerData)
    /*
  const navData = allPrismicNavigation.nodes.filter(
    item => item.prismicId === headerData.menu.id
  )[0].data
    */

  /*
  const navData = handleLangContent(
    allPrismicNavigation.nodes,
    props.activeDocMeta.lang
  )
  console.log("navData", navData)
  */

  const currentLanguage = headerData.languages.filter(function (lang) {
    return lang.value === props.activeDocMeta.lang
  })

  const [language, setLanguage] = useState(currentLanguage[0])
  const [hambugerActive, setHambugerActiveState] = useState(false)
  
  const hamburgerHandler = () => {
    setHambugerActiveState(!hambugerActive)
  }

  const handleLang = selected => {
    setLanguage(selected)

    const targetLangDoc = props.activeDocMeta.alternate_languages.filter(
      function (altLang) {
        return altLang.lang === selected.value
      }
    )

    //console.log("handleLang", targetLangDoc)

    if(targetLangDoc.length > 0) {
      navigate(linkResolver(targetLangDoc[0]))
    } else {
      console.log("No language found for this page", selected.value, props)
    }

    //const validLangDoc = targetLangDoc.length > 0 ? targetLangDoc[0] : props
    //console.log("targetLangDoc", targetLangDoc)
      /*
    const doc = {
      lang: selected.value,
      type: props.activeDocMeta.type,
      uid: props.activeDocMeta.uid,
    }
    */
    
    
  }

  let humbugerClsName = "hamburger "
  let navMenuClsName = "navbar-nav "

  if (hambugerActive) {
    humbugerClsName += "active"
    navMenuClsName += "active"
  }

  const SingleValue = ({ children, ...props }) => (
    <components.SingleValue {...props}>
      <SVG
        className="language-single"
        src={props.data.icon.url}
        height={28}
        width={28}
        title={props.data.label}
      />
    </components.SingleValue>
  )
  const Option = props => (
    <components.Option {...props}>
      <SVG
        className="language-option"
        src={props.data.icon.url}
        height={18}
        width={18}
        title={props.data.label}
      />
      {props.data.label}
    </components.Option>
  )
  
  return (
    <>
      <Helmet>
        {headerData.custom_scripts?.map((item, idx) => {
          return parse(item.code)
        })}
      </Helmet>

      <header>
        <nav className="navbar">
          <div className="container">
            <Link to="/">
              <GatsbyImage className="logo" image={getImage(headerData.logo)} alt="logo" />
            </Link>
            <ul className={navMenuClsName}>
              {headerData.links.map((item, idx) => (
                <li className="nav-item" key={idx}>
                  <Link
                    className="nav-link"
                    activeClassName="active"
                    to={linkResolver({
                      type: item.link.type,
                      uid: item.link.uid,
                      lang: props.activeDocMeta.lang,
                    })}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="lang-switcher">
              <Select
                isSearchable={false}
                value={language}
                onChange={handleLang}
                options={headerData.languages}
                components={{ SingleValue, Option }}
                styles={{
                  valueContainer: base => ({
                    ...base,
                    padding: "0",
                  }),
                  control: base => ({
                    ...base,
                    outline: "none",
                    border: "none",
                    boxShadow: "none",
                    cursor: "pointer",
                    "&:hover": {
                      borderColor: "red",
                    },
                  }),
                  menu: base => ({
                    ...base,
                    left: "-100px",
                    width: "auto",
                    overflow: "auto",
                    boxShadow: "0 27px 49px rgba(29, 22, 55, 0.36)",
                    borderRadius: "10px",
                  }),
                  menuList: base => ({
                    ...base,
                    width: "200px",
                    height: "auto",
                  }),
                  singleValue: base => ({
                    ...base,
                    padding: 0,
                    margin: 0,
                    borderRadius: "50%",
                  }),
                  dropdownIndicator: () => ({
                    paddingLeft: "4px",
                  }),
                  indicatorSeparator: () => ({
                    display: "none",
                  }),
                  option: (base, state) => {
                    return {
                      ...base,
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      padding: "10px 21px",
                      margin: "0",
                      width: "100%",
                      borderBottom: "1px solid rgba(19,19,19,0.1)",
                      fontSize: "20px",
                      fontWeight: state.isSelected ? "600" : "400",
                      color: state.isSelected ? "#4478db" : "#636363",
                      backgroundColor: "white",
                      borderRight: state.isSelected && "3px solid #4478db",
                      borderRadius: "unset",
                    }
                  },
                }}
              />
            </div>
            <Link className="get-started btn-green" to="/">
              {headerData.button_label}
            </Link>
            <div
              className={humbugerClsName}
              onClick={hamburgerHandler}
              onKeyDown={hamburgerHandler}
              role="button"
              tabIndex="0"
            >
              <div className="hamburger-inner">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
