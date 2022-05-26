import React from "react";
import { Link } from "gatsby";
import Blogmenubg from "../../assets/images/blogmenu-bg.png"
import styled from "styled-components";
import prismicConfiguration from "../../../prismic-configuration";
const CatMenu = ({ cat, catList, lang }) => {    
    const blogPath = lang === prismicConfiguration.defaultLanguage ? `blog` : `${lang.slice(0, 2)}/blog` 
    return (
        <BlogMenu>
            <ul>
                <li> <Link to={`/${blogPath}`} className={!cat && 'active'}>all</Link></li>
                { catList && catList.edges.map(({node}, index)=>{
                    const categoryPath =  node.lang === prismicConfiguration.defaultLanguage ? `blog/${node.uid}` : `${node.lang.slice(0, 2)}/blog/${node.uid}`
                    return(
                        <li> <Link to={`/${categoryPath}/`} className={cat && cat===node.uid && 'active'}>{node.data.title.text}</Link></li>
                    )
                })}
            </ul>
        </BlogMenu>
    )
}
export default CatMenu


const BlogMenu = styled.div`
margin:40px 0;
ul {margin:0; padding:0; display: flex; align-items: center; justify-content: center;}
ul li {list-style:none; float:left; 
  .active {background-color:#4478db; color:#fff;box-shadow: 10px 0px 24px rgba( 68, 120, 219,0.27); 
    &:before { content:'';position: absolute;bottom:-7px; left:44%;width:24px;height:9px;
    background-image: url(${Blogmenubg});background-repeat:no-repeat; z-index:999;}
  }
}

ul li a {position:relative;
  color:#5f5f5f; font-size:25px; line-height:35px; text-transform:capitalize; border-radius:10px;
  padding:13px 30px; margin:0 5px;

  &:hover {background-color:#4478db; box-shadow: 10px 0px 24px rgba( 68, 120, 219,0.27); color:#fff;

  &:before { content:'';position: absolute;bottom:-7px; left:44%;width:24px;height:9px;
background-image: url(${Blogmenubg});background-repeat:no-repeat; z-index:999;}
 
  }
}
`

