import React, { useState } from 'react'
import blogList from "../utilis/blogdata"
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Tags from '../shop/Tags';
import PopularPost from '../shop/PopularPost';

const socialList = [
    {
        link: "#",
        iconName: "icofont-facebook",
        className: "facebook",
    },
    {
        link: "#",
        iconName: "icofont-twitter",
        className: "twitter",
    },
    {
        link: "#",
        iconName: "icofont-linkedin",
        className: "linkedin",
    },
    {
        link: "#",
        iconName: "icofont-instagram",
        className: "instagram",
    },
    {
        link: "#",
        iconName: "icofont-pinterest",
        className: "pinterest",
    },
];

const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList);
    const { id } = useParams()
    // console.log(id);

    // Fol filter the blogs--
    const result = blogList.filter((b) => b.id === Number(id));
    console.log(result[0]);


    return (
        <div>
            <PageHeader title={"Single Blog Pages"} curPage={"Blog / Blog Details"} />


            <div className="blog-section blog-single padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* Left Side -- */}
                        <div className='col-lg-8 col-12'>
                            <article>
                                <div className="section-wrapper">
                                    <div className="row row-cols-1 justify-content-center g-4">
                                        <div className="col">
                                            <div className="post-item style-2">
                                                <div className="post-inner">
                                                    {
                                                        result.map((item) => (
                                                            <div key={item.id}>
                                                                <div className="post-thumb">
                                                                    <img src={item.imgUrl} alt="" className='w-100' />
                                                                </div>

                                                                <div className="post-content">
                                                                    <h3>{item.title}</h3>
                                                                    <div className="meta-post">
                                                                        <ul className='lab-ul'>
                                                                            {
                                                                                item.metaList.map((val, i) => (
                                                                                    <li key={i}><i className={val.iconName}></i> {val.text}</li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>

                                                                    <p>{item.desc}</p>
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut pariatur error esse dolorum earum exercitationem veniam in consectetur maxime, accusantium nihil non enim quia optio. Nisi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at nisi cum nihil veritatis sequi sint ad obcaecati, doloribus facilis debitis soluta? Sapiente totam dicta molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate asperiores ea rerum eveniet nostrum iste sed ducimus ipsa aliquam beatae doloribus vitae officiis, laboriosam quos voluptas?</p>
                                                                    <blockquote>
                                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim harum maiores unde quod recusandae eius, in illo, minima necessitatibus quas magni sint voluptatem expedita ipsa perferendis.</p>
                                                                        <cite>
                                                                            <a href="#">...Malissa Hunter</a>
                                                                        </cite>
                                                                    </blockquote>

                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem at odit, adipisci architecto veritatis neque assumenda provident porro corporis eligendi fuga delectus quis odio maiores.Dolorum in nihil nostrum mollitia iusto blanditiis nemo ratione. Consequuntur ex optio, sit eum veritatis maiores? Error, ab.</p>
                                                                    <img src="/src/assets/images/blog/single/01.jpg" alt="" />

                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem at odit, adipisci architecto veritatis neque assumenda provident porro corporis eligendi fuga delectus quis odio maiores.Dolorum in nihil nostrum mollitia iusto blanditiis nemo ratione. Consequuntur ex optio, sit eum veritatis maiores? Error, ab.</p>

                                                                    <div className="video-thumb">
                                                                        <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                                                        <a href="https://youtu.be/EkFWVo_3Fdk?si=tblQxCNaovejEKIf"
                                                                            className='video-button popup'
                                                                            target='_blank'
                                                                            >
                                                                            <i className='icofont-ui-play'></i>
                                                                        </a>
                                                                    </div>

                                                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet quasi autem laborum quod. Aliquam totam fugiat voluptates, numquam mollitia quia adipisci quam quos minus ducimus! Perspiciatis!.. Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Velit, eaque necessitatibus similique illum laudantium magnam molestias repellat odit quisquam? Sit nisi animi ad asperiores ducimus et.</p>

                                                                    <div className="tags-section">
                                                                        <ul className="tags lab-ul">
                                                                            <li>
                                                                                <a href="#">Agency</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Business</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Personal</a>
                                                                            </li>
                                                                        </ul>

                                                                        <ul className="lab-ul social-icons">
                                                                            {
                                                                                socialList.map((val, i) => (
                                                                                    <li key={i}>
                                                                                        <a href="#" className={val.className}>
                                                                                            <i className={val.iconName}></i>
                                                                                        </a>
                                                                                    </li>
                                                                                ))
                                                                            }
                                                                        </ul>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>


                                            <div className="navigations-part">
                                                <div className="left">
                                                    <a href="#" className='prev'>
                                                        <i className='icofont-double-left'></i> Previous Blog
                                                    </a>
                                                    <a href="#" className='title'>
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. ..._
                                                    </a>
                                                </div>
                                                <div className="right">
                                                    <a href="#" className='next'>
                                                        <i className='icofont-double-right'></i> Next Blog
                                                    </a>
                                                    <a href="#" className='title'>
                                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates.
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* Left Side -- */}
                        <div className='col-lg-4 col-12'>
                            <aside>
                                <Tags />
                                <PopularPost />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog