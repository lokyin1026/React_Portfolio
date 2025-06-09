import { Page } from "../layouts/Page";
import { projects } from "../constants/PagesConstants";
import { Divbox } from "../layouts/Divbox";
import { Box, Typography } from "@mui/material";

export const Projects = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap');
        `}
      </style>
      <div className="tw:text-center">
        <Page
          name="Nelson Ng Lok Yin"
          description="Intro about projects goes here, following are the details of all projects that I have involved in it previously."
          childrenSlot={() => (
            <>
              <Divbox
                childrenSlot={() => (
                  <>
                    {projects.map((project, index) => (
                      <div key={index} className="tw:flex tw:mb-10">
                        <div className="tw:max-w-[40%] tw:aspect-[16/9] tw-relative tw-rounded-lg tw-overflow-hidden tw:p-2">
                          <img
                            src={project.src}
                            className="tw:w-full tw:h-full tw-object-cover tw-rounded-lg"
                            alt={project.alt}
                            loading="lazy"
                          />
                        </div>
                        <div className="tw:block tw:text-left tw:p-2">
                          <Typography component="div">
                            <div
                              className="tw:text-3xl tw:italic tw:mb-4 div-subtitle"
                            >
                              {project.title}
                            </div>
                            <Box sx={{ fontSize: 16, mb: 2 }}>
                              {project.description}
                            </Box>
                            <Box sx={{ fontSize: 16 }}>
                              {"Tech Stack:"}
                            </Box>
                            <div className="tw:flex tw:mt-1">
                              {project.stacks.map((stack) => (
                                <img className="tw:h-[40px] tw:w-auto tw:p-1" src={stack} />
                              ))}
                            </div>
                          </Typography>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              />
            </>
          )}
        />
      </div>
    </>
  );
};
