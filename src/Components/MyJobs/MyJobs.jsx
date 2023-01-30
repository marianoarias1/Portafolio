import React from 'react'
import { Desc, DescContaiener, EachCardContainer, JobsCard, JobsCardContainer, JobsContainer, JobsImage, JobsImageContainer, JobsLink, JobTitleContainer, NameJobs, NameJobsContainer, TitleJobs, ViewJob } from './MyJobsStyles'
import { jobs } from '../Jobs/jobsArray'

const JobItem=({url, link, desc, name})=>{
    return(
        <EachCardContainer> 
            <JobsCard>
                <JobsImageContainer>
                    <JobsImage src={url}  href={link}/>
                </JobsImageContainer>

                <DescContaiener>
                    <Desc>
                        <NameJobsContainer>
                        <NameJobs>{name}</NameJobs>
                        </NameJobsContainer>

                        {desc}
                    </Desc>
                </DescContaiener>
 
            </JobsCard>
            
            <JobsLink href={link} target='_blank'>
                <ViewJob>{'< Deploy />'}</ViewJob>
            </JobsLink>

        </EachCardContainer>
    )
}

export const MyJobs = () => {
  return (
    <>
        <JobsContainer>
            <JobTitleContainer>
                <TitleJobs id='jobs'>Algunos proyectos que realicé</TitleJobs>
            </JobTitleContainer>
        
                <JobsCardContainer>
                    {
                        jobs.map((job)=> <JobItem key={job.id} {...job}/>)
                    }
                </JobsCardContainer>
        </JobsContainer>
    </>
  )
}
