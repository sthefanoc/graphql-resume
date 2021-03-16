import Head from "next/head";
import { useQuery, gql } from "@apollo/client";
import { format } from "date-fns";
import { print } from "graphql/language/printer";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import prismStyle from "react-syntax-highlighter/styles/prism/xonokai";
import styles from "../styles/Home.module.css";
import ReactDOMServer from "react-dom/server";
import jsPDF from 'jspdf';

const ResumeQuery = gql`
query SthefanoCResume{
    bio{
      name
      tagline
      location
      email
      website
      objective
      shortDescription
    }
    socialLinks{
      id
      name
      url
      icon
    }
    languages{
      id
      name
      level
    }
    technologies{
      id
      name
      icon
    }
    educations{
      id
      title
      institution
      shortDescription
      startDate
      endDate
    }
    projects{
      id
      title
      githubRepo
      liveProject
      shortDescription
      technologies
    }
    positions{
        id
        title
        company
        location
        startDate
        endDate
        years
        months
        achievements
    }
  }
`;

export default function Home() {

    const printPDF = () => {
        console.log('printed')
    }

  const { data, error, loading } = useQuery(ResumeQuery);

  if (error) {
      console.log(error)
    return <span>Error... oops!</span>;
  }

  if (loading) {
    return (
      <header className={styles.header}>
        <h1>Sthefano Carvalho</h1>
        <h2>loading...</h2>
      </header>
    );
  }

  
  const { bio, positions, educations, languages, projects, socialLinks, technologies } = data;
  console.log('these are positions', positions)

  return (
    <>
      <Head>
        <title>{bio.name + " | CV"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.split}>
        <div className={styles.left}>

          <SyntaxHighlighter language="graphql" style={prismStyle}>
            {print(ResumeQuery)}
          </SyntaxHighlighter>
          <div className="btn-ro row no-margin">
              
              <button className="side-btn" onClick={()=>{window.open("/api/graphql")}}>
                <i className="fas fa-code"></i> GraphQL API Playground
              </button>
              <button className="side-btn" onClick={()=>{window.open("https://sthefanoc.com/about")}}>
              <i className="fas fa-user"></i> More about me
              </button>
          </div>
        </div>

        <div className={styles.right}>
        {/* <embed
            type="application/pdf"
            src="resume.pdf"
            id="pdfDocument"
            width="100%"
            height="100%">
        </embed> */}
            <div className="container-fluid overcover" id="resume">
              <div className="container profile-box">
                  <div className="row">
                      <div className="col-md-4 left-co">
                          <div className="left-side">
                              <div className="profile-info">
                                  <img src="https://avatars.githubusercontent.com/u/61240448?s=460&u=d47b353dadb0b0f10312916b5ebc8440d846d54a&v=4" alt="" />
                                  <h3>{bio.name}</h3>
                                  <span>{bio.tagline}</span>
                              </div>
                              <h4 className="ltitle">Contact</h4>
                              <div className="contact-box pb0">
                                  <div className="icon">
                                      <i className="fas fa-phone"></i>
                                  </div>
                                  <div className="detail">
                                      +55 11 987-998-135
                                  </div>
                              </div>
                              <div className="contact-box pb0">
                                  <div className="icon">
                                      <i className="fas fa-envelope"></i>
                                  </div>
                                  <div className="detail">
                                      <a href={`mailto:${bio.email}`} target="blank">{bio.email}</a>
                                  </div>
                              </div>
                              <div className="contact-box pb0">
                                  <div className="icon">
                                      <i className="fas fa-globe-americas"></i>
                                  </div>
                                  <div className="detail">
                                      <a href={bio.website} target="blank">{bio.website.replace('https://www.','').replace("/",'')}</a>
                                  </div>
                              </div>
                              <div className="contact-box">
                                  <div className="icon">
                                      <i className="fas fa-map-marker-alt"></i>
                                  </div>
                                  <div className="detail">
                                      {bio.location}
                                  </div>
                              </div>
                              <h4 className="ltitle">Contact / Social</h4>
                              <ul className="row social-link no-margin">
                                    {socialLinks.map((socialLink) => (
                                    <li>
                                        <i className={socialLink.icon}></i>
                                        <a href={socialLink.url} target="blank">
                                            {socialLink.url.replace('https://','').replace('linkedin.com/in/','.../')}
                                        </a>
                                    </li>))}                  
                                  
                              </ul>
                              <h4 className="ltitle">Languages</h4>
                              <ul className="language-box">
                                  {languages.map((language) => (
                                    <li className="language-level">
                                      <b>{language.name}</b>
                                      <p>{language.level}</p>
                                  </li>
                                  ))}
                              </ul>
                              
                              <h4 className="ltitle">Main Technologies</h4>
                              <ul className="technologies row no-margin">
                                  {technologies.map((technology)=>(
                                    <li>
                                        <i className={technology.icon}></i>
                                        <p>{technology.name}</p>
                                    </li>
                                  ))}                                  
                              </ul>
                          </div>
                      </div>
                      <div className="col-md-8 rt-div">
                          <div className="rit-cover">
                              <div className="hotkey">
                                  <h1 className="">{bio.name}</h1>
                                  <small>{bio.tagline}</small>
                              </div>
                              <h2 className="rit-titl"><i className="fas fa-crosshairs"></i> Objective</h2>
                              <div className="about">
                                  <p>{bio.objective}</p>
                              </div>

                              <h2 className="rit-titl"><i className="far fa-user"></i> Profile</h2>
                              <div className="about">
                                  <p>{bio.shortDescription}</p>
                                  <div className="btn-ro row no-margin">
                                      <ul className="btn-link">
                                          <li>
                                              {/* <button className="side-btn" onClick={() => {console.log('aaaaaaa')}}><i className="fas fa-paper-plane"></i> Hire Me</button> */}
                                              <button className="side-btn" onClick={()=>{alert("Great!\nYou'll be redirected to the contact page. Thank you.");window.open("https://sthefanoc.com/contact")}}>
                                                <i className="fas fa-paper-plane"></i> Hire me
                                            </button>
                                              
                                          </li>
                                          <li>
                                              {/* <button className="side-btn" onClick={printPDF}><i className="fas fa-cloud-download-alt"></i> Download Resume</button> */}
                                              <button className="side-btn" onClick={()=>{window.open('/SthefanoC_Resume.pdf')}}>
                                                <i className="fas fa-cloud-download-alt"></i> Download Resumè
                                            </button>
                                          </li>
                                      </ul>
                                  </div>
                              </div>

                              <h2 className="rit-titl"><i className="fas fa-code"></i> Projects</h2>
                              <ul className="projects">
                                  {projects.map((project) => (
                                      <li>
                                          <div className="project-description">
                                            <a href={project.liveProject} target="_blank" rel="noopener noreferrer">
                                                <h6>{project.title}</h6>
                                            </a>
                                            <p>{project.shortDescription}</p>
                                            <a href=""><b>Github: </b>{project.githubRepo.replace("https://github.com/",".../")}</a>
                                            <a href=""><b>Live: </b>{project.liveProject.replace("https://","")}</a>
                                          </div>
                                          <ul className="project-technologies">
                                            {project.technologies.map((tech) => (
                                                <li>
                                                    <b>{tech.split(":")[0]}</b>
                                                    <p>{tech.split(":")[1]}</p>
                                                </li>
                                            ))}
                                          </ul>
                                          
                                      </li>
                                    ))}
                              </ul>

                              <h2 className="rit-titl"><i className="fas fa-briefcase"></i> Work Experience</h2>
                              <ul className="work-exp">
                                  {positions.map((position) => {
                                      const length = [
                                        position.years > 0 ? `${position.years} yrs` : null,
                                        position.months > 0 ? `${position.months} mths` : null,
                                      ]
                                        .filter((str) => str)
                                        .join(" ");
                                    return(
                                      <li>
                                          <div className="work-title">
                                            <h6>{position.title}</h6>
                                            <div className="work-dates">
                                                <b className="work-start-end">
                                                    {format(new Date(position.startDate), "MMM yyyy")} -{" "}
                                                    {position.endDate
                                                        ? format(new Date(position.endDate), "MMM yyyy")
                                                        : "Current"}{" "}</b>
                                                <p className="work-total-time">({length})</p>
                                            </div>
                                          </div>
                                        
                                        <div className="work-position"><b>{position.company}</b> / {position.location}</div>
                                        <ul>
                                            {position.achievements.map((achievement) => (
                                            <li><i className="far fa-hand-point-right"></i>{achievement}</li>))}
                                        </ul>
                                      </li>
                                  )})}
                                  
                              </ul>
                             

                              <h2 className="rit-titl"><i className="fas fa-graduation-cap"></i> Education</h2>
                              <div className="education">
                                  <ul className="row no-margin">
                                      {educations.map((education) => (
                                          <li className="col-md-6">
                                              <span>{`${education.startDate.split('-')[0]}-${education.endDate.split('-')[0]}`}</span> 
                                              
                                              <p><b>{education.title}</b> / {education.institution}</p>
                                          </li>
                                      ))}
                                  </ul>
                              </div>

                              {/* <h2 className="rit-titl"><i className="fas fa-users-cog"></i> Skills</h2> */}
                              {/* <div className="profess-cover row no-margin">
                                  <div className="col-md-6">
                                      <div className=" prog-row row">
                                          <div className="col-sm-6">
                                              Photoshop
                                          </div>
                                          <div className="col-sm-6">
                                              <div className="progress">
                                                  <div className="progress-bar" role="progressbar" style={{width: "65%"}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="row prog-row">
                                          <div className="col-sm-6">
                                              PHP
                                          </div>
                                          <div className="col-sm-6">
                                              <div className="progress">
                                                  <div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="col-md-6">
                                      <div className="row prog-row">
                                          <div className="col-sm-6">
                                              Web Design
                                          </div>
                                          <div className="col-sm-6">
                                              <div className="progress">
                                                  <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="row prog-row">
                                          <div className="col-sm-6">
                                              Web Development
                                          </div>
                                          <div className="col-sm-6">
                                              <div className="progress">
                                                  <div className="progress-bar" role="progressbar" style={{width: "55%"}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div> */}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
