import { Page } from "../layouts/Page";
import { projects } from "../constants/PagesConstants";
import { Divbox } from "../layouts/Divbox";
import { Typography } from "@mui/material";

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
                          <Typography
                            variant="h6"
                            sx={{
                              color: "white",
                              fontStyle: "italic",
                              mb: 2,
                            }}
                          >
                            {project.title}
                          </Typography>
                          <Typography variant="body1">
                            {project.description}
                          </Typography>
                          <div></div>
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
