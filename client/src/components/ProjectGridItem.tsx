import React from "react";

type Props = {
  id?: number;
  title?: string;
  tech?: string[];
  description?: string;
  gitLink?: string;
  external?: string;
  styles?: string;
};

type HeaderProps = {
  git?: string;
  web?: string;
};

function ProjectHeader({ git, web }: HeaderProps) {
  return (
    <div className="flex flex-row w-full justify-between items-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      </div>
      <ul className="flex flex-row space-x-2">
        <li>
          <a href={git} target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6 hover:fill-gray-500"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </li>
        <li hidden={web == null ? true : false}>
          <a href={web} target="_blank">
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6 hover:stroke-gray-500"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}

function ProjectGridItem({
  title,
  tech,
  description,
  gitLink,
  external,
  styles,
}: Props) {
  return (
    <article
      className={`flex-col w-[325px] h-[325px] bg-gray-800 rounded-lg px-3 py-3 hover:-translate-y-2 drop-shadow-2xl cursor-pointer ${styles}`}
    >
      <ProjectHeader git={gitLink} web={external} />
      <h1 className="font-semibold text-[22px] pt-4 pb-2">{title}</h1>
      <div className="flex grow">
        <p className="text-[15px] text-gray-300">{description}</p>
      </div>
      <div>
        <ul className="flex flex-row list-none space-x-2 text-gray-500 text-[12px]">
          {tech?.map((item, indx) => {
            return <li key={indx}>{item}</li>;
          })}
        </ul>
      </div>
    </article>
  );
}

export default ProjectGridItem;
